(() => {
  abstract class Mutante {
    constructor(
      public name:string,
      public realName: string,
    ) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return 'Él mundo esta a salvo'
    }
  }
  class Villian extends Mutante {
    conquistar() {
      return 'El Mundo sera conquistado'
    }
  }

  const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
  const magneto: Villian = new Villian('Magneto', 'Magnus');

  // console.log(wolverine.salvarMundo());
  // console.log(magneto.conquistar());

  const printName = (character:Mutante) => {
    // console.log(character.realName);
    
  };

  printName(wolverine)
  
  
})();