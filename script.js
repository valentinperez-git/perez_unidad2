function suma(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

// Llamado a la función
suma(3, 5, function(resultado) {
    console.log("El resultado de la suma es: " + resultado);
});