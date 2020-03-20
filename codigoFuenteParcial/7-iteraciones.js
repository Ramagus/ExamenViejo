function mostrar()
{
    var nota;
    var sexo;
    var promedio;
    var notaBaja;
    var acumuladorNotas = 0;
    var contadorNotas = 0;
    var contadorVaronMax6 = 0;
    var flag = 0;
    var i;

    for(i = 1; i <= 6; i++)
    {
        nota = parseFloat(prompt("Ingrese la nota"));

        while(nota < 0 || nota > 10 || isNaN(nota))
        {
            nota = parseFloat(prompt("Error. Ingrese una nota válida"));
        }

        sexo = prompt("Ingrese el sexo").toUpperCase();

        while(sexo != "M" && sexo != "F")
        {
            sexo = prompt("Error. Ingrese un sexo válido").toUpperCase();
        }

        if(nota < notaBaja || flag == 0)
        {
            notaBaja = nota;

            flag = 1;
        }

        if(nota >= 6 && sexo == "M")
        {
            contadorVaronMax6++;
        }

        acumuladorNotas += nota;

        contadorNotas++;
    }

    promedio = acumuladorNotas / contadorNotas;

    alert("El promedio de las notas totales es: " + promedio.toFixed(2) + "\nLa nota más baja es: " + notaBaja +
            "\nLa cantidad de varones que su nota es mayor o igual a 6 es: " + contadorVaronMax6);
}