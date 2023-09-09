// var num=prompt("Enter any number")
// var sign=prompt("Enter arthematic operator +,-,*,/");
// var num1=prompt("Enter any number");
// if(sign==="+"){
//     alert(num+sign+num1+"="+(+num+ +num1))
// }
// else if(sign==="-"){
//     alert(num+sign+num1+"="+(num-num1))
// }
// else if(sign==="*"){
//     alert(num+sign+num1+"="+(num*num1))
// }
// else if(sign==="/"){
//     alert(num+sign+num1+"="+(num/num1))
// }
// else{
//     alert("you enter wrong sign")
// }
var city=prompt("Enter your city name")
city=city.toLowerCase()
if(city==="hyderabad"||city==="karachi"){
    var age=prompt("Enter your age")
    if(age>18&&age<40){
        alert("You can apply for job")
    }
    else{
        alert("you can't apply for job")
    }
}
else{
    alert("you can't apply for job")
}