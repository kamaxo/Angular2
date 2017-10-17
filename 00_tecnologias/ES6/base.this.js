let oPrueba = {
    precio: 12,
    iva: 1.16,
};
oPrueba.calculaIvaAsiync = function() {
    /*
    setTimeout (function() {
        
        let precioFinal = this.precio * this.iva
        console.log(`
        Usando una funcion clásica:
        El precio final es ${precioFinal}
        `);
    }, 1000)
    */

    // Caracter semantico del this
    setTimeout (() => {
        
        let precioFinal = this.precio * this.iva
        console.log(`
        Usando una funcion clásica:
        El precio final es ${precioFinal}
        `);
    }, 1000)
    
}
oPrueba.calculaIvaAsiync()