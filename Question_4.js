"use strict";

var number;

function calculation(number){
    var half = number/2;
    console.log(half);

    var sq= half**2;
    console.log(sq);

    console.log("The area of cirlce is : " + (Math.PI*sq**2));
}

calculation(4);