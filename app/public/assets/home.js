var questions = [
    question = [
        option = {
            name: "Avengers",
            img: "./assets/images/avengers.JPG"
            },
        option = {
            name: "Avengers: Age of Ultron",
            img: "./assets/images/avengers2.JPG"
        },
        option = {
            name: "Avengers: Infinity War",
            img: "./assets/images/avengers3.JPG"
        },
        option = {
            name: "Avengers: Endgame",
            img: "./assets/images/avengers4.JPG"
        },
    ],
    question = [
        option = {
            name: "Die Hard",
            img: "./assets/images/diehard1.JPG"
            },
        option = {
            name: "Die Hard 2: Die Harder",
            img: "./assets/images/diehard2.JPG"
        },
        option = {
            name: "Die Hard: With a Vengeance",
            img: "./assets/images/diehard3.JPG"
        },
        option = {
            name: "Die Hard 4.0",
            img: "./assets/images/diehard4.JPG"
        }
    ],
    question = [
        option = {
            name: "Terminator",
            img: "./assets/images/terminator1.JPG"
            },
        option = {
            name: "Terminator 2: Judgement Day",
            img: "./assets/images/terminator2.JPG"
        },
        option = {
            name: "Terminator 3: Rise of the Machines",
            img: "./assets/images/terminator3.JPG"
        },
        option = {
            name: "Terminator Salvation",
            img: "./assets/images/terminator4.JPG"
        }
    ]
]

var div;
var card;
var img;


questions.forEach(function(item){
    div = $("<div class='card-deck'></div>");
    
    item.forEach(function(innerItem){
        var score = item.indexOf(innerItem) + 1;
        card = $("<div class='card'></div>")
        img = $("<p>" + innerItem.name + "</p>")
        $(img).attr("score", score)
        $(card).append(img);
        $(div).append(card);
    })
    
    
    $(".movieQuestions").append(div)
    
})









