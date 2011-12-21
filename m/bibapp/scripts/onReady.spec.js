define(['onReady'], function(onReady) {
    var initialised = false;
    onReady(function() {
        initialised = true;
    });

    describe('onReady', function() {
        it('runs script when environment is ready', function() {
            waitsFor(function() { return initialised; }, "didn't run script within 10 sec.", 10000);
        });
    });
});
