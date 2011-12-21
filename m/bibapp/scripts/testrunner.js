define(['onReady.spec' /* add test specs here */], function() {
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
});
