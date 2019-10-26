var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3030;

var friends = [];

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT)
});

app.get("/api/friends", function(req, res){
    return res.json(friends)
});

app.post("/api/friends", function (req, res){
    var newFriend = req.body;
    console.log(newFriend);

    friends.push(newFriend);

    res.json(newFriend);
});

