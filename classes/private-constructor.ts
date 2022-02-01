(() => {
  class Apocalipsis {

    static instance: Apocalipsis;

    private constructor( // contructor privado solo se puede llamar dentro de la clase
      public name: string,
    ) {};

    static callApocalipsis(): Apocalipsis {
      if(  !Apocalipsis.instance  ) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis')
      }

      return Apocalipsis.instance;
    };

    changeName( newName:string): void {
      this.name = newName;
    };
  };


  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();

  apocalipsis1.changeName('Xavier')
  // const apocalipsis1 = new Apocalipsis('Soy apocalipsis1...el unico');
  // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2...el unico');
  // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3...el unico');
  console.log(apocalipsis1, apocalipsis2, apocalipsis3);
  

  
})();