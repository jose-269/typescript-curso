(() => {

  // class Avenger {

  //   private name: string;
  //   public team: string;
  //   public realName?: string;
  //   static average: number = 35;

  //   constructor(name: string, team:string, realName?:string) {
  //     this.name = name;
  //     this.team = team;
  //     this.realName = realName;
  //   }
    
  // }

  class Avenger {
    static average:number = 35
    static getAverage() {
      return this.name;
    }

    constructor(
      private name: string, 
      private team:string, 
      public realName?:string,
    ) {};

    public bio(): string {
      return `${this.name} (${this.team})`
    }
    
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang' ) ;
  // console.log(antman);
  // console.log(Avenger.average);
  // console.log(antman.bio());
  // console.log(Avenger.getAverage());
  
  
  
  

})();