function mostrar()
{
    var numero1;
    var numero2;
    var resultado;
    var mensaje;

    numero1 = parseInt(prompt("Ingrese un número"));

    while(isNaN(numero1))
    {
        numero1 = parseInt(prompt("Error. Sólo número"));
    }

    numero2 = parseInt(prompt("Ingrese otro número"));

    while(isNaN(numero2))
    {
        numero2 = parseInt(prompt("Error. Sólo número"));
    }

    if(numero1 == numero2)
    {
        resultado = numero1 * numero2;

        mensaje = "El producto es: " + resultado;
    }

    else if(numero1 > numero2)
    {
        resultado = numero1 - numero2;

        mensaje = "La resta es: " + resultado;
    }

    else
    {
        resultado = numero1 + numero2;

        mensaje = "La suma es: " + resultado;
    }

    document.write(mensaje);
}