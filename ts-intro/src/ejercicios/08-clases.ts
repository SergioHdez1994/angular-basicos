class PersonaNormal{

    constructor( 
        public nombre: string,
        public direccion:string
        ) {}
}

class Heroe extends PersonaNormal{

    //EL constructor se ejecuta al hacer la instancia
    constructor(
        public alterEgo:string = 'Pedro', 
        public edad: number = 90, 
        public nombreReal: string = 'Panza'
        ) {
            super (nombreReal, 'New York');
        }

}

// Instancia
const ironman = new Heroe('Iron man', 30, 'Tony Stark');

console.log(ironman)
