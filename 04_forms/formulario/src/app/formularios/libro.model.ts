export interface Book {
    author: string;
    title: string;
    editorial: string;
    numPage: number;
    exlibris: boolean; // si lo tienes o no en tu biblioteca
    genero: string;
    country: Country;
}

export interface Country {
    code: string;
    name: string;
}
