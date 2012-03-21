EXPORTED_SYMBOLS = ["DocExtract"];
/**
 * This module is used for extract JSDoc/ScriptDoc comments from a javascript
 * file, and assigning them to __doc__ properties of the things they describe.
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
     * @returns a jsonml representation of all of the jsdoc documentation in the code
     */
    exports.extractDocStrings = function(str) {
        var result = ['apidoc', {}];
        var currentModule = '';
        str.replace(matchDoc, function(_, docstring, id) {
            docstring = docstring.replace(/\n\s*\*/g, '\n');
            var docs = ['doc', {}];
            docstring.replace(/[^@]*/, function(descr) {
                docs.push(['brief', descr.trim()]);
            });
            docstring.replace(/@(\w*)([^@]*)/g, function(_, param, text) {
                var opts = {};
                if(param === 'module') {
                    currentModule = text.trim();
                }
                docs.push([param, opts, text.trim()]);
            });
            if(currentModule === '') {
                currentModule = id;
            } else {
                id = id.replace(/.*\./, currentModule + '.');
            }
            docs[1].id = id;
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
        if(jsonml[0] !== 'apidoc' || Array.isArray(jsonml[1]) || typeof(jsonml[1]) === 'string') {
            throw {error: 'jsonml is not apidocs'};
        }
        var errors = [];

        // For each of the child nodes of the jsonml object
        jsonml.slice(2).forEach(function(doc) {
            try {
                if(doc[1].private) {
                    return;
                }
                // Find the object corresponding to the id 
                var parent = global;        
                var id = doc[1].id.split('.');
                for(var i = 0; i < id.length - 1; ++i) {
                    parent = parent[id[i]];
                }
                // and assign the doc property
                parent[id[i]].__doc__ = doc;
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
