var seleneseRegexp = /<tr>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<td>(.*?)<.td>\s*<.tr>/g;
function parseSelenese(html) {
    result = [];
    html.replace(seleneseRegexp, function(_,command,target,value) {
        result.push({
            command: command,
            target: target,
            value: value
        });
    });
    return result;
};

var soda = require('soda');

var browser = soda.createSauceClient({
    'url': 'http://bibliotek.dk/'
  , 'browser': 'iexplore'
, 'username': 'ronronson'
, 'access-key': '74e253f4-739d-42bd-ac65-cbb79673d1fe'
, 'os': 'Windows 2003'
, 'browser-version': '7'
, 'name': 'This is an example test'
  /*
*/
});

browser.on('command', function(cmd, args){
  console.log(' \x1b[33m%s\x1b[0m: %s', cmd, args.join(', '));
});

/*
browser
  .chain
  .session()
  .open('/test/guinea-pig')
  .getTitle(function(title){
    assert.ok(~title.indexOf('I am a page title - Sauce Labs'), 'Title did not include the query');
  })
  .end(function(err){
    this.queue = null;
    this.setContext('sauce:job-info={"passed": ' + (err === null) + '}', function(){
      browser.testComplete(function(){
        if (err) throw err;
      });
    });
  });
  */


require('fs').readFile('selenese/example', 'utf-8', function(err, data) { 
    if(err) throw err; 
    var session = browser.chain.session();
    parseSelenese(data).forEach(function(elem) {
        console.log(elem);
        session = session[elem.command](elem.target, elem.value, function(result) {console.log("testresult", result)});
    });
    session.end(function(err) { browser.testComplete(function() {
            console.log("err:", err);
            }) });
});


/*

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
*/
