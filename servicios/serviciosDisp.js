available_service = [
  {
    "id":"0001",
    "city":"CDMX",
    "customer":"Juan Pérez",
    "addres_street": "Zamora 177, Int 101",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.412901",
    "long_service": "-99.180274"
  },
  {
    "id":"0002",
    "city":"CDMX",
    "customer":"Lupita Gómez",
    "addres_street": "Amatlán 18",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "7:00 AM",
    "lenght": "4",
    "lat_service": "19.413958",
    "long_service": "-99.174357"
  },
  {
    "id":"0003",
    "city":"CDMX",
    "customer":"Carla Robledo",
    "addres_street": "Amsterdam 43",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "31 feb",
    "hour": "10:00 AM",
    "lenght": "4",
    "lat_service": "19.415621",
    "long_service": "-99.169068"
  },
  {
    "id":"0004",
    "city":"CDMX",
    "customer":"Gabriela Viloria",
    "addres_street": "Cuernavaca 88, Int. 132",
    "addres_neighborhood": "Condesa",
    "service_type": "Unica vez",
    "date": "31 feb",
    "hour": "11:00 AM",
    "lenght": "6",
    "lat_service": "19.413013",
    "long_service": "-99.175914"
  },
  {
    "id":"0005",
    "city":"CDMX",
    "customer":"Luis Sánchez",
    "addres_street": "Cuautla 12",
    "addres_neighborhood": "Condesa",
    "service_type": "Recurrente",
    "date": "31 feb",
    "hour": "3:00 PM",
    "lenght": "4",
    "lat_service": "19.414728",
    "long_service": "-99.175573"
  },
  {
    "id":"0006",
    "city":"CDMX",
    "customer":"Valeria Román",
    "addres_street": "Cozumel 20, Int 32",
    "addres_neighborhood": "Condesa",
    "service_type": "Unica vez",
    "date": "31 feb",
    "hour": "5:00 PM",
    "lenght": "3",
    "lat_service": "19.420301",
    "long_service": "-99.171112"
  },
  {
    "id":"0007",
    "city":"CDMX",
    "customer":"Diana Martínez",
    "addres_street": "Atlixco 5",
    "addres_neighborhood": "Condesa",
    "service_type": "Expres",
    "date": "31 feb",
    "hour": "9:00 AM",
    "lenght": "4",
    "lat_service": "19.415771",
    "long_service": "-99.172825"
  }
];

let contenido = ``;/*string vacio*/

for(let i=0; i<available_service.length;i++){
    contenido += 
    // `<div class='tarjeta'>${available_service[i].customer}</div>`/*el ${} es para acceder a los comandos de JS y no los detecte como string*/
    `<div class="tarjeta">  
        <div class="tarjeta-contenido">
            <div class="contenedor-dato">
                <p class="titulo">Direccion</p>
                <p class="contenido">${available_service[i].addres_street}</p>
            </div>
            <div class="linea">
                <div class="contenedor-dato">
                    <p class="titulo">Fecha</p>
                    <p class="contenido">${available_service[i].date}</p>
                </div>
                <div class="contenedor-dato">
                    <p class="titulo">Hora</p>
                    <p class="contenido">${available_service[i].hour}</p>
                </div>
            </div>
            <div class="linea">
                <div class="contenedor-dato">
                    <p class="titulo">Duracion</p>
                    <p class="contenido">${available_service[i].lenght} horas</p>
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