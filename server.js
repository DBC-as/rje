// simple web server for locally testing the webpage
var app = require('express').createServer();

app.configure(function(){
    app.use("/", require('express').static(__dirname ));
});

app.listen(process.env.PORT || 8080);
