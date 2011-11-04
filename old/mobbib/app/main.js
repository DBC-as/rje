var BibliographicEntry = Backbone.Model.extend({
    initialize: function() {
        // parse dkabm
        if(this.has('dkabm')) {
            var dkabm = this.get('dkabm');
            var result = {};

            Object.keys(dkabm).forEach(function(key){
                if(key.charAt(0) !== "@") 
                dkabm[key].forEach(function(value){
                    var newkey = key;
                    if(value["@type"]) {
                        newkey += " " + value["@type"].$;
                    }
                    if(!result[newkey]) {
                        result[newkey] = [];
                    }
                    result[newkey].push(value.$);
                });
            });

            this.set(result);
            this.unset('dkabm');
        }
    }
});

var ResultList = Backbone.Collection.extend({
    model: BibliographicEntry
});

var BookView = Backbone.View.extend({
    tagName: "div",
    className: "bibentry",

    initialize: function() {
        $(this.el).text(JSON.stringify(this.model.toJSON()));
    },

    render: function() {
    }
});

var ResultView = Backbone.View.extend({
    tagName: "div",
    className: "searchresults",
    initialize: function() {
        $('body').append($(this.el));

        this.model.bind('add', this.add, this)
        this.model.bind('reset', this.reset, this)
        this.reset();
    },
    reset: function() {
        $(this.el).html("Resultater af søgningen:");
    },
    add: function(model) {
        $(this.el).append((new BookView({model: model})).el);
    },
});


function main(){

window.results = new ResultList();
window.resultView = new ResultView({model: results});

function test() {
    $.get(
        'http://opensearch.addi.dk/2.0/?action=search&query=jensen&start=1&stepValue=10&outputType=json&callback=?',
        function (result) {
            console.log("got result");
            window.XXX = result.searchResponse.result;
            // just take the first entry in the collection (the collection/værk may contain different version of the same thing)

            for(i=0;i<10;++i) {
                results.add(new BibliographicEntry({dkabm: result.searchResponse.result.searchResult[i].collection.object[0].record}));
            }
        }

    )

}
test();
};
