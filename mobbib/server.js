// npm install express
// node app.js
var app = require('express').createServer();

app.configure(function(){
    app.use("/", require('express').static(__dirname ));
});

app.listen(8080);

console.log("Listening on 8080");
