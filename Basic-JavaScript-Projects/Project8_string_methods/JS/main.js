function full_Sentence() {
    var part_1 = "I really ";
    var part_2 = "like to ";
    var part_3 = "play ";
    var part_4 = "video games.";
    var whole_sentence = part_1.concat(part_2,part_3,part_4); //this concatenates all 4 variables together
    document.getElementById("Concatenate").innerHTML = whole_sentence; //this makes the HTML call the function and display the variable concat
}

function slice_Method() { //initialize function
    var Sentence = "All work and no play makes Johnny a dull boy."; //creates variable sentence
    var Section = Sentence.slice(27,33); //creates variable section that uses variable sentence then slice()
    document.getElementById("Slice").innerHTML = Section; //creates id slice that the p element will call and output the variable section, the outcome of the function
}

function uppercase_Method() {
    var Sentence = "this is going to be uppercase";
    var Upper = Sentence.toUpperCase(); //this is the method to make the string uppercase
    document.getElementById("Caps").innerHTML = Upper;
}

function search_Method() {
    var str = "Hello, my name is Nick!";
    var search = str.search("Nick");
    document.getElementById("find").innerHTML = search;
}

function string_Method() {
    var X = 200;
    document.getElementById("numbers_to_string").innerHTML = X.toString(); //displays variable X as a string
}

function precision_Method() {
    var X = 12345.12349604938506;
    document.getElementById("precision").innerHTML = X.toPrecision(8); //this makes the the number 8 digits long
}

function fixed_Method() {
    var str = "This is the fixed method";
    var result = str.fixed(); // this causes the text to be in teletype text
    document.getElementById("fixed").innerHTML = result;
}

function value_Of() {
    var val = "Hello my friend";
    var of = val.valueOf(); // this takes variable val and assigns the valueOf method to it
    document.getElementById("value").innerHTML = of;
}