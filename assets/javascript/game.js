var firstCrystal
var secondCrystal
var thirdCrystal
var fourthCrystal
var crystalCount
var targetNumber
var totalNumber
var wins = 0;
$(".winsheader").text("Wins: " + wins);

var losses = 0;
$(".lossesheader").text("Losses: " +losses);

function startAndReset() {
firstCrystal = (Math.floor(Math.random() * 3) + 3);
secondCrystal = (Math.floor(Math.random() * 5) + 5);
thirdCrystal = (Math.floor(Math.random() * 5) + 10);
fourthCrystal = (Math.floor(Math.random() * 10) + 10);
crystalCount = 0;


targetNumber = (Math.floor(Math.random() * 100) + 80);
console.log(targetNumber);
  $(".number-generator").text( "Spending Allowance: " + "$ " + targetNumber);

totalNumber = 0;
  $(".total-number-header").text("Spending: " + "$ " + totalNumber);
}
 startAndReset()

  $("#first-crystals").on("click", function() {
    crystalCount += firstCrystal;
    $(".total-number-header").html("Spending: " + "$ " +crystalCount);
    checkScores();
});

$("#second-crystals").on("click", function() {
    crystalCount += secondCrystal;
    $(".total-number-header").html("Spending: " + "$ " +crystalCount);
    checkScores();
});


$("#third-crystals").on("click", function() {
    crystalCount += thirdCrystal;
    $(".total-number-header").html("Spending: " + "$ " +crystalCount);
    checkScores();
});


$("#fourth-crystals").on("click", function() {
    crystalCount += fourthCrystal;
    $(".total-number-header").html("Spending: " + "$ " +crystalCount);
    checkScores();
});


function checkScores() {
    if (crystalCount === targetNumber) {
        wins++;
        $(".winsheader").text("Wins: " + wins);
        $(".modal-text").text("Wins: " + wins);
        //modal.style.display = "block";
        startAndReset();

    } else if (crystalCount > targetNumber) {
        losses++;
        $(".lossesheader").text("Losses: " +losses);
        $(".modal-text").text("Losses: " +losses);
        //modal.style.display = "block";
        startAndReset();
    }
}


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var close = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
