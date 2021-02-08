function myFunction1() {
    var str = "This is blue text!";
    var result = str.fontcolor('blue');
    document.getElementById("blue_text").innerHTML = result; //this function is called to create a sentence where the font color is blue, with the string variable sating "This is blue text!"
}

function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence; //this is a concatenated sentence function that can be clicked on
}
