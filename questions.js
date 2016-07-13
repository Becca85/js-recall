var selectElementsStartingWithA = function(array) {
    var tab =[];
    for (i=0; i<array.length; i++){
        var lettre = array[i].charAt(0);

        if (lettre.match(/a/)){
            tab.push(array[i]);
        }
    }return tab;
}

var selectElementsStartingWithVowel = function(array) {
    var tab =[];
    for (i=0; i<array.length; i++){
        var lettre = array[i].charAt(0);

        if (lettre.match(/[aeiouy]/)){
            tab.push(array[i]);
        }
    }return tab;
}

var removeNullElements = function(array) {
    var tab = []
    for (i=0; i<array.length; i++){
        var motASupprimer = null;

        if (motASupprimer != (array[i])){
            tab.push(array[i]);
        }
    }return tab;
}


var removeNullAndFalseElements = function(array) {
    var tab = [];
    for (i=0; i<array.length; i++){
        var motASupprimer = null;
        var motASupprimerbis = false;
        var zero = 0;

        if (motASupprimer != (array[i]) && motASupprimerbis != (array[i]) || zero === (array[i]) ){
            tab.push(array[i]);
        }
    }return tab;
}

var reverseWordsInArray = function(array) {
       var tab = [];
    for (i=0; i<array.length; i++){
            MotInverser = array[i].split('').reverse().join('');
            tab.push(MotInverser);
        }
    return tab;
}

var everyPossiblePair = function(array) {
       var tab = [];
    for (i=0; i<array.length; i++){
            if (i != i++);
            tab.push(array[i]);
        }
    return tab;
}

var allElementsExceptFirstThree = function(array) {
    return 'Write your method here';
}

var addElementToBeginning = function(array, element) {
    return 'Write your method here';
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
