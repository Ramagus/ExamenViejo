function mostrar()
{ 
    var importe;
    var iva;  
    var importeFinal;

    importe = parseFloat(prompt("Ingrese un importe"));

    while(importe <= 0 || isNaN(importe))
    {
        importe = parseFloat(prompt("Error. Ingrese un importe válido"));
    }

    iva = importe * 21 / 100;

    importeFinal = importe + iva;

    document.getElementById("importe").value = importeFinal.toFixed(2);
}