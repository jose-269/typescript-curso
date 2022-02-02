//! Interfaces no sirven para crear instancias

(() => {

  interface Client {
    name: string;
    age: number;
    adress: Adress ;
    getFullAdress(id:number):number //? las interfaces no llevan => a diferencia de los type que si llevan el =>
  };

  interface Adress {
    id: number;
    zipCode: string;
    city: string
  }

  const client: Client = {
    name: 'Jose',
    age: 25,
    adress: {
      id: 125,
      zipCode: 'JLM 269',
      city: 'Los Angeles'
    },
    getFullAdress(id:number) {
      return this.adress.id;
    }
  };

  const client2:Client = {
    name: 'Jose2',
    age: 37,
    adress: {
      id: 26,
      zipCode: 'JLV 2',
      city: 'Stgo'
    },
    getFullAdress(id:number) {
      return this.adress.id;
    }
  }
})();