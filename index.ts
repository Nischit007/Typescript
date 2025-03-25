// Number
let b: number = 10;
console.log(b);

// array
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

//tuple

let arr2: [number, string] = [1, "hello"];

//enum

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  MANAGER = "manager",
}

enum Status {
  ABANDONED = "abandoned status code 500",
  NOTFOUND = "not found status code 404",
}

// res.status(Status.NOTFOUND).send("Not Found");

console.log(UserRole.ADMIN);

let abc: any = 10;

// function
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

// write a program to find the factorial of a number
function factorial(n: number): number {
  let fact: number = 1;
  for (let i: number = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5));

// Interface

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}
function getDataOfUser(obj: User) {
  console.log(obj.name, obj.email, obj.gender);
}
let obj: User = {
  name: "nisil",
  email: "nisil@gmail.com",
  password: "123",
};

getDataOfUser(obj);

// error because of two (: :) in name as (:) string and (:) value
// let obj2 = {
//     name :string : "nisil",
//     email: "nisilpantha@gmail.com",
//     password: "123",
//   };

// interface extends

interface User {
  name: string;
  email: string;
  password: string;
}

interface Admin extends User {
  admin: boolean;
}

function getAdminData(obj: Admin) {
  console.log("admin data", obj.admin, obj.name);
}

function getUserData(obj: User) {
  console.log("user data", obj.password, obj.name);
}
let admin: Admin = {
  name: "nisil",
  email: "nisilpantha@gmail.com",
  password: "123",
  admin: true,
};

let user: User = {
  name: "nisil",
  email: "nisilpantha@gmail.com",
  password: "123",
};

getUserData(user);
getAdminData(admin);

// merging of interface

// in this their will be no overriding instead two interface of same name get merge

interface SuperUser {
  name: string;
}

interface SuperUser {
  email: string;
}

//Output

// interface SuperUser{
//     name:string
//     email:string
// }

// type alias

type nisil = number | string | null;

let a: nisil = 10;
a = "ram";
a = null;




// Intersection types
type User1={
  name:string,
  email:string
}

type Admin1=User1 & {
  admin:boolean
  getDetails(user: string):void
}

function abcd(a:Admin){
  
}
 
                      // type vs inteface
  // type is use for making an type 
  // interface is use for making an shape of object type
  // if their is two interface they merge but type thows an error as Duplicate identifier


  //OOPS
  class Device {
    name: string = "lg";
    price: number = 12000;
    category: string = "digital";
    
    private static device: Device | null = null;
  
    private constructor() {} 
  
    public static singleton(): Device {
      if (this.device === null) {
        this.device = new Device();
      }
      return this.device;
    }
  }
let d1= Device.singleton();
let d2= Device.singleton();
console.log("checkkk",d1===d2);



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



class Person{
  protected name:string;
  protected age:number;
  
  public constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }
}


class Ram extends Person{
  private hasJob:boolean=false;
  private hasBankAccount:boolean=false;
  private accountNumber:number=0;
  
  constructor(name: string, age: number) {
    super(name, age); 
  }

  public setHasJob(hasJob:boolean):void{
    this.hasJob=hasJob;
  }

  public getHasJob():boolean{
    return this.hasJob;
  }

  public setHasBankAccount(hasBankAccount:boolean):void{
    this.hasBankAccount=hasBankAccount;
  }

  public getHasBankAccount():boolean{
    return this.hasBankAccount;
  }

  public setAccountNumber(accountNumber:number):void{
    this.accountNumber=accountNumber;
  }

  public getAccountNumber():number{
    return this.accountNumber;
  }
}

let ram1=new Ram("nisil",22);
ram1.setAccountNumber(1234455);
console.log(ram1.getAccountNumber());

//static in OOPS

class Hotel{
  public name:string
  public rating:number;
  public static registerNumber:number=0;

 public constructor(name:string,rating:number){
  this.name=name;
  this.rating=rating;
  Hotel.registerNumber++;
 }
 
 public getDetailsOfHotel():string{
  return `Hotel Name: ${this.name}, Rating: ${this.rating}, Register Number: ${Hotel.registerNumber}`;
 }
}
let pauwaHotel=new Hotel("pauwa",3);


console.log(pauwaHotel.getDetailsOfHotel());
pauwaHotel.name="Pauwa"
console.log(pauwaHotel);

let dreamLand=new Hotel("dreamLand",3);
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
    constructor(public name: string, public rating: number) {} 
  }
  
  const h1 = new Hotel("Pauwa", 3);
  console.log(h1.name, h1.rating);
  
      // abstract ---------

  abstract class Vehicle{
    abstract getSpeed():number
  }
   class Car extends Vehicle{
    public name:string;
    public speed:number;
      constructor(name:string,speed:number){
        super();
        this.name=name;
        this.speed=speed;
      }
      public getSpeed(): number {
        return this.speed;
      }
  }

  let car=new Car("bmw",120)


  // function

function hello(name:string,age:number,cb:(arg:string)=>void){
  cb("nisil007");
}  

hello("nisil",22,(arg:string)=>{
  console.log(arg);
})



function person(name:string,age:number,gender:string="disclose"){
  console.log(name,age,gender);
  
}  

person("nisil",22,"male");
person("pravesh",20)



// Rest Parameter

function restParameter(...args:number[]):number{
  let sum:number=0
  for(let i:number=0;i<args.length;i++){
    sum+=args[i];
  }
  return sum;
}

console.log(restParameter(1,2,3,4,5,6,7,8))

function restParameter2(...args:string[]):string{
  return args[0];
}

console.log(restParameter2("nisil","ram","hari"));






// Generics ---
const score : Array<number>=[]
const names:Array<string>=[]


function identityOne(val:boolean | number):boolean | number{
  return val;
}


function identityThree<Type>(val:Type):Type{
  return val;
}


function identityFour<T>(val:T):T{
  return val;
}



identityThree(true)
identityFour("4")


interface Bootle{
  brand: string,
  type: number
}


identityFour<Bootle>({brand:"nisil",type:10});