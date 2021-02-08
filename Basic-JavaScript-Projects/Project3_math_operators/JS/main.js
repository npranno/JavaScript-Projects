function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + addition; //this uses the variable 'addition' and assigns the id as 'Math1', then when called by the HTML it displays "2 + 2 =" and then displays the value of the addition variable.
}

function subtractionFunction() {
    var subtraction = 5 - 3;
    document.getElementById("Math2").innerHTML = "5 - 3 = " + subtraction; //this uses the variable 'subtraction' and assigns the id as 'Math2', then when called by the HTML it displays "5 - 3 =" and then displays the value of the subtraction variable.
}

function multiplicationFunction() {
    var multiply = 5 * 3;
    document.getElementById("Math3").innerHTML = "5 * 3 = " + multiply;
}

function divisionFunction() {
    var divide = 20/5;
    document.getElementById("Math4").innerHTML = "20 / 5 = " + divide;
}

function multipleOperations() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById('Math5').innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracated by 5 equals " + simple_Math;
}

function modulusOperator() {
    var modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remainder of " + modulus;
}

function negotiationOperator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = "The opposite of 10 is " + -x; 
}

var X = 10;
X++;
document.write(X); //This is an increment function, which displays the number that is creating by adding variable X + 1, which is 11

var Y = 15;
Y--;
document.write(Y); //This is the decrement function, whcich does the opposite of the increment function

window.alert(Math.random() * 100); //this shows an alert when the page is opened that will display a random number between 1 and 100

document.write(Math.random() * 50); //this displays a random number between 1 and 50 within the page itself
