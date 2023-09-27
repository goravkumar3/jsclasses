do {
    var a = prompt("Enter first number");
var s = prompt("Enter operator +,-,*,/");
var b = prompt("Enter second number");
    switch (s) {
        case "+":
          alert(a + s + b + "=" + (+a + +b));
          break;
        case "-":
          alert(a + s + b + "=" + (a - b));
          break;
        case "*":
          alert(a + s + b + "=" + a * b);
          break;
        case "/":
          alert(a + s + b + "=" + a / b);
          break;
        default:
          alert("You entered wrong operator")
      }
      var ask=prompt("Do you want do again?")
      ask=ask.toLowerCase()
} while (ask==="yes");
