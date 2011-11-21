define(['require', 'exports', 'bibdk'], function(require, exports) {
  describe('bibdk', function() {
    var bibdk;
    beforeEach(function() {
      bibdk = require('bibdk');
    });

    var isDone;
    function async() {
        isDone = false;
        waitsFor(function() { return isDone; }, 'Test timeout', 1000);
    }
    function done() { isDone = true; };


    it('returns an error when login fails', function() {
        async(); 
        console.log(bibdk);
        bibdk.login({user: 'noUserOfThisName', password: 'invalidPassword', callback: function(result) {
            console.log(result);
            expect(result.error).toBeTruthy();
            done();
        }});
    });

    it('can log in successfully', function() {
        async(); 
        bibdk.login({user: bibdkUser, password: bibdkPassword, callback: function(result) {
            console.log(result);
            expect(result.error).toBeFalsy();
            done();
        }});
    });
  });
});
