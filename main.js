//task 1 

var num1;
var num2; 

num1=Number(prompt("Insert number 1"));
num2=Number(prompt("Insert number 2"));

if (num1+num2 >= 13) {
    console.log("Bar-Mitzvah");
}
else if (num1+num2 == 12){
    console.log("Bat-Mitzvah");
}
else {
    console.log("Kid");
}


//task 2 

var yesCounter = 0;

while(yesCounter <100){
    console.log("Yes");
    yesCounter++
}


//task 3 

var noNumber
var noCounter = 0; 

noNumber = Number(prompt("Insert Number"));

while (noCounter < noNumber){
    console.log("No");
    noCounter++
}


//task 4 

var whatIsJava = "javascript is not JAVA";

for(var i = 0; i<1000; i++){
    console.log(whatIsJava)
}


//task 5 


var name;
var number;

name=prompt("Insert Name");
number=Number(prompt("Insert Number"));

for(var i = 0; i<number; i++){
    console.log(name)
}



//task 6 

var fullName;
var userEmail;
var userAge;

fullName=prompt("Insert Full Name");
userEmail=prompt("Please Insert Email");
userAge=Number(prompt("Insert Age"));

randomNumber=Number(prompt("Choose A Number"));

if(userAge>18){
    for(var i = 0; i<randomNumber; i++){
        console.log(`${fullName}  ${userEmail}  ${userAge}`)
    }
}


//task 7 


var ranNumber;
var myName = "Jacob"

ranNumber=Number(prompt("Insert Number"));

for(var i = 0; i < ranNumber; i++){
    nameInsert=prompt("Insert Name");
    if(nameInsert==myName){
        console.log("Hi boss, Jacob")
    }
    else {
        console.log("No entry.")
    }
}


//task 8 

var ranNumber1;
var ranNumber2; 

ranNumber1=Number(prompt("Insert Number 1"));
ranNumber2=Number(prompt("Insert Number 2"));

for(var i = 0; i < ranNumber1; i++){
    for(var j = 0; j < ranNumber2; j++){
        console.log(i*j)
    }
}


//task 9 


var myArray = [5,6,2,4,6];

console.log(myArray);


//task 10 

var myArray2 = ["Jacob", "Dani", "Shlomi", "Rami", "Avi"];

for(var i = 0; i<myArray2.length; i++){
    console.log(myArray2[i]);
}


//task 11 

var crazyNumbers = [15,92,75,82,75,81,54,37];

for(var i = 0; i < crazyNumbers.length; i++){
    if(crazyNumbers[i]%2==0){
        console.log(crazyNumbers[i]);
    }
}


//task 12 


var nameArray = [];

for(var i = 0; i < 5; i++){
    nameArray[i]=prompt("Insert Name");
}
console.log(nameArray);


//task 13 


var numberArray = [];
var numberCounter = 0;


while(numberCounter < 7){
    numberArray[numberCounter]=Number(prompt("Insert Number"));
    if(numberArray[numberCounter]%2!=0){
        console.log(numberArray[numberCounter])
        numberCounter++
    }
}


//task 14 

var ranArray = [13, "Jiu Jitsu", 14, "Mortal Kombar", 15, "Bruce Lee"];

for(var i = 0; i < ranArray.length; i++){
    if(ranArray[i]/1!=ranArray[i]){
        ranArray[i]="not_number";
    }
}
console.log(ranArray);


//task 15 


var numbersArray = [];
var numbersCounter = 0;

while (numbersCounter < 10){
    numbersArray[numbersCounter]=Number(prompt("enter a number"));
    if(numbersArray[numbersCounter]%2==0){
        
        numbersCounter++
    }
}
console.log(numbersArray);


//task 16 

var width;
var height;

width=Number(prompt("Insert rectangle width in cm"));
height=Number(prompt("Insert rectangle height")); 

console.log(`rectangle result is ${width*height}`);


//task 17


var number1;
var number2;
var number3;

number1=Number(prompt("Insert number 1"));
number2=Number(prompt("Insert number 2"));
number3=Number(prompt("Insert number 3"));

if(number1<number2 && number2<number3){
    console.log("up");
}
else if (number1>number2 && number2>number3){
    console.log("down");
}
else{
    console.log("no order");
}


//task 18 ????????


//task 19 


var counterCounter = 0;

while(counterCounter < 5){
    for(var i = 0; i < 100; i++){
        console.log("yes") 
    }
    counterCounter++
}


