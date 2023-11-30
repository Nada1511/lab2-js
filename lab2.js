while(true){
    
    let userInput = prompt("Enter your age (or click Cancel to exit):");

    if (userInput === null || userInput==="") {
        break;
    }


    let age = parseFloat(userInput);
    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid positive number for age.");
        continue;
    }

    
    let userStatus;
    switch (true) {
        case age >= 1 && age <= 10:
            userStatus = "Child";
            break;
        case age >= 11 && age <= 18:
            userStatus = "Teenager";
            break;
        case age >= 19 && age <= 50:
            userStatus = "Grown up";
            break;
        default:
            userStatus = "Old";
    }

   
    alert("Your age:"  +age+"ur status: "+userStatus);}




///////////////// task2//////////////////////////////////////////////////////////

var x=prompt("enter string ");
var vowels=['a','e','i','o','u'];
let i =0;
for (var char of x.toLocaleLowerCase())
{
    if (vowels.includes(char))
    i++;
}
alert("number of vowels:  "+i);


//////////////////task3/////////////////////


function convertTo12HourFormat(hour) {
    
    if (hour === 0) {
        return("12AM");
    } else if (hour >= 1 && hour <= 11) {
       return hour+'am'
    } else if (hour === 12) {
     return("12PM");
    } else if (hour >= 13 && hour <= 23) {
        return (hour-12)+'pm';
    } else {
        return "Invalid input";
    }
}

console.log(convertTo12HourFormat(0));
console.log(convertTo12HourFormat(12));
console.log(convertTo12HourFormat(13));
