define(['jquery', 'main'], function($) {
    describe('main', function() {
        it('says hello world', function() {
            expect($('#test').text()).toBe('hello');
        });
    });
});
