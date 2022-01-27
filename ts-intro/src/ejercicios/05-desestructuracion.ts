interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 36,
    cancion: "Want you bad",
    detalles:{
        autor: "The Offspring",
        anio: 2002
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;
/*
console.log( "El volumen actual es: ", volumen);
console.log( "El segundo actual es: ", segundo );
console.log( "La canción actual es: ", cancion);
console.log( "El Autor actual es: ", autor);
*/

const dbz: string[] = ['Goku', 'Vegueta', 'Trunks'];
const [p1, p2, p3] = dbz;

console.log('Personaje 1 ', p1);
console.log('Personaje 1 ', p2);
console.log('Personaje 1 ', p3);