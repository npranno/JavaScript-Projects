function myDictionary() {
    var Animal = { //Below defines a dictionary for a certain animal
        Species: "Whale",
        Color:"Black and White",
        Breed: "Orca",
        Diet: "Fish",
        Sound: "Awoo"
    };
    delete Animal.Diet; //this will delete the entry of "Diet" from the dictionary
    document.getElementById("Dictionary").innerHTML = Animal.Diet; //The HTML will call this function but it will show up as undefined because "diet" was deleted
}