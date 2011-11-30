define(['require', 'exports', 'bibdk'], function(require, exports) {
  var bibdk = require('bibdk');

  describe('bibdk', function() {
    describe('login', function() {
        it('returns an error when login fails', function() {
            async(); 
            bibdk.login({user: 'noUserOfThisName', password: 'invalidPassword', callback: function(result) {
                expect(result.error).toBeTruthy();
                done();
            }});
        });
        it('can log in successfully', function() {
            async(); 
            bibdk.login({user: bibdkUser, password: bibdkPassword, callback: function(result) {
                expect(result.error).toBeFalsy();
                done();
            }});
        });
    });
    describe('status', function() {
        it('shows list of orders', function() {
            var reservations = bibdk.reservations();
            expect(reservations.error).toBeFalsy();
        });
    });
    describe('search', function() {
        it('works when search yields no results', function() {
            async();
            bibdk.search({query: 'huhjkabrbkjabwfjnljwanflfnra', callback: function(results) {
                expect(results.length).toBe(0);
                done();
            }});
        });
        it('also finds results', function() {
            async();
            bibdk.search({query: 'fremtidskongressen', callback: function(results) {
                expect(results.length).toBe(3);
                expect(results[0].Forfatter).toBe('Stanislaw Lem');
                expect(results[1].Forfatter).toBe('Stanislaw Lem');
                expect(results[2].Forfatter).toBe('Stanislaw Lem');
                done();
            }});
        });
    });
  });

  // # utility function for async test
  var isDone;
  function async() {
    isDone = false;
    waitsFor(function() { return isDone; }, 'Test timeout', 10000);
  }
  function done() { isDone = true; };
});
