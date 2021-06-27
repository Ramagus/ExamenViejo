function mostrar()
{
    var numero;
    var contadorPares = 0;
    var promedio;
    var acumulador = 0;
    var contador = 0;
    var maximo;
    var minimo;
    var flag = 0;
    var respuesta;

    do
    {
        numero = parseInt(prompt("Ingrese un número positivo"));

        while(numero <= 0 || isNaN(numero))
        {
            numero = parseInt(prompt("Error. Sólo número positivo"));   
        }

        acumulador += numero;

        contador++;

        if(numero % 2 == 0)
        {
            contadorPares++;
        }
    
        if(numero > maximo || flag == 0)
        {
            maximo = numero;
        }
        
        if(numero < minimo || flag == 0)
        {
            minimo = numero;
    
            flag = 1;
        }

        respuesta = confirm("¿Desea continuar?");

    } while(respuesta);

    promedio = acumulador / contador;

    document.write("Cantidad de números pares: " + contadorPares + "<br>");
    document.write("Promedio de los números: " + promedio.toFixed(2) + "<br>"); 
    document.write("Suma de los números: " + acumulador + "<br>");
    document.write("Número máximo: " + maximo + "<br>");    
    document.write("Número mínimo: " + minimo + "<br>");    
}
