# Simple script to run DocExtract on a version of XmlElements for quick test.
# 
# Our module system is not CommonJS compatible, so we just include the module 
# in a string we pass to nodejs  (I use node.js for quick testing, due to its
# file reading and console.log)
node -e "`cat DocExtract.js`

require('fs').readFile('DocExtract.js', 'utf8', function(err, data) {
    if(err) throw err; 
    DocExtract.assignDocProperty(DocExtract.extractDocStrings(data), global); 
    console.log(DocExtract);
});"

