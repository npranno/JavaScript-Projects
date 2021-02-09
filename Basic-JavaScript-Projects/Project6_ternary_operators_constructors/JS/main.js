function Ride_Function() {
    var Height, Can_ride; //variables
    Height = document.getElementById("Height").value; //defining variable height, an id for HTML and a value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough"; //this connects Height with can ride by using the ternary operator, saying if height is less than 52, it displays "you are too short" where if its greater it displays "you are tall enough"
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //defines the id Ride for HTML to call, then takes the can ride ternary value (either tall enough or too short) and adds the string "to ride" after it
}

function voteFunction() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //declares initial function, this is the constructor
    this.Vehicle_Make = Make; //"this" means that the following object is the owner of the code (vehicle make owns "make")
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // creates new variable Jack, and a new instance of the Vehicle function (satisfies all this. parts)
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction1() { //new function that then calls the previous function Vehicle
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Make + //takes all information from Erik and the constructor
    Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Computer(Make, Style, Year, Color) {
    this.Computer_Make = Make;
    this.Computer_Style = Style;
    this.Computer_Year = Year;
    this.Computer_Color = Color;
}
var Nick = new Computer(" Dell ", " Laptop ", 2020, " Black");
var Albert = new Computer("Apple", "Laptop", 2017, "Silver");
var Gunnar = new Computer("Lenovo", "Tower", 2018, "Black");
function myFunction2() {
    document.getElementById('New_and_This').innerHTML = "Nick has a " + 
    Nick.Computer_Year + Nick.Computer_Make + Nick.Computer_Style + "that is" + Nick.Computer_Color;
}

function countingFunction() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() { //this is a nested function
        var Starting_point = 9; //creates the starting point
        function Plus_one() {Starting_point += 1;} //another nested function within the first one that makes the startint point variable add one
        Plus_one();
        return Starting_point;
    }
}