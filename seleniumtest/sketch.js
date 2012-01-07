var config = {
    baseurl: 'http://bibliotek.dk'
}

var webdriverjs = require("webdriverjs");
var client = webdriverjs.remote({desiredCapabilities:{browserName:"firefox"}});

function findelement(target, callback) {
    if(target.slice(0,5) === 'link=') {
    } else {
        throw {error: "unsupported target", target: target};
    }
}
var selenese = {
    open: function(target, value) {
        this.client.url(config.baseurl + target);
    },
    type: function(target, value) {
    },
    clickAndWait: function(target, value) {
    },
    verifyTextPresent: function(target, value) {
    },
    client: client
};

function executeSelenese(data) {
    client.init();
    // string.prototype.replace is a simple way to map a function across all occurences of a regexp. We dont need the replace, but just the replacement function calls.
    data.replace(
            // regular expression that extract (command, target, value) triples from selenese html.
            /<tr>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<.tr>/g,
            function(_,command,target,value) { 
        if(typeof selenese[command] === 'function') {
            selenese[command](target, value);    
        } else {
            throw {error: 'unsupported command', command: command, target: target, value: value};
        }
        console.log('command:', command, ' target:', target, ' value:', value);
    });
}

require('fs').readFile('selenese/example', 'utf-8', 
    function(err, data){ if(err) throw err; executeSelenese(data)});
