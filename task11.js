var N = parseInt(prompt("Please Enter Temperature in Celcius", 25));
document.write(N+"°C is ");
N = (N*9/5)+32;
document.write(N+"°F");
N = parseFloat(prompt("Please Enter Temperature in Fahrenheit", 70));
document.write("<br/>"+N+"°F is ");
N = (N-32)*5/9;
document.write(N+"°C");