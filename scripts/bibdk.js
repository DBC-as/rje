define(['require', 'exports'], function(require, exports) {
    exports.login = function login(args) {
        $.ajax({
            url: "https://m.bibliotek.dk/custom/bibliotek_dk/access.jsp?go=25447841&cid=", 
            data: { 
                usr: 'bibdk-testuser@solsort.dk', 
                psw:'bibdktest'
            }, 
            dataType: 'html',
            type: 'POST',
            success: function(a,b,c) { A = a; B = b; C = c; console.log(a,b,c); }});
        return {error: "not implemented yet"};
    };

    // # Transform JSON-encoded DKABM-xml to straight JSON
    function processDKABM(xml) {
        var results = [];
        xml.forEach(function(dkabm) {
            dkabm = dkabm.record;
            var result = {};
            Object.keys(dkabm).forEach(function(key){
                if(key.charAt(0) !== "@") 
                dkabm[key].forEach(function(value){
                    var newkey = key;
                    if(value["@type"]) {
                        newkey = value["@type"].$ + " " + newkey;
                    }
                    if(!result[newkey]) {
                        result[newkey] = [];
                    }
                    result[newkey].push(value.$);
                });
            });
            results.push(result);
        });
        return results;
    }

    // # Call the webservice
    exports.search = function search(args) {
        // Parameter validation
        if(!args.callback) {
            throw "Callback parameter missing";
        }
        if(!args.cql) {
            callback({error: "query missing"});
            return;
        }
        // default values
        var count = args.count || 10;
        var start = (args.start || 0) + 1; // workaround that the webservice uses 1-based indexing
        // save callback in closure, as we are using it later at dont want to depend on args-structure.
        var callback = args.callback;

        // send the request using jquery
        // TODO: independence of jquery
        $.ajax({
            url: 'http://opensearch.addi.dk/2.0/',
            data: {
                action: 'search',
                query: args.cql,
                start: start,
                stepValue: count,
                outputType: 'json'},
            dataType: 'jsonp',
            success: function (result) {
                callback({
                    hitCount: result.searchResponse.result.hitCount.$,
                    start: start-1, // workaround that the webservice uses 1-based indexing
                    collections: result.searchResponse.result.hitCount.$ === 0 ? [] : result.searchResponse.result.searchResult.map(function(elem) { return processDKABM(elem.collection.object); })
                });
            }});
    }
});
