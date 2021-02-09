document.write(typeof "Word"); //asks for what type of variable it is, which is a string

document.write(typeof 3); //same as above, which is a number

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0; // NaN
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("Hello world"); //asking if "hello world" is not a number, and the answer is true
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN(3); // this will come out as false, since it is a number
}

function my_Function4() {
    document.getElementById("Test4").innerHTML = 2E310;
}

function my_Function5() {
    document.getElementById("Test5").innerHTML = -3E310;
}

function my_Function6() {
    document.getElementById("Test6").innerHTML = 10<2;
}

console.log(4*5); //this shows up as 20 in the console in your browser

console.log(5+5);

document.write("10" + 5); //combines a string and a number, coercion

console.log(5>10);

document.write(10==10); //this is asking if 10 is equal to 10, which it is, so it will display as true.

document.write(10==5); //this will be false

X = 10;
Y = 10;
document.write(X===Y); //this is asking if two variables are equal to each other, the values in each are in fact equal, so it will display as true

A = 10;
B = "Ten";
document.write(A===B); //this will be output as false because theyre two different types of variables, a string and a number

C = 10;
D = "10";
document.write(C===D);

E = "John";
F = "Jane";
document.write(E===F);

document.write(10>5 && 5>2); //this is asking if both 10 is greater than five AND (&&) 5 is greater than two. it will display as true

document.write(10>5 && 5>7); //this is false, because not both are true

document.write(10>5 || 10>15); //this is asking if 10 is greater than five OR(||) if 10 is greater than 15. 10 is greater than five, so it will display as true.

document.write(10<5 || 10>20); //this will display as false

function not_Function1() {
    document.getElementById("Not").innerHTML = !(20>10); //this is saying that 20 is NOT(!) greater than 10. It is, so it will display as false
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(20<10);
}