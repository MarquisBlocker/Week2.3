console.log('hello world'); 
const my_fave_number = 7; // this variable cannot be changed

console.log(my_fave_number); // prints 7

let amountRaisedSoFar = 1000;

let donation = prompt("How much would you like to donate?"); 

amountRaisedSoFar = Number(donation) + amountRaisedSoFar;

console.log("We have now raised: " + amountRaisedSoFar + "!");

let greeting = "Hello,";
let myName= prompt("Whats your name");
let myAge = prompt('how old are you? ')
let end = prompt('Its great to meet you ')

//Simple if statement
let x = true;
if(x) {
	console.log(true);
} else if (x == true) {
	console.log("this won't run");
} else  {
	console.log(false);
}

let raining = true 

if (!raining) {
    console.log("i'll go to the park")
}
else {
    console.log(!"No Thanks")
}

let temp = 60;
if (temp> 45) {
    console.log("I'm going hiking");
} else if (temp < 45 && temp > 20) {
    console.log("I'm going shopping");
} else {
    console.log("I think I'll stay home today")
}

let color = "magenta";

if( color == "red"){
    console.log('color is red')
} else if (color == "orange"){
    console.log('color is orange')
} else if (color == "yellow"){
    console.log('color is yellow')
}
else if (color == "green"){
    console.log('color is green')
}
else if (color == "blue"){
    console.log('color is blue')
} else {
    console.log("color isn't in the rainbow");
}

for (let i = 0; i<=9; i++){
    console.log("currently at item: " + i);
    console.log('current item +2: ${i + 2}');
}

// how to loop through a set of numbers 0-20;
// how to add 2 to each item ONLY IF that item is an even number
for (let i = 0; i <= 20; i++) {
    console.log("current item: "+ i);

    // is it even?
    // if a number is divisible by 2 == even
    // i = current item in our loop
    // divide i by 2 and give us any remainder 
    // is the result of that division

  if (i % 2 == 0) {
    console.log(i + 2);
  } else {
    console.log("odd");
  }
}
