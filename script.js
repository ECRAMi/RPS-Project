var redScore = 0;
var bluScore = 0;

function RPS(red) {
    
    let score = document.getElementById("score");
    
    let blu = Math.floor(Math.random() * 3);

    console.log("Red = " + red)
    console.log(blu)

    let bluTest = blu + 1
    let redTest = red + 1

    if(red == '0'){ // Rock
        document.getElementById("choices").innerHTML = "<img src=\"imgs/RPS_Rock_Red.png\">"
    }else if(red == '1'){ // Paper
        document.getElementById("choices").innerHTML = "<img src=\"imgs/RPS_Paper_Red.png\">"
    }else if(red == '2'){ // Scissors
        document.getElementById("choices").innerHTML = "<img src=\"imgs/RPS_Scissors_Red.png\">"
        redTest = 0;
    }
    if(blu == '0'){ // Rock
        document.getElementById("bluChoices").innerHTML = "<img src=\"imgs/RPS_Rock_Blu.png\">"
    }else if(blu == '1'){ // Paper
        document.getElementById("bluChoices").innerHTML = "<img src=\"imgs/RPS_Paper_Blu.png\">"
    }else if(blu == '2'){ // Scissors
        document.getElementById("bluChoices").innerHTML = "<img src=\"imgs/RPS_Scissors_Blu.png\">"
        bluTest = 0;
    }



    if(red == blu){ // Tie
        document.getElementById("results").innerHTML = "<h2>Its a Tie!</h2>";
    }else if(redTest == blu){ // Blu Beats Red
        bluScore += 1;
        document.getElementById("results").innerHTML = "<h2>Blu Wins!</h2>";
    }else if(bluTest == red){ // Red Beats Blu
        redScore += 1;
        document.getElementById("results").innerHTML = "<h2>Red Wins!</h2>";
    }

    score.innerHTML = "<p>" + redScore + " - " + bluScore + "</p>";
    setTimeout(function(){ 
        document.getElementById("choices").innerHTML = "<button id = \"Rock\" onClick = \"RPS(0)\"><img src=\"imgs/RPS_Rock_Red.png\"></button><br><button id = \"Paper\" onClick = \"RPS(1)\"><img src=\"imgs/RPS_Paper_Red.png\"></button><br><button id = \"Scissors\" onClick = \"RPS(2)\"><img src=\"imgs/RPS_Scissors_Red.png\"></button>"
        document.getElementById("bluChoices").innerHTML = "<img src=\"imgs/RPS_Rock_Blu.png\"><img src=\"imgs/RPS_Paper_Blu.png\"><img src=\"imgs/RPS_Scissors_Blu.png\">"
        document.getElementById("results").innerHTML = "<h2>No results yet</h2>"
    }, 3000);
}