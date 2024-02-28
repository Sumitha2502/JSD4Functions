//b) Convert all the strings to title caps in a string array

//Anonymous fn
var caps=function(str){
str=str.toLowerCase().split(" ")

for (var index = 0; index < str.length; index++) {
    str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1)
}
return str.join(" ")
}
console.log(caps("Convert all the STRINGS to title caps in a string array"))

//IIFE 
(function(str){
    str=str.toLowerCase().split(" ");

    for (var index = 0; index < str.length; index++) 
        str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1) ;       
    console.log(str.join(" "))
    
})("uSing funcTion");

// //Arrow Fn
var strCaps=(str)=>{
    str=str.toLowerCase().split(" ")

    for(var i=0;i<str.length;i++){
        str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(" ")
}
console.log(strCaps("usIng arroW funcTION"))