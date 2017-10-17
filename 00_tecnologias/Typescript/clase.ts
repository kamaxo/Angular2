// Ejemplo de código en ES6

interface DatosLibro{
    tematica: string; // dentro de un interfaz todo es publico por tanto no admite modificadores de ambito
    paginas: number; 
    mostrarDatos(x:string): () => string;
    editorial?: string; // ? --> propiedad opcional
    isbn: string | number; // a veces actua como string o como number. Tipo union
    titulo: any; // esta propiedad puede contener cualquier tipo
    calcularPrecio(iva: number): number;
}

class Libro implements DatosLibro {
    tematica: string;
    paginas: number;
    autor: {}; // autor de tipo objeto vacio
    autor2: {nombre: string, apellidos: string}; // define un objeto con unas propiedades
    isbn: string; // cuando lo define el tipo union en la clase que lo implementa puedes decidir por que tipo quieres
    titulo: string;
    
    constructor(tematica, paginas){
        this.tematica = tematica;
        this.paginas = paginas;     
    }

    mostrarDatos(x:string){
        // lo que sea
        return () => "";
    }

    calcularPrecio(iva: number){
        return 1;
    }
}

class LibroTecnico extends Libro {
    precio: number; // --> por defecto el ambito de la variable es publico (public)
    public capitulos: Array<string>;
    // captulos: [string]; --> Otra forma de escribir arrays

    constructor(tematica, paginas, precio) {
        super(tematica, paginas);
        this.capitulos = [];
        this.precio = precio;
        // ...   
    }

    precioTotal(pValor:number = 1) {
        // ...
        console.log(pValor * this.precio);
    }
}

let oLibro = new LibroTecnico("Informatica", 129, 30)

console.log(oLibro);