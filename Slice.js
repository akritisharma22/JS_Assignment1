/*
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

mixUp('mix', 'pod'); // Outputs: 'pox mid'
mixUp('dog', 'dinner'); // Outputs:  'dig donner'
*/

"use strict";

function mixup(str1="None", str2="None") {
    if (str1.length>=2 && str2.length>=2){
        var res1=str1.slice(0,2);
        var rest1=str1.slice(2,str1.length);
        var res2=str2.slice(0,2);
        var rest2=str2.slice(2,str2.length);
        }
        var conc1=res1+rest2;
        var conc2=res2+rest1;
        console.log(conc1);
        console.log(conc2);
    }

mixup("dog","dinner");