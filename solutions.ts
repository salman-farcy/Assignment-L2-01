
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



//* Problem 4
function getProperty <T, K extends keyof T> (obj : T , key : K) : T[K] {
     return obj[key];
}
const user = {
     id: 4,
     name: "salman farcy",
     age: 26,
}

const result6 = getProperty(user, 'name')
// console.log(result6)



//* Problem 5
interface Book {
     title: string;
     author: string;
     publishedYear: number;
}
interface BookWithStatus extends Book {
     isRead: boolean
}
const book : Book = {
     title: "TypeScript Guide",
     author: "Jane Doe",
     publishedYear: 2024,
}

function toggleReadStatus (value : Book) : BookWithStatus {
     return {...value, isRead: true}
}
const result7 = toggleReadStatus(book)
// console.log(result7)


//* Problem 6
class Person {
     name: string;
     age: number;

     constructor(name: string, age: number){
          this.name = name;
          this.age = age
     }
}
class Student extends Person {
     grade: string

     constructor (name: string, age: number, grade: string){
          super(name, age)
          this.grade = grade
     }

     getDetails(): string {
          return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
     }
}
const student = new Student("Alice", 20, "A")
// console.log(student.getDetails())



//* Problem 7
function getIntersection (value1 : number[], value2 : number[]) : number[] {
    return value1.filter((num) => value2.includes(num))
}
const result8 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]) ;
console.log(result8)  