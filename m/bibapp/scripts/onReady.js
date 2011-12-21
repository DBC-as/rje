define(['jquery'], function($) {
    return function(fn) {
        // if phonegap on device, we need to wait for deviceready event before executing
        if(typeof PhoneGap !== "undefined" && PhoneGap.device) {
            document.addEventListener("deviceready", function() { $(fn); }, false);
            return;
        } 

        // if on node, `$(fn)` will not execute fn, but we can expect it to be 
        // initialised now, and just schedule the callback to be executed.
        if(typeof process !== "undefined" && process.versions && process.versoins.node) {
            process.nextTick(fn);
            return;
        } 

        // use jquery/zepto for ready-callback
        $(fn);
    };
});
