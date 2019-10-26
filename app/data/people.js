var friends = require("../../server");

//test data
friends = [
    {
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
    "score": [
    "5",
    "1",
    "4",
    "4",
    "5",
    "1",
    "2",
    "5",
    "4",
    "1"
    ]
    },
    {
    "name": "Jacob Deming",
    "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
    "score": [
    "4",
    "2",
    "5",
    "1",
    "3",
    "2",
    "2",
    "1",
    "3",
    "2"
    ]
    },
    {
    "name": "Jeremiah Scanlon",
    "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
    "score": [
    "5",
    "2",
    "2",
    "2",
    "4",
    "1",
    "3",
    "2",
    "5",
    "5"
    ]
    },
    {
    "name": "Louis T. Delia",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "score": [
    "3",
    "3",
    "4",
    "2",
    "2",
    "1",
    "3",
    "2",
    "2",
    "3"
    ]
    },
    {
    "name": "Lou Ritter",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
    "score": [
    "4",
    "3",
    "4",
    "1",
    "5",
    "2",
    "5",
    "3",
    "1",
    "4"
    ]
    },
    {
    "name": "Jordan Biason",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
    "score": [
        "1",
        "4",
        "4",
        "4",
        "4",
        "5",
        "4",
        "1",
        "3",
        "3"
    ]
    },
    {
    "name": "test",
    "photo": "test",
    "score": [
    "1",
    "4",
    "4",
    "4",
    "4",
    "5",
    "4",
    "1",
    "3",
    "3"
    ]
    }
    ]

var newFriend = friends.pop()
var totalDiff = 0;
var bestFriendScore = 99;
var bestFriend = []

friends.forEach(function(item){
    for (var i = 0; i < 2; i++){
        
        totalDiff = 0;
        totalDiff += parseInt(item.score[i]) - parseInt(newFriend.score[i])
        i++
    }
    
    if (bestFriendScore > totalDiff){
        bestFriend = [];
        bestFriend.push(item)
        bestFriendScore = totalDiff

    }

});

console.log(bestFriend)


