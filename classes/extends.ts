(() => {

  class Avenger {
    constructor(
      public name:string,
      public realName: string,
    ) {
      console.log('Constructor Avenger llamado');
    };

    protected getFullName() { // Solo puede llamarse de una clase que extienda de esta
      return `${this.name} ${this.realName}`;
    }
  };

  class Xmen extends Avenger {
    constructor(
      public name:string,
      public realName: string,
      public isMutant: boolean
    ) {
      super(name, realName)
      console.log('Contructor Xmen llamado');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`
    }

    set setFullName(name:string) {
      if(name.length < 3) {
        throw new Error('El nombre debe tener mas de 3 letras') 
      }
      this.name = name
    }

    getFullNameDesdeXmen(){
      console.log(super.getFullName())
    }
  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);

  // wolverine.setFullName = 'Jo'
  // console.log(wolverine.fullName);


  // wolverine.getFullNameDesdeXmen()
  


})();