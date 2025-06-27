//console.log('this is checkgrade(score)')
let score = 49;
if (score >= 70){
    console.log(' Grade A')
} else if( score >= 60 && score <=69){
    console.log(" Grade B")
} else if ( score >= 50 && score <= 59){
    console.log("Grade C")
} else if (score < 50){
    console.log( "Grade F")
} else {
    console.log( "No mark")
};
// login succesful

let username ="admin"
let password="1234"
if (password ="1234" && username =="admin"){
    console.log( "login successful")
} else{
    console.log( "access denied")
};

//canVote
let age =18
if ( age >= 18){
    console.log("can Vote")
 } else {
    console.log( "Can not vote")
};

// convert to fahrenheit(celsius)
 function formula( num1 ,num2, num3, num4){
    return (num1 * num2/num3) + num4
}
let F= formula( "C",9 ,5 ,32);
console.log(  F);// input value in "C" for the formula to work.

//temperaturestatus(temp)
let temp = 25
 if( temp <= 0){
    console.log("Freezing")
} else if( temp >= 0 && temp <= 15){
    console.log("Cold")
} else if( temp >= 16 && temp < 25) {
    console.log(" cool")
} else if (temp >= 25){
    console.log( "Warm")
};