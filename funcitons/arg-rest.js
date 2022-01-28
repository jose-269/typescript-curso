"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superMan = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superMan });
})();
