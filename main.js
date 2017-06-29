var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

var port = 80;
var root = path.join(path.resolve(__dirname, './dist/'));
app.use(express.static(root));

app.get("/*", function(req, res) {
    res.redirect("/");
});

http.listen(port, function() {
    console.log('listening *:' + port);
});