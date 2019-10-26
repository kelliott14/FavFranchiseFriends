var friends = require("../data/people");
var bestFriend = require("../data/people")

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });

    app.post("/api/friends", function (req, res){
        var newFriend = req.body;
        friends.push(newFriend);

        res.json(newFriend);
        console.log(friends)
    });

    var newFriend = friends.pop()
    var totalDiff = 0;
    var bestFriendScore = 99;
    var bestFriend = []
    
    friends.forEach(function(item){
        for (var i = 0; i < friends.length; i++){
            
            totalDiff = 0;
            if (item.score[i] < newFriend.score[i]){
                totalDiff += newFriend[i] - item.score[i]    
                i++
            }else{
                totalDiff += parseInt(item.score[i]) - parseInt(newFriend.score[i])
                i++
            }
    
        }
        
        if (bestFriendScore > totalDiff){
            bestFriend = [];
            bestFriend.push(item)
            bestFriendScore = totalDiff
    
        }
    
    });


};



