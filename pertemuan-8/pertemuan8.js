console.log("pertemuan 8");
//Destruktur

//let age;
const person = ['john', 'doe', 33, true];

//const firstName = person[0];
//const lastName = person[1];
//const age = person[2];
//const isMarried = person[3];

//const [firstName, lastName, age, isMarried, address = 'bitung'] = person;
//console.log(firstName, lastName, age, isMarried, address);

//const [firstName, , age] = person;
//console.log(firstName, age);

//[ , ,age] = person;
//console.log(age);

//let [firstName, lastName, ...rest] = person;
//console.log(firstName, lastName, rest);

//let firstName, lastName;
let obj = 
{
    firstName : "john",
    lastName : "doe",
    age : 33,
    isMarried : true,
};

//let firstName = obj.firstName;
//let lastName = obj.lastName;
//let age = obj.age;
//let isMarried = obj.isMarried;
//console.log(firstName, lastName, age, isMarried);

//let {firstName, lastName, age, isMarried} = obj;
//console.log(firstName, lastName, age, isMarried);

//let {age : umur} = obj;
//console.log(umur);

//({firstName, lastName, address = "bitung"} = obj);
//console.log(firstName, lastName, address); 

//let {firstName, lastName, ...rest} = obj;
//console.log(firstName, lastName, rest);

const display = ({firstName, lastName}) =>
`Hello my name is ${firstName} ${lastName}`;
console.log(display(obj));