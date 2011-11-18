describe("bibdk", function() {
    var bibdk;
    var token;
    beforeEach(function() {
      bibdk = require('bibdk');
      token = bibdk.login({user: 'bibdk-testuser@solsort.dk', password: 'bibdktest'}).access_token;
    });

    it('returns an error when login fails', function() {
        var token = bibdk.login({user: 'noUserOfThisName', password: 'invalidPassword'});
        expect(token.error).toBeTruthy();
    });

    it('returns a string token when loggin in', function() {
        var token = bibdk.login({user: 'bibdk-testuser@solsort.dk', password: 'bibdktest'});
        expect(token.error).toBeFalsy();
        expect(typeof token.access_token).toBe('string');
    });
});
