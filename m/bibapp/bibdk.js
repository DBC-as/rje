(function(){
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
    function search(args) {
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
            url: 'http://opensearch.addi.dk/1.1/',
            data: {
                action: 'search',
                query: args.cql,
                start: start,
                stepValue: count,
                outputType: 'json'},
            dataType: 'jsonp',
            success: function (result) {
                console.log(result)
                if(result.searchResponse.error) {
                    callback({error: result.searchResponse.error.$});
                } else {
                    callback({
                        hitCount: result.searchResponse.result.hitCount.$,
                        start: start-1, // workaround that the webservice uses 1-based indexing
                        collections: result.searchResponse.result.hitCount.$ === 0 ? [] : result.searchResponse.result.searchResult.map(function(elem) { return processDKABM(elem.collection.object); })
                    });
                }
            }});
    }

    // # Exports
    var bibdk;
    if (typeof exports !== 'undefined') {
        bibdk = exports;
    } else {
        bibdk = {};
    }
    if(typeof window !== 'undefined') {
        window.bibdk = bibdk;
    }

    bibdk.search = search;
})();
