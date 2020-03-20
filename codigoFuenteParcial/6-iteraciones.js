function mostrar()
{
    var importe;
    var maximo;
    var minimo;
    var diaMax;
    var diaMin;
    var flag = 0;
    var i;

    for(i = 1; i <= 7; i++)
    {
        importe = parseFloat(prompt("Ingrese un importe para el día " + i));

        while(importe <= 0 || isNaN(importe))
        {
            importe = parseFloat(prompt("Error. No se puede ingresar números negativos\nIngrese un importe para el día " + i));
        }

        if(importe > maximo || flag == 0)
        {
            maximo = importe;

            diaMax = i;
        }

        if(importe < minimo || flag == 0)
        {
            minimo = importe;
    
            diaMin = i;

            flag = 1;
        }
    }

    alert("El mayor importe fue $" + maximo.toFixed(2) + ", del día " + diaMax + "\nEl menor importe fue $" + minimo.toFixed(2) + ", del día " + diaMin);
}