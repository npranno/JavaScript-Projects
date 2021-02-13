function call_loop() {
    var digit = "";
    var X = 1; //starts at 1
    while (X < 11) { //while x is less than 11
        digit += "<br>" + X; 
        X++; //display previous value of X and add one until it reaches 10
    }
    document.getElementById("loop").innerHTML = digit;
}

function string_length() {
    var str = "My name is Nick!";
    var n = str.length; //this calls the variable to find the string length
    document.getElementById("string").innerHTML = n;
}

var instruments = ["Guitar","Drums","Piano","Bass","Violin","Trumpet","Flute"]; //defines all instruments
var content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < instruments.length; Y++) { //when y is equal to 0 position in the array and as long as y is less than the length of the variable instruments, then display the next point in the array. continue to repeat process until done
        content += instruments[Y] + "<br>"; //continue to display all items in array and place a line break between each one
    }
    document.getElementById("list_of_instruments").innerHTML = content; //calls function in HTML displaying variable "content"
}

function array_Function() {
    var cat_picture = []; //defining array
    cat_picture[0] = "sleeping"; //elements of array
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + cat_picture[1] + "."; //display value of point 1 in the array
}

function constant_function() {
    const board = {type:"snowboard",brand:"burton ", color:"white"}; //defining constant of board, and then its attributes
    board.color = "blue ";
    board.brand = "burton ";
    board.cost = "$450"
    document.getElementById("Constant").innerHTML = "The cost of the " + board.color + board.brand + board.type + " is " + board.cost; //creates a string using the constant's attributes
}

var X = "Blue";
document.write(X);
{
    let X = "Red"; //allows variable X to have a value of "red" within these curly brackets
    document.write("<br>" + X);
}
document.write("<br>" + X); //outside of the brackets, X then again displays "blue"

//function myFunction() {
//    return Math.PI; //this is written correctly, but "Math" isnt green like it's supposed to be
//  }
 //   document.getElementById("demo").innerHTML = myFunction(); //says it cannot be set to null

let car = { //car has multiple attributes
    make: "Ford ",
    model: "Mustang ",
    year: "2021 ",
    color: "green ",
    description: function() { //describes car attributes and uses "this" to find them
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //calls car.description in HTML

var text = ""; 
var i; //defines variable i
for (i = 0; i < 10; i++) { //when i is equal to 0 and less than 10, increase the previous value by 1
  if (i === 3) { break; } //if i is equal to 3, stop output
  text += "The number is " + i + "<br>";
}
document.getElementById("break_test").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; } //continue to count
  text += "The number is " + i + "<br>";
}
document.getElementById("continue_test").innerHTML = text;