/*Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

"use strict";

var celsius;
var fahrenheit;

function tofahrenheit(celsius){
    var temp_in_fahrenheit=(celsius * (9/5)) + 32;
    console.log(celsius+ "°C is " + temp_in_fahrenheit +"°F");
}

function toCelsius(fahrenheit){
    var temp_in_celsius= (fahrenheit -32) * (5/9) ;
    console.log(fahrenheit+"°F is "+ temp_in_celsius + "°C");
}

tofahrenheit(0);
toCelsius(32);