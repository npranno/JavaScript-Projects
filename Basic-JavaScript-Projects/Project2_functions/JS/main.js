function myFunction1() {
    var str = "This is blue text!";
    var result = str.fontcolor('blue');
    document.getElementById("blue_text").innerHTML = result;
}

function myFunction2() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}