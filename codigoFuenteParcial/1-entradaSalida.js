function mostrar()
{
    var base;
    var perimetro;

    base = parseFloat(document.getElementById("lado").value);

    if(base <= 0 || isNaN(base))
    {
        alert("Error. Ingrese una base válida");
    }

    else
    {
        perimetro = base * 3;

        alert("El perímetro es: " + perimetro);
    }
}
