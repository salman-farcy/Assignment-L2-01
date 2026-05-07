
//* Problem 1
function filterEvenNumbers(number : number[]) : number[] {
     return number.filter(n => n % 2 === 0 && n !== 0)
}


//* Problem 2
function reverseString(value : string) : string {
     return value.split('').reverse().join('');
}



//* Problem 3
type StringOrNumber = string | number;
function checkType (value : StringOrNumber ) : string{
    if(typeof value === "string"){
          return "String";
    }else{
          return "Number"
    }
}



//* Problem 4
const user = {
     id: 4,
     name: "salman farcy",
     age: 26,
}
function getProperty <T, K extends keyof T> (obj : T , key : K) : T[K] {
     return obj[key];
}



//* Problem 5
interface Book {
     title: string;
     author: string;
     publishedYear: number;
     isRead?: boolean;
}
const book : Book = {
     title: "TypeScript Guide",
     author: "Jane Doe",
     publishedYear: 2024,
     isRead: true,
}

function toggleReadStatus (value : Book) : Book {
     return {...value, isRead: !value.isRead,}
}


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



//* Problem 7
function getIntersection (value1 : number[], value2 : number[]) : number[] {
    return value1.filter((num) => value2.includes(num))
}

  