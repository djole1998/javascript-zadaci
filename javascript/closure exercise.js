var blab = function () {
    alert(string);
};

var nonsense = function (string) {
    var blab = function () {
        alert(string);
    };
    blab();
};

nonsense('blah blah blah');



var nonsense = function (string) {
    var blab = function () {
        alert(string);
    };
    setTimeout(blab, 2000);
};

nonsense('blah blah blah');


var nonsense = function (string) {
    var blab = function () {
        alert(string);
    };
    return blab;
};

var blabLater = nonsense('blah blah blah');
blabLater();
var blabAgainLater = nonsense('hehehe!');
blabAgainLater();



var lastNameTrier = function (firstName) {

    var innerFunction = function () {

    };
};

var firstNameFarmer = lastNameTrier('Farmer');
firstNameFarmer('Brown');


var lastNameTrier = function(firstName){
    var inner = function (lastName) {
        console.log(firstName + " " + lastName);
    };
    return inner;
};

var firstNameKatrina = lastNameTrier('Katrina');
firstNameKatrina('Uychaco');
firstNameKatrina('Smith');



var farmLoveStory = storyWriter();
farmLoveStory.addWords('There was oce a lonely cow.');
farmLoveStory.addWords('i ate some ice cream.');


var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');
storyOfMyLife.addWords('I ate some ice cream.');
storyOfMyLife.erase();

var storyWriter = function () {
    var story = '';
    return {
        addWords: function (str) {
            story += str + ' ';
            return story.trim();
        },
        erase: function () {
            story = '';

        }
    };
};

