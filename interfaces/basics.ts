(() => {
  //! TIpo lleva igual
  //! interfaces son extendibles type no
  interface Hero  {
    name: string;
    age?: number;
    powers: number[];
    getName?:() => string;
  };

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: [1,2]
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 35,
    powers: [1],
    getName() {
      return this.name
    }
  }
})();