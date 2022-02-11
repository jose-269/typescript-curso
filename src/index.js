define(["require", "exports", "./classes/Hero"], function (require, exports, Hero_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log('Hola Mundo!!!!');
    const ironman = new Hero_1.Hero('Ironman', 1, 55);
    console.log(ironman);
});
