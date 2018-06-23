my_services = [
  {
    "id":"0001",
    "city":"CDMX",
    "customer":"Román López",
    "addres_street": "Zamora 177, Int 101",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "26 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.412901",
    "long_service": "-99.180274"
  },
  {
    "id":"0002",
    "city":"CDMX",
    "customer":"Mauricio Morales",
    "addres_street": "Amatlán 18",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "27 feb",
    "hour": "12:00 AM",
    "lenght": "3",
    "lat_service": "19.413958",
    "long_service": "-99.174357"
  },
  {
    "id":"0003",
    "city":"CDMX",
    "customer":"Roberto Salgado",
    "addres_street": "Atlixco 5",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "28 feb",
    "hour": "4:00 PM",
    "lenght": "3",
    "lat_service": "19.415771",
    "long_service": "-99.172825"
  }
];

// Con ` puedo escribir un string de varias lineas
let contenido = ``;/*string vacio*/

for(let i=0; i<my_services.length;i++){
    contenido += 
    // `<div class='tarjeta'>${my_services[i].customer}</div>`/*el ${} es para acceder a los comandos de JS y no los detecte como string*/
    `<div class="tarjeta">  
        <div class="tarjeta-contenido">
            <div class="contenedor-dato">
                <p class="titulo">Direccion</p>
                <p class="contenido">${my_services[i].addres_street}</p>
            </div>
            <div class="linea">
                <div class="contenedor-dato">
                    <p class="titulo">Fecha</p>
                    <p class="contenido">${my_services[i].date}</p>
                </div>
                <div class="contenedor-dato">
                    <p class="titulo">Hora</p>
                    <p class="contenido">${my_services[i].hour}</p>
                </div>
            </div>
            <div class="linea">
                <div class="contenedor-dato">
                    <p class="titulo">Duracion</p>
                    <p class="contenido">${my_services[i].lenght} horas</p>
                </div>
                <div class="contenedor-dato">
                    <a href='./../sesion.html'>
                    <button class="boton-tipo">Recurrente</button>
                    </a>
                </div>
            </div>
        </div>
        <div class="detalles">Ver detalles</div>
    </div>`; 

}

document.getElementById("servicios").innerHTML = contenido