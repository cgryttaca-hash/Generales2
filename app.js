//==============================================
// DASHBOARD TÁCTICA
// Datos de demostración
//==============================================

const kpiTotal = document.getElementById("kpiTotal");
const kpiConfirmadas = document.getElementById("kpiConfirmadas");
const kpiPendientes = document.getElementById("kpiPendientes");
const kpiCanceladas = document.getElementById("kpiCanceladas");

const kpiCumplimiento = document.getElementById("kpiCumplimiento");

const barra = document.getElementById("barraCumplimiento");

const porcentaje = document.getElementById("porcentajeCumplimiento");

const contador = document.getElementById("contador");

const buscar = document.getElementById("buscar");

const tbody = document.getElementById("tbody");


//==============================================
// VALORES INICIALES
//==============================================

let total = 68;

let confirmadas = 39;

let pendientes = 18;

let canceladas = 11;


//==============================================
// ACTUALIZAR DASHBOARD
//==============================================

function actualizarKPIs(){

    let cumplimiento = ((confirmadas/total)*100).toFixed(1);

    kpiTotal.textContent = total;

    kpiConfirmadas.textContent = confirmadas;

    kpiPendientes.textContent = pendientes;

    kpiCanceladas.textContent = canceladas;

    kpiCumplimiento.textContent = cumplimiento+"%";

    porcentaje.textContent = cumplimiento+"%";

    barra.style.width = cumplimiento+"%";

    contador.textContent = total+" registros";

}

actualizarKPIs();

//==============================================
// EFECTO EN LAS FILAS
//==============================================

const filas=tbody.querySelectorAll("tr");

filas.forEach(fila=>{

    fila.addEventListener("mouseenter",()=>{

        fila.style.transform="scale(1.01)";
        fila.style.transition=".2s";

    });

    fila.addEventListener("mouseleave",()=>{

        fila.style.transform="scale(1)";

    });

});

//=========================================
// NUEVAS COTIZACIONES (DEMO)
//=========================================

const empresas = [
"Bancolombia",
"Grupo SURA",
"Grupo Nutresa",
"Ecopetrol",
"EPM",
"Cementos Argos",
"ISA",
"Celsia",
"Alpina",
"Bavaria",
"Postobón",
"Claro Colombia",
"Movistar",
"Tigo",
"Davivienda",
"BBVA",
"Banco de Bogotá",
"Colpatria",
"Grupo Éxito",
"Homecenter",
"Arturo Calle",
"Juan Valdez",
"Crepes & Waffles",
"Rappi",
"Servientrega",
"Coordinadora",
"Colombina",
"Tecnoglass",
"Corona",
"Haceb",
"Compensar",
"Cafam",
"Colsubsidio",
"Allianz",
"PwC",
"EY",
"Terpel"
];

const ciudades = [
"Bogotá",
"Bogotá",
"Bogotá",
"Bogotá",
"Bogotá",
"Bogotá",
"Bogotá",
"Bogotá"
];

const salones = [
"Salón 1+2",
"Tercer piso productividad",
"Salón 3",
"Salón 2",
"Salón 1",
"Salón 1",
"Salón Completo"
];

const estados = [
"Confirmada",
"Pendiente",
"Cancelada"
];

function dinero(){

    return "$"+(Math.floor(Math.random()*25000000)+3000000).toLocaleString("es-CO");

}

function fecha(){

    const d=Math.floor(Math.random()*28)+1;

    return d.toString().padStart(2,"0")+"/07/2026";

}

function agregarCotizacion(){

    if(tbody.rows.length>=80) return;

    const empresa=empresas[Math.floor(Math.random()*empresas.length)];

    const ciudad=ciudades[Math.floor(Math.random()*ciudades.length)];

    const salon=salones[Math.floor(Math.random()*salones.length)];

    const personas=Math.floor(Math.random()*250)+40;

    const valor=dinero();

    const estado=estados[Math.floor(Math.random()*estados.length)];

    const clase=estado.toLowerCase();

    const fila=document.createElement("tr");

    fila.innerHTML=`

<td>${fecha()}</td>

<td>${empresa}</td>

<td>${salon}</td>

<td>${ciudad}</td>

<td>${personas}</td>

<td>${valor}</td>

<td><span class="estado ${clase}">${estado}</span></td>

`;

    tbody.prepend(fila);

}

setInterval(agregarCotizacion,8000);

//=========================================
// RELOJ
//=========================================

const reloj=document.createElement("div");

reloj.style.position="fixed";

reloj.style.right="30px";

reloj.style.bottom="30px";

reloj.style.background="#2563eb";

reloj.style.color="white";

reloj.style.padding="15px 25px";

reloj.style.borderRadius="15px";

reloj.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";

reloj.style.fontWeight="600";

document.body.appendChild(reloj);

setInterval(()=>{

reloj.innerHTML=`

<i class="fa-solid fa-clock"></i>

${new Date().toLocaleTimeString("es-CO")}

`;

},1000);

//=============================================
// CONTADOR ANIMADO
//=============================================

function animarNumero(id,valor){

    let actual=0;

    const elemento=document.getElementById(id);

    const timer=setInterval(()=>{

        actual++;

        elemento.innerText=actual;

        if(actual>=valor){

            clearInterval(timer);

        }

    },20);

}

window.onload=()=>{

animarNumero("kpiTotal",68);

animarNumero("kpiConfirmadas",39);

animarNumero("kpiPendientes",18);

animarNumero("kpiCanceladas",11);

}