// Phase I: Callbacks
function titleize (namesArr, cb) {
    return namesArr.map (function(name) {
        return `Mx. ${name} Jingleheimer Schmidt`
    }).forEach(cb);
}

function printCallback(name) {
    console.log(name);
}

titleize(["Mary", "Brian", "Leo"], printCallback);

// Phase II: Constructors, Prototypes, and 'this'

function Elephant(name, height, tricksArr) {
    this.name = name;
    this.height = height;
    this.tricks = tricksArr;
}
dumbo = new Elephant ("Dumbo", 24, ["flapping my ears"]);
Elephant.prototype.trumpet = function () {console.log(`${this.name} the elephant goes 'phrRRRRR!!!!'`)};
dumbo.trumpet();
Elephant.prototype.grow = function () {this.height += 12};
console.log(dumbo.height);
dumbo.grow();
console.log(dumbo.height);
Elephant.prototype.addTrick = function (trick) { this.tricks.push(trick)};
console.log(dumbo.tricks);
dumbo.addTrick("flying in the air");
console.log(dumbo.tricks);
Elephant.prototype.play = function () { console.log(this.tricks[Math.floor(Math.random() * this.tricks.length)])};
dumbo.play();

// Phase III: Function Invocation
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {console.log(`${elephant.name} is trotting by!`)};

Elephant.paradeHelper(micah);

herd.forEach(Elephant.paradeHelper);

// Phase IV: Closures
function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);
    return function (bfastOrder) {
        order = `${order.slice(0, order.length - 8)} and ${bfastOrder} please.`;
        console.log(order);
    };
};
let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");