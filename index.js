//method1

let names = ["RG","Sid","LS","Riya","Kiran"];
console.log(names);

//method2

let name2= [];

name2[0]="Rudoff";
name2[1]="Kuldeep";
name2[2]="Raj";
name2[5]="Ravi";
console.log(name2);

//method3 array constructor

let name3 = new Array("Raju", "Shyam" , "Baburao");
console.log(name3);

let multiple = new Array("Ribhu" , 20 , true , 909009000 , 0.89);

names.push("Ram");
console.log(names);

names.pop();
console.log(names);

names.shift();
console.log(names);
names.unshift("Tana");
console.log(names);

console.log(names.length);


let num1 = [3,4,5,6,7,8];
let num2 = [5,5,6,7,8];

console.log(num1.indexOf(5));
console.log(num2.lastIndexOf(7));

//concat dont make change to initial array
console.log(num1.concat(num2));

console.log(num1.join(" * "));

console.log(names.reverse());
console.log(names.sort());

console.log(names.sort().reverse());


num2.splice(2,0,9,4,9);
console.log(num2);

console.log(num1.slice(2,4));