define(['require', 'exports', 'bibdk'], function(require, exports) {
        var bibdk = require('bibdk');
        bibdk.search({
            cql: 'jensen', 
            start: 0, 
            count: 6, 
            callback: function(result) {
                console.log(result);
        }});
    
    console.log('main');
});