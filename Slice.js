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