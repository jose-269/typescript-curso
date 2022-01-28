"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    //? let myFunction: (a:number, b:number) => number;
    //  let myFunction: (c: string) => string;
    let myFunction;
    //* myFunction = 10;
    //* console.log({myFunction});
    //? myFunction = addNumbers;
    //? console.log(myFunction(1,2));
    // myFunction = greet;
    // console.log(myFunction('Jose'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
