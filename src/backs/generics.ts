import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Villain, Hero } from '../interfaces';



// printObject(123);
// printObject(new Date());
// printObject({a:1,b:2,c:3});
// printObject([1,2,3]);
// printObject('Hola Mundo');

// const name: string = 'Jose'

// console.log(genericFunction(3.1416).toFixed(2))
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDate());

// console.log(genericFunctionArrow(3.1416).toFixed(2))
// console.log(genericFunctionArrow(name).toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);











