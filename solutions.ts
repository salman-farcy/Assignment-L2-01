
//* Problem 1
function filterEvenNumbers(number : number[]) : number[] {
     return number.filter(n => n % 2 === 0 && n !== 0)
}
const numberDigit = [0, 1, 3, 8, 6, 4, 0, 2, 10, 12, 9];
const result = filterEvenNumbers(numberDigit)



//* Problem 2
function reverseString(value : string) : string {
     return value.split('').reverse().join('');
}
const revString = reverseString("salmanfarcy")
// console.log(revString)



//* Problem 3
type StringOrNumber = string | number;
function checkType (value : StringOrNumber ) : string{
    if(typeof value === "string"){
          return "String";
    }else{
          return "Number"
    }
}

// console.log(checkType("asdjfla"))