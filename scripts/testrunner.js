define(['require', 'exports', 'bibdk.spec'], function(require, exports) {
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
});
