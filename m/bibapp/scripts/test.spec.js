define(['jquery', 'test'], function($) {
    describe('main', function() {
        it('says hello world', function() {
            expect($('#test').text()).toBe('hello');
        });
    });
});
