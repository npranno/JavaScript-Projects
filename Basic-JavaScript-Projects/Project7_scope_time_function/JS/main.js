var X = 10; //global variable
function Multiply_numbers_1() { //this is able to use variable X
    document.write(5 * X + "<br>");
}
function Add_numbers_1() { // this is also able to use varaible X
    document.write(5 + X + "<br>");
}
Multiply_numbers_1();
Add_numbers_1();

function Multiply_numbers_2() {
    var A = 5; // local variable because it is within the function
    document.write(5 * A + "<br>");
}
function Add_numbers_2() {
    document.write(5 + A + "<br>"); // this wont display because variable A is local to only Multiply_numbers_2
}
Multiply_numbers_2();
Add_numbers_2();

function Multiply_numbers_3() {
    var B = 4; // local variable
    console.log(5 * B + "<br>");
}
function Add_numbers_3() {
    console.log(4 + B + "<br>"); // this will display in console as "B is not defined"
}
Add_numbers_3();
Multiply_numbers_3();

function get_Date() {
    if (new Date().getHours() <20) { //this is saying if the time is before 8 pm, then display "How are you today?"
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Year() {
    if (new Date().getYear() >19) { //if the year is greater than 2020, then print "Hello!"
        document.getElementById("Greeting2").innerHTML = "Hello!";
    }
}

function Age_Function1() {
    Age = document.getElementById("Age").value; //this sets the variable age and id to Age and the value that is entered by the user
    if (Age >= 25) {
        Rent = "You are old enough rent a car!"; //this says IF the value entered for age is over 18, then display "old enough"
    }
    else {
        Rent = "You are not old enough to rent a car!"; //this says if the age is less than 18 (ELSE) then to print "not old enough"
    }
    document.getElementById("How_old_are_you?").innerHTML = Rent;
}

function timeFunction() { //defines time function
    var Time = new Date().getHours(); //defines variable time and grabs date method 
    var Reply; //defines variable reply which is the answer it will give, depending on the if, if else, and else statements
    if (Time < 12 == Time > 0) { //if time is before noon and also after midnight
        Reply = "it is morning time!"; //answer this
    }
    else if (Time >= 12 == Time < 18) { //if time is after noon but before 6pm
        Reply = "it is afternoon!"; // answer this
    }
    else {
        Reply = "it is evening time!"; //otherwise it is after 6pm and before midnight, so it will answer this.
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}