var number;
document.write("Value after variable declaration is: "+typeof(number));
number = 5;
document.write("<br/>Initial value: "+number);
number++;//OR ++number;
document.write("<br/>Value after increment is: "+number);
number+=++number;//Adds 7 to number
document.write("<br/>Value after addition is: "+number);
number--;//OR --number;
document.write("<br/>Value after decrement is: "+number);
number%=3;//Equals to number%3
document.write("<br/>The remainder is : "+number);