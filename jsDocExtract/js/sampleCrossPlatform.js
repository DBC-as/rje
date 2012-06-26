// Compat, define local use if in node, or load NodeCompat if in jscommon
if(typeof use=='undefined')use=function(modulename){eval(require('fs').readFileSync('./'+modulename+'.use.js','utf8'));}else use('NodeCompat');
