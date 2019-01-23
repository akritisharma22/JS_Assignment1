"use strict";

 var percentage;

function show_division(percetage) {
    if (percentage <= 100 && percentage >= 80){
        console.log("Distinction");
    }

    elseif (percentage < 80 && percentage >=60 ){
        console.log("First division");
    }
    
    elseif (percentage < 60 && percentage >=40 ){
        console.log("second division");
    }

    elseif(percentage <40 && percentage >= 32) {
        console.log("Third Division");
    }

    else{
        console.log("fail");
    }
}
 show_division(62);