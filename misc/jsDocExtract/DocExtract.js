EXPORTED_SYMBOLS = ["DocExtract"];
/**
 * Extract docs from source code.
 *
 * Note: The at-symbol (snabel-a) has a special meaning in comments, which is why it 
 * is replaced with (at) in the text below.
 *
 * Tag reference for JSDoc and ScriptDoc can be found on:
 * http://code.google.com/p/jsdoc-toolkit/wiki/TagReference
 * and
 * https://wiki.appcelerator.org/display/tis/ScriptDoc+%28SDOC%29+2.0+Specification
 *
 * In addition to these we have added our own comment tags:
 *
 * - (at)globalName
 * - (at)module
 *
 * This module is used for extract JSDoc/ScriptDoc comments from a javascript
 * file, and assigning them to __doc__ properties of the object they describe.
 * (The object may be a function, array, pure object, or anything else which
 * can be assigned properties). In order to assign to a __doc__ property we 
 * need the know the global name of the object we are assigning to. There is a
 * special (at)globalName that can be used to ensure that the global name is
 * correct. If this is not present, DocExtract will instead try to deduce the
 * name by taking the property name that was assigned, and append that to the
 * current module name. The module name is either given as a parameter with
 * the (at)module, or if a comment contains an empty (at)module, this will assume
 * that it is a module assignment.
 * (at)private variables will not get __doc__ assigned as we may not have access
 * to them from outside.
 *
 * @module
 */
DocExtract = (function() {
    "use strict";

    // `exports` is often called `that` in some of our
    // other modules, but using `exports` makes it easier
    // to transition to CommonJS modules later on.
    var exports = {};

    var matchDoc = /\/\*\*\s*\*?([\s\S]*?)\s*\*\/[\s\S]*?(\S*?)\s*=/g;
    /**
     * Extract documentation strings from sourcecode into a jsonml
     * representation.
     *
     * @param {string} str The source code as a string, from which comments needs to be extracted
     * @returns {array} a jsonml representation of all of the jsdoc documentation in the code
     */
    exports.extractDocStrings = function(str) {
        var result = ['apidoc', {}];
        var currentModule = '';
        str.replace(matchDoc, function(_, docstring, id) {
            docstring = docstring.replace(/\n\s*\*/g, '\n');
            var docs = ['doc', {}];

            // Find the brief and description of an item.
            // The brief is the text up to the first '.'.
            docstring.replace(/\s*([^@\.]*\.?)([^@]*)/, function(briefAndDescription, brief, description) {

                brief = brief.trim();
                if(brief) {
                    docs.push(['brief', brief.trim()]);
                }

                description = description.trim();
                if(description) {
                    docs.push(['description', description.trim()]);
                }
            });

            docstring.replace(/@(\w*)([^@]*)/g, function(_, param, text) {
                var opts = {};
                // Handle module names, this is also used for finding the
                // global name of the property
                if(param === 'module') {
                    currentModule = text.trim();
                }

                // Special property on privat modules, to ignore these when
                // setting __doc__ property of the object
                if(param === 'private') {
                    opts.isPrivate = true;
                }

                // Explicit version of the global name. If not present, we
                // will try to infer it later on
                if(param === 'globalName') {
                    docs[1].globalName = text.trim();
                }

                // Extract type annotations
                text = text.replace(/^\s*{(.*?)}/, function(_, type) {
                    opts.type = type;
                    return '';
                });

                // Extract parameter names
                if(param === 'param') {
                    text = text.replace(/^\s*(\S*)/, function(_, name) {
                            opts.name = name;
                            return '';
                    });
                }
                docs.push([param, opts, text.trim()]);
            });

            // Determine the global name of this property
            if(!docs[1].globalName) {
                // an empty @module comment, means that this is a global
                // module, and thus currentModule should be the name of this
                // module for the following comments
                if(currentModule === '') {
                    docs[1].globalName = currentModule = id;
                // else replace any that or export prefixes with the current
                // module.
                } else {
                    docs[1].globalName = id.replace(/.*\./, currentModule + '.');
                }
            }
            result.push(docs);
        });
        return result;
    };

    /**
     * Run through a set of docstrings, and assign them as `__doc__` property
     * on the corresponding objects.
     *
     * @param {object} global the root/global-object where the objects that
     *        needs `__doc__` properties can be found.
     * @param {array} jsonml The collection of docstrings. The jsonml is
     *        expected to be in normal form (ie. attribute object is present
     *        in every tag, even if it is empty)
     */
    exports.assignDocProperty = function(jsonml, global) {
        if(jsonml[0] !== 'apidoc' || !jsonml[1] || Array.isArray(jsonml[1]) || typeof(jsonml[1]) === 'string') {
            throw {error: 'parameter is not jsonml apidocs'};
        }
        var errors = [];

        // For each of the child nodes of the jsonml object
        jsonml.slice(2).forEach(function(doc) {
            try {
                if(doc[1].isPrivate) {
                    return;
                }
                // Find the object corresponding to the id 
                var parent = global;        
                var namePath = doc[1].globalName.split('.');
                for(var i = 0; i < namePath.length - 1; ++i) {
                    parent = parent[namePath[i]];
                }
                // and assign the doc property
                parent[namePath[i]].__doc__ = doc;
            } catch(err) {
                errors.push({error: err, id: doc[1].id});
            }
        });

        // Send error message
        if(errors.length > 0) {
            throw {error: 'Assigning some of the __doc__ properties failed. This may happen with private variables without a @private comment, or with modules where it is not possible to guess the correct id.', errors: errors};
        }
    };
    return exports;
})();
