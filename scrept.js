// -------first task ------
function tellFortune(X, Y, Z, N){
    return ("You will be a "+ X +" in " +Y +" , and married to " + Z+ " with " +N+ "  kids.")
}
console.log( tellFortune ("Pharmaceutical industry specialist", "Jordan", "Alice", "3"))






// -------second task ------

function calculateDogAge(Age){
    if(Age<0){
        window.alert("age can't be odd")
    }
    else{
    return("Your doggie is "+ Age*7 +" years old in dog years!")
    }
}
console.log(calculateDogAge(-5))






// -------third task ------
function calculateSupply (age,number){
    let cups=(100-age)*number*365
    return("You will need " +cups+" to last you until the ripe old age of 100")
}
console.log(calculateSupply(30,3))





function cube(number){
    return(number**3)
}
console.log(cube(3))





// -------fourth task ------

function multiply (first,second){
    return first*second
}
console.log("multiply= "+multiply(3,4))





// -------fifth task ------

function fullName(firstName,lastName){
   console.log( firstName+" "+ lastName)
}
fullName("Bara","Abusaleem")





// -------sixth task ------

function average(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
console.log(average(5,7,9,3,5))





// -------seventh task ------

function randomNumber(){
    console.log( Math.random())
}
randomNumber()









// ----------next day's task--------
function cubemultiple(x,y){
    console.log(x*x*x)
    console.log(y*y*y)
    console.log(x*y)
}
cubemultiple(3,7)




function test(b){
    if (b%2 == 1){
        return true;
    }
    else{
        return false;
    }
}
console.log(test(5))




let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day)
    break;
  case 1:
    day = "Monday";
    console.log(day)

    break;
  case 2:
    day = "Tuesday";
    console.log(day)

    break;
  case 3:
    day = "Wednesday";
    console.log(day)

    break;
  case 4:
    day = "Thursday";
    console.log(day)

    break;
  case 5:
    day = "Friday";
    console.log(day)

    break;
  case  6:
    day = "Saturday";
    console.log(day)

}