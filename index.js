"use strict";
// Number
let b = 10;
console.log(b);
// array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
//tuple
let arr2 = [1, "hello"];
//enum
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["MANAGER"] = "manager";
})(UserRole || (UserRole = {}));
var Status;
(function (Status) {
    Status["ABANDONED"] = "abandoned status code 500";
    Status["NOTFOUND"] = "not found status code 404";
})(Status || (Status = {}));
// res.status(Status.NOTFOUND).send("Not Found");
console.log(UserRole.ADMIN);
let abc = 10;
// function
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// write a program to find the factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}
console.log(factorial(5));
function getDataOfUser(obj) {
    console.log(obj.name, obj.email, obj.gender);
}
let obj = {
    name: "nisil",
    email: "nisil@gmail.com",
    password: "123",
};
getDataOfUser(obj);
function getAdminData(obj) {
    console.log("admin data", obj.admin, obj.name);
}
function getUserData(obj) {
    console.log("user data", obj.password, obj.name);
}
let admin = {
    name: "nisil",
    email: "nisilpantha@gmail.com",
    password: "123",
    admin: true,
};
let user = {
    name: "nisil",
    email: "nisilpantha@gmail.com",
    password: "123",
};
getUserData(user);
getAdminData(admin);
let a = 10;
a = "ram";
a = null;
function abcd(a) {
}
// type vs inteface
// type is use for making an type 
// interface is use for making an shape of object type
// if their is two interface they merge but type thows an error as Duplicate identifier
//OOPS
class Device {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    static singleton() {
        if (this.device === null) {
            this.device = new Device();
        }
        return this.device;
    }
}
Device.device = null;
let d1 = Device.singleton();
let d2 = Device.singleton();
console.log("checkkk", d1 === d2);
// object ---
// class Person{
//   public name:string;
//   public age:number;
//   public constructor(name:string,age:number){
//     this.name=name;
//     this.age=age;
//   }
// }
// let ram=new Person("nisil",13);
// console.log("The person name is",ram.name,"and age is:",ram.age);
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Ram extends Person {
    constructor(name, age) {
        super(name, age);
        this.hasJob = false;
        this.hasBankAccount = false;
        this.accountNumber = 0;
    }
    setHasJob(hasJob) {
        this.hasJob = hasJob;
    }
    getHasJob() {
        return this.hasJob;
    }
    setHasBankAccount(hasBankAccount) {
        this.hasBankAccount = hasBankAccount;
    }
    getHasBankAccount() {
        return this.hasBankAccount;
    }
    setAccountNumber(accountNumber) {
        this.accountNumber = accountNumber;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
}
let ram1 = new Ram("nisil", 22);
ram1.setAccountNumber(1234455);
console.log(ram1.getAccountNumber());
//static in OOPS
class Hotel {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
        Hotel.registerNumber++;
    }
    getDetailsOfHotel() {
        return `Hotel Name: ${this.name}, Rating: ${this.rating}, Register Number: ${Hotel.registerNumber}`;
    }
}
Hotel.registerNumber = 0;
let pauwaHotel = new Hotel("pauwa", 3);
console.log(pauwaHotel.getDetailsOfHotel());
pauwaHotel.name = "Pauwa";
console.log(pauwaHotel);
let dreamLand = new Hotel("dreamLand", 3);
console.log(dreamLand.getDetailsOfHotel());
// readOnly
// class Project{
//   constructor(public readonly greatestProjectName:string){
//   }
//   //Cannot assign to 'greatestProjectName' because it is a read-only property.
//   changeGretestProjectName(){
//     this.greatestProjectName="esewa";
//   }
// }
// let project=new Project("d-sewa");
// console.log(project);
// console.log(project.changeGretestProjectName());
// parameter properties ------------------------------------------
// Variable initialization and instantiation in the constructor parameter.
class Hotel2 {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}
const h1 = new Hotel("Pauwa", 3);
console.log(h1.name, h1.rating);
// abstract ---------
class Vehicle {
}
class Car extends Vehicle {
    constructor(name, speed) {
        super();
        this.name = name;
        this.speed = speed;
    }
    getSpeed() {
        return this.speed;
    }
}
let car = new Car("bmw", 120);
// function
function hello(name, age, cb) {
    cb("nisil007");
}
hello("nisil", 22, (arg) => {
    console.log(arg);
});
function person(name, age, gender = "disclose") {
    console.log(name, age, gender);
}
person("nisil", 22, "male");
person("pravesh", 20);
// Rest Parameter
function restParameter(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}
console.log(restParameter(1, 2, 3, 4, 5, 6, 7, 8));
function restParameter2(...args) {
    return args[0];
}
console.log(restParameter2("nisil", "ram", "hari"));
// Generics ---
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityThree(true);
identityFour("4");
identityFour({ brand: "nisil", type: 10 });
