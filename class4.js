for(var i=0;i<20;i++){
    console.log(i+": Sarfraz")
    document.write(i+": Sarfraz<br/>")
}
document.write("decrement loop <br/>")
for(var i=20;i>0;i--){
    console.log(i+": Sarfraz")
    document.write(i+": Sarfraz<br/>")
}
document.write("while loop start<br/>")
var n=0;
while(n<9){
document.write("Gorav<br/>")
n++;
}
var a=0;
do{
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
var check=prompt("Do you want to fill form again?")
a++;
}while(check=='yes')