"use strict";

var radius=5;

function cir(radius){
    var circum= 2 * Math.PI * radius;
    console.log ("The circumference is :" +circum);
}

function area(radius){
    var area_of_circle= Math.PI * radius **2;
    console.log ("The circumference is :" +area_of_circle);
}

cir(radius);
area(radius);