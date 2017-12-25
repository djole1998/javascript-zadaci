

var animal ={};

animal.username= 'DaffyDuck';

animal['tagline'] = 'Yipeee!';





var count = 0;
for(var key in animal) {
    count++;
    if (key === 'username'){
        console.log('Hi my name is ' + animal[key]);
    } else if (key === 'tagline'){
        console.log('I like to say ' + animal[key]);
    }
}
var noiseArray = [];

noiseArray.unshift('quack');

noiseArray.push('honk');

noiseArray[2] = ('sneeze');

animal.noises = noiseArray;

var animals = [];

animals.push(animal);

var quackers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] };

animals['1'] = quackers;

var dog = {
    username: 'dzeki',
    tagline: 'Zzz',
    noises: ['av','aa', 'bb']
};
var cat = {
    username: 'kitty',
    tagline: 'jjjj',
    noises: ['meow', 'grrr']
};

animals.push(dog,cat);



function AnimalTestUser (username) {
        if (arguments.length === 1) {
            return {username: username};
        } else {
            let otherArgs = [];
            for(var i = 1;i <arguments.length;i++) {
                otherArgs.push(arguments[i]);
            }
            return {username: username, otherArgs};
        }
}
var testSheep = AnimalTestUser('CottonBall', 'asdad', [23,123], {'asd': 'sada'});
console.log(testSheep);


function AnimalCreator(username, species, tagline, noises){
    var animal = {
        username: username,
        species: species,
        tagline: tagline,
        noises: [noises],
        friends: []
    };
    return animal;
}
var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);

function addFriend(animal, friend) {
    animal.friends.push(friend.username);
}

var cow = AnimalCreator('Moo', 'cow', 'got milk?', ['moo', 'mooooo']);
var llama = AnimalCreator('Zeny', 'llama', 'llll', ['sdf','asdg']);

addFriend(sheep, cow);
addFriend(sheep, llama);
console.log(sheep);

var myFarm = [sheep, cow, llama];
console.log(myFarm);
addFriend(cow,sheep);
addFriend(llama,cow);

function addMatchesArray (farm) {
    for(var animal in farm){
        farm[animal].matches = [];
    }
}

addMatchesArray(myFarm);
console.log(myFarm[0]);

function giveMatches (farm){
    for (var animal in farm) {
        farm[animal].matches.push(farm[animal].friends[0]);
    }
}

giveMatches(myFarm);
console.log(myFarm[0]);

var friends = [];

friends.push(animals[0].username, animals[1].username);

var relationships = {};

relationships.friends = friends;

var matches = [];
relationships.matches = matches;
relationships.matches.push('pig');
console.log(relationships);

for (var i=0; i<animals.length; i++){
    animals[i].relationships = relationships;
}
console.log(animals);

