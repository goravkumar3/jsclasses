var num=prompt("Enter any number")
var sign=prompt("Enter arthematic operator +,-,*,/");
var num1=prompt("Enter any number");
if(sign==="+"){
    alert(num+sign+num1+"="+(+num+ +num1))
}
else{
    alert("you enter wrong sign")
}