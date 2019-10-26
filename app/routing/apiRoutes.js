var friends = require("../data/people");

var bestFriendScore = 99;
var bestFriend = [];
var totalDiff = 0;
module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        return res.json(friends)
    });

    app.post("/api/friends", function (req, res){
        var newFriend = req.body;
        friends.push(newFriend);
        
        res.json(newFriend);
        
        
        var newFriend = friends.pop();
        
        
        friends.forEach(function(item){
            
            for (var i = 0; i < item.score.length; i++){
                
                
                totalDiff = 0;
                
                if (item.score[i] < newFriend.score[i]){
                    
                    totalDiff += parseInt(newFriend.score[i]) - parseInt(item.score[i])    
                    
                }else{
                   
                    totalDiff += parseInt(item.score[i]) - parseInt(newFriend.score[i])
                }
                
                
            }
         
            if (bestFriendScore > totalDiff){
                
                bestFriend = [];
                bestFriend.push(item)
                bestFriendScore = totalDiff
                
                app.post("/api/bestfriend", function(req, res){
                    res.json(bestFriend)
                    
                })
            }
        });
        
    });
    
    
    
    app.get("/api/bestfriend", function(req, res){
        res.json(bestFriend)
        console.log("56")
    })
    
};

