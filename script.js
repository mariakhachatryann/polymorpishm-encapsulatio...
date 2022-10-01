"use strict";

// 1․ լուծում եք class-ի պոլիմորֆիզմի հարցը

class Animal {
  constructor(animal) {
    this.animal = animal;
  }
  
  say() {
    if (this.animal === "dog") {
      console.log("woof, woof");
    } else if (this.animal === "cat") {
        console.log("meow, meow");
    } else {
      console.log(`rrr, I'm an animal`);
    }
  }
}

const dog = new Animal("dog");
const cat = new Animal("cat");
dog.say();
cat.say();

// ստեղծում եք class, որը կունենա ինկապսուլացիա արված 1 մեթոդ և մեկ փրոփերթի 
// (և վանդականիշով և փոփոխականով և տակի գծիկով)

class Person {
  constructor(name, lastname, phone, mail) {
    this.name = name;
    this.lastname = lastname;
    // this._phone = phone;
    // this._mail = mail;
  }

  #phone = 81812;
  #mail = "john@mail.com";

  getInfo(){
    // console.log(`name: ${this.name}, lastname: ${this.lastname}, phone:  ${this.phone}, email: ${this.email}`);
    
  }

  #getPrivInfo(){
    return `Mail: ${this.#mail}, Phone: ${this.#phone}`;
  }

  get privInfo (){
    console.log(this.#phone);
    console.log(this.#mail);
    console.log(this.#getPrivInfo());
  }

  set privInfo (newPhone){
    this.#phone = newPhone;
  }
}

const john = new Person("John", "Johnson", 15);
john.privInfo = 111111;
john.privInfo;


// 3․ աշխատել ստատիկների հետ

class Test {
  static countObj = 0;
  constructor(){
    Test.countObj++;
  }

  static getObjCount(){
    console.log(`Created ${this.countObj} objects`);
  }
}

let obj1 = new Test();
let obj2 = new Test();
let obj3 = new Test();
let obj4 = new Test();
let obj5 = new Test();

Test.getObjCount(); // Created 5 objects