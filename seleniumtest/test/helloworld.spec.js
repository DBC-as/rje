var async = (function() {
  var isDone;
  return {
    begin: function() {
        isDone = false;
        waitsFor(function() { return isDone; }, 'Test timeout', 10000);
    },
    end: function() { isDone = true; }};
})();

describe('helloworld', function() {
    var webdriverjs = require("webdriverjs");
    var client = webdriverjs.remote({desiredCapabilities:{browserName:"firefox"}});

    it('checks that wikipedia search for hello world returns the page with heading "Hello world program"', function() {
        async.begin();
        client
            .init()
            .url('http://www.wikipedia.org/')
            .setValue("#searchInput", "hello world")
            .submitForm("#searchform")
            .getText("#firstHeading", function(result) {
                expect(result.value).toBe("Hello world program");
                async.end();
            })
            .end();
    });
});
