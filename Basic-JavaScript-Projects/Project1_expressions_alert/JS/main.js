var myFamily = "The Prannos: ", Dad = "Al, ", Brother = "Albert, ", Me = "Nick. "; //assigning multiple variables

var myFamily = myFamily.fontcolor('blue'); //this assigns font color for the mFamily variable

var Dad = Dad.fontcolor('red');

var Brother = Brother.fontcolor('green');

var Me = Me.fontcolor('purple');


document.write(myFamily + Dad + Brother + Me); //this displays all of my variables, concatenated

document.write('This is calculated by using an expression: ', 3 + 3); //this displays an expression 3+3

function My_First_Function() {
    var str = "This is green text!";
    var result = str.fontcolor('green');
    document.getElementById("Green_Text").innerHTML = result;
} //this is a function that creates a button that displays the words 'this is green text' in green after clicking a button when it is created and called by the HTML




window.alert('This is a test for basic JavaScript.') //this gives an alert message when the HTML page is opened


