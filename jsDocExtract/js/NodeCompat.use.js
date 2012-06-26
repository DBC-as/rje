EXPORTED_SYMBOLS = ['console', 'require'];
use("Print");

console = {
    log: function() { 
        var result = Array.slice.apply(arguments).map(String);
        result.push('\n');
        print(result.join(' '));
    }
}

var modules = {
    fs: fs
};

var fs = {
};

function require(modulename) {
    return modules[modulename];
}
