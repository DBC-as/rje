// delayed execution, multiple calls to the function may be joined to a single call
// for example usefull for a redraw-function, 
// which shouldn't be called repeatedly if not needed
function callableUpdate(f) {
    var callneeded = false;
    return function() {
        if(!callneeded) {
            callneeded = true;
            setTimeout(10, function() {
                f();
                callneeded = false;
            });
        }
    }
};
