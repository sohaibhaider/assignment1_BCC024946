var a = 2, b = 1;
document.write("a is "+a);
document.write("<br/>b is "+b);
var result = --a - --b + ++b + b--;
document.write("<br/><br/>Executing Expression to Calculate Result: --a - --b + ++b + b--")
document.write("<br/><br/>Now a is "+a);
document.write("<br/>Now b is "+b);
document.write("<br/>Result is "+result);
document.write("<br/><br/><h3>Explaination:</h3>");
document.write("<pre>Default Values:&Tab;&Tab;&Tab;&Tab;&Tab;&Tab; a = 2 and b = 1");
document.write("<br/><hr>--a = a - 1 = 2 - 1 = 1,&Tab;&Tab;&Tab;&Tab; a = 1 and b = 1, ('a' becomes 1 before execution as '--a' is prefix decrement)");
document.write("<br/><hr>--a - --b = 1 - (b - 1) = 1 - (1 - 1) = 1 - 0 = 1,&Tab; a = 1 and b = 0, ('b' becomes 0 before execution as '--b' is prefix decrement)");
document.write("<br/><hr>--a - --b + ++b = 1 + (b + 1) = 1 + (0 + 1) = 1 + 1 = 2, a = 1 and b = 1, ('b' becomes 1 before execution as '++b' is prefix increment)");
document.write("<br/><hr>--a - --b + ++b + b-- = 2 + b-- = 2 + 1 = 3,&Tab;&Tab; a = 1 and b = 0, ('b' becomes 0 after execution of expression as 'b--' is postfix decrement)");