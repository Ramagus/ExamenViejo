function mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var alambre;

    ancho = parseFloat(document.getElementById("ancho").value);
    largo = parseFloat(document.getElementById("largo").value);

    if(ancho <= 0 || isNaN(ancho))
    {
        alert("Error. Ingrese una medida válida de ancho");
    }

    if(largo <= 0 || isNaN(largo))
    {
        alert("Error. Ingrese una medida válida de largo");
    }

    if(ancho > 0 && largo > 0)
    {
        perimetro = largo * 2 + ancho * 2;

        alambre = perimetro * 6;

        alert("Se necesitan " + alambre + " metros de alambre");
    }
}
