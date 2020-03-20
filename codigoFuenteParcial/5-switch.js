function mostrar()
{
    var mes;

    mes = prompt("Ingrese un mes del año").toLowerCase();
    mes = mes.charAt(0).toUpperCase() + mes.slice(1);

    while(mes != "Enero" && mes != "Febrero" && mes != "Marzo" && mes != "Abril" && mes != "Mayo" && mes != "Junio" &&
            mes != "Julio" && mes != "Agosto" && mes != "Septiembre" && mes != "Octubre" && mes != "Noviembre" && mes!= "Diciembre")
    {
        mes = prompt("Error. Ingrese un mes válido").toLowerCase();
        mes = mes.charAt(0).toUpperCase() + mes.slice(1);
    }

    switch(mes)
    {
        case "Enero":
        case "Febrero":

            alert("Veranito!!!!");

            break;

        default:

            alert("Extraño Enero y Febrero!!!");
    }
}