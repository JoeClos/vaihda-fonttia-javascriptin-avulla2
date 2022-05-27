var clickCount = 0;
var totalClickCount;
var showClicks = document.getElementById("showClicks");

function changeFont(){
    var list = document.getElementById("list");
    
   
    var showClicks = document.getElementById("showClicks");

    clickCount++;
    totalClickCount++;
    showClicks.innerHTML = "Fontti on nyt: Courier New";

    if (clickCount === 1){
        list.style.fontFamily = "Roboto";
        showClicks.innerHTML = "Fontti on nyt: Roboto";
    }
    if (clickCount === 2){
        list.style.fontFamily = "Mansalva";
        showClicks.innerHTML = "Fontti on nyt: Mansalva";
    }
    if (clickCount === 3){
        list.style.fontFamily = "Grenze";
        showClicks.innerHTML = "Fontti on nyt: Grenze";
    }
    if (clickCount === 4){
        list.style.fontFamily = "Turret Road";
        showClicks.innerHTML = "Fontti on nyt: Turret Road";
    }
    if (clickCount === 5){
        list.style.fontFamily = "Courier New";
        clickCount = 0;
    }

  
}

