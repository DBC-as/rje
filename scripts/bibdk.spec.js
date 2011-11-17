describe("bibdk", function() {
    var bibdk;
    var token;
    beforeEach(function() {
      bibdk = require('bibdk');
      token = bibdk.login({user: 'testuser', password: 'testpassword'}).access_token;
    });

    it('returns an error when login fails', function() {
        var token = bibdk.login({user: 'noUserOfThisName', password: 'invalidPassword'});
        expect(token.error).toBeTruthy();
    });

    it('returns a string token when loggin in', function() {
        var token = bibdk.login({user: 'testuser', password: 'testpassword'});
        expect(token.error).toBeFalsy();
        expect(typeof token.access_token).toBe('string');
    });
});
