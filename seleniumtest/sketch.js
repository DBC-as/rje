function parseSelenese(data) {
    // string.prototype.replace is a simple way to map a function across all occurences of a regexp. We dont need the replace, but just the replacement function calls.
    data.replace(
            // regular expression that extract (command, target, value) triples from selenese html.
            /<tr>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<.tr>/g,
            function(_,command,target,value) { 
        console.log('command:', command, ' target:', target, ' value:', value);
    });
}

require('fs').readFile('selenese/example', 'utf-8', 
    function(err, data){ if(err) throw err; parseSelenese(data)});
