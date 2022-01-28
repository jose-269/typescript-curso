// Funciones Básicas
function sumar( a:number, b:number ): number{
  return a + b;
}

const contar = ( heroes: string[] ):number => {
  return heroes.length;
}
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
const llamarBatman = ( llamar?:string ):void => {
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman('llamar');

// Rest?
const unirheroes = ( personas:string[] ):string => {
  return personas.join(", ");
}


// Tipo funcion
const noHaceNada = ( numero, texto, booleano, arreglo )=> {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada
