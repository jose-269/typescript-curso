"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Él mundo esta a salvo';
        }
    }
    class Villian extends Mutante {
        conquistar() {
            return 'El Mundo sera conquistado';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistar());
    const printName = (character) => {
        // console.log(character.realName);
    };
    printName(wolverine);
})();
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
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAverage() {
            return this.name;
        }
        ;
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.average = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.average);
    // console.log(antman.bio());
    // console.log(Avenger.getAverage());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('Constructor Avenger llamado');
        }
        ;
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    ;
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.name = name;
            this.realName = realName;
            this.isMutant = isMutant;
            console.log('Contructor Xmen llamado');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set setFullName(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe tener mas de 3 letras');
            }
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    // const wolverine = new Xmen('Wolverine', 'Logan', true);
    // wolverine.setFullName = 'Jo'
    // console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen()
})();
(() => {
    class Apocalipsis {
        constructor(// contructor privado solo se puede llamar dentro de la clase
        name) {
            this.name = name;
        }
        ;
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis');
            }
            return Apocalipsis.instance;
        }
        ;
        changeName(newName) {
            this.name = newName;
        }
        ;
    }
    ;
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalipsis('Soy apocalipsis1...el unico');
    // const apocalipsis2 = new Apocalipsis('Soy apocalipsis2...el unico');
    // const apocalipsis3 = new Apocalipsis('Soy apocalipsis3...el unico');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map