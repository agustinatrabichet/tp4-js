/*Ejercicio 1*/
const router = {
    modelo: "AX6000",
    marca: "TP-Link",
    puertos: 8,
    velocidad: 6000,
    soportaWifi: true
};
console.log("Objeto literal para dispositivo de red:",router)

/*Ejercicio 2*/
const dispositivos = [
    { tipo: "Router", marca: "Cisco", modelo: "RV340", precio: 1300 },
    { tipo: "Switch", marca: "Netgear", modelo: "GS108", precio: 100 },
    { tipo: "Firewall", marca: "Fortinet", modelo: "FortiGate 60E", precio: 900 },
    { tipo: "Access Point", marca: "Ubiquiti", modelo: "UniFi AC Lite", precio: 120 },
    { tipo: "Router", marca: "TP-Link", modelo: "Archer AX50", precio: 180 }
];
console.log("Array de dispositivos de red:",dispositivos)

/*Ejercicio 3*/
const ciscoDevices = dispositivos.filter(dispositivo => dispositivo.marca === "Cisco");
console.log("Filtrado por marca Cisco:", ciscoDevices);

/*Ejercicio 4*/
const servidores = [ 
    { nombre: "Servidor Web", ip: "192.168.1.10", sistema: "Linux" }, 
    { nombre: "Servidor de Base de Datos", ip: "192.168.1.11", sistema: "Windows" }, 
    { nombre: "Servidor de Correo", ip: "192.168.1.12", sistema: "Linux" }, 
    { nombre: "Servidor DNS", ip: "192.168.1.13", sistema: "Linux" }, 
    { nombre: "Servidor de Archivos", ip: "192.168.1.14", sistema: "Windows" } 
];
console.log(servidores)

const direccionesIP = servidores.map(servidor => servidor.ip);
console.log("Mapeo de direcciones ip:", direccionesIP);

/*Ejercicio 5*/
const paquetesDatos = [ 
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", tamaño: 1200, prioridad: 3 }, 
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", tamaño: 800, prioridad: 1 }, 
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", tamaño: 1500, prioridad: 5 }, 
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", tamaño: 950, prioridad: 2 }, 
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", tamaño: 2000, prioridad: 4 } 
];
console.log("Paquetes de datos:", paquetesDatos)

const paquetesFiltradosOrdenados = paquetesDatos
.filter(paquete => paquete.tamaño > 1000)
.sort((a, b) => b.prioridad - a.prioridad);
console.log(" Paquetes de datos con tamaño mayor a 1000 bytes ordenados de mayor a menor:", paquetesFiltradosOrdenados);

/*Ejercicio 6*/
const traficoRed = { 
    "08:00": 1250,  // MB transferidos 
    "09:00": 1870, 
    "10:00": 2100, 
    "11:00": 1950, 
    "12:00": 1600, 
    "13:00": 1300, 
    "14:00": 1700,
    "15:00": 2200, 
    "16:00": 1800, 
    "17:00": 1500 
}; 
console.log("Objeto con estadísticas de tráfico de red por hora:", traficoRed)

// Calcula el total de datos transferidos 
const totalTransferido = Object.values(traficoRed).reduce((acc, val) => acc + val, 0);
// Encuentra la hora con mayor tráfico 
const horaMayorTrafico = Object.entries(traficoRed).reduce((max, actual) => actual[1] > max[1] ? actual : max)[0];
console.log("Total de datos transferidos(Mb):", totalTransferido);
console.log("Hora con mayor tráfico:", horaMayorTrafico);

/*Ejercicio 7*/
const conexiones = [ 
    { id: 1, origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP" }, 
    { id: 2, origen: "192.168.1.7", destino: "192.168.1.12", protocolo: "FTP" }, 
    { id: 3, origen: "192.168.1.3", destino: "192.168.1.11", protocolo: "SSH" }, 
    { id: 4, origen: "192.168.1.8", destino: "192.168.1.14", protocolo: "HTTP" }, 
    { id: 5, origen: "192.168.1.2", destino: "192.168.1.13", protocolo: "HTTPS" }, 
    { id: 6, origen: "192.168.1.6", destino: "192.168.1.10", protocolo: "FTP" }, 
    { id: 7, origen: "192.168.1.9", destino: "192.168.1.15", protocolo: "SSH" }, 
    { id: 8, origen: "192.168.1.4", destino: "192.168.1.11", protocolo: "HTTP" } 
]; 
console.log("Array de conexiones de red:",conexiones);

 // Crea un objeto para contar las conexiones por protocolo 
const conexionesPorProtocolo = {};
// Tu código aquí (recorre el array y cuenta las conexiones) 
conexiones.forEach(({ protocolo }) => {
    conexionesPorProtocolo[protocolo] = (conexionesPorProtocolo[protocolo] || 0) + 1;
});
console.log("Conexiones por protocolo:", conexionesPorProtocolo);

/*Ejercicio 8*//*revisar*/
const alertas = [
    { nivel: "alto", mensaje: "Intrusión detectada", ip: "192.168.1.5" },
    { nivel: "medio", mensaje: "Puerto abierto sospechoso", ip: "192.168.1.7" },
    { nivel: "alto", mensaje: "Ataque de fuerza bruta", ip: "192.168.1.10" }
];

const mensajesAdministrador = alertas
    .filter(alerta => alerta.nivel === "alto")
    .map(alerta => `ALERTA ALTA: ${alerta.mensaje} en ${alerta.ip}`);
console.log("Alerta en nivel alto:", mensajesAdministrador);

/*Ejercicio 9*/
const dispositivos9 = [  
    { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" },
    { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" },
    { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" },
    { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" }
]; 

const conexionesActivas = [ 
    { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 }, 
    { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 }, 
    { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 } 
]; 

// Crea un informe que combine la información de dispositivos y conexiones 
const informeActividad = conexionesActivas.map(conexion => { 
// Encuentra los dispositivos de origen y destino 
    const dispositivoOrigen = dispositivos9.find(d => d.ip === conexion.origen);
    const dispositivoDestino = dispositivos9.find(d => d.ip === conexion.destino);

// Retorna un objeto con la información combinada 
    return { 
    origen: dispositivoOrigen.nombre,
    destino: dispositivoDestino.nombre,
    protocolo: conexion.protocolo,
    bytes: conexion.bytes,
    tipoOrigen: dispositivoOrigen.tipo,
    tipoDestino: dispositivoDestino.tipo
    }; 
}); 
console.log("Informe de actividad de red:", informeActividad);

/*Ejercicio 10*/    
// Cuenta el número de conexiones por nodo 
const topologiaRed = {  
    nodos: [ 
    { id: "A", tipo: "Router", ubicacion: "Planta 1" }, 
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" }, 
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" }, 
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" }, 
    { id: "E", tipo: "Router", ubicacion: "Planta 3" } 
    ], 
    conexiones: [ 
    { origen: "A", destino: "B", ancho_banda: 1000 }, 
    { origen: "A", destino: "C", ancho_banda: 1000 }, 
    { origen: "B", destino: "C", ancho_banda: 100 }, 
    { origen: "B", destino: "D", ancho_banda: 100 }, 
    { origen: "C", destino: "D", ancho_banda: 100 }, 
    { origen: "C", destino: "E", ancho_banda: 1000 }, 
    { origen: "D", destino: "E", ancho_banda: 1000 } 
    ] 
}; 

// Cuenta el número de conexiones por nodo 
const conexionesPorNodo = {}; 
    topologiaRed.nodos.forEach(nodo => { 
    conexionesPorNodo[nodo.id] = 0; 
}); 

// Contar conexiones para cada nodo
topologiaRed.conexiones.forEach(conexion => {
    conexionesPorNodo[conexion.origen]++;
    conexionesPorNodo[conexion.destino]++;
});

// Ordenar de mayor a menor cantidad de conexiones
const nodosOrdenados = Object.entries(conexionesPorNodo)
    .sort((a, b) => b[1] - a[1]);

// Sugerencias de optimización
const sugerencias = [];
nodosOrdenados.forEach(([id, cantidad]) => {
    if (cantidad > 2) {
        const nodo = topologiaRed.nodos.find(n => n.id === id);
        sugerencias.push(`El nodo ${id} (${nodo.tipo} en ${nodo.ubicacion}) tiene ${cantidad} conexiones. Considerar ampliar su ancho de banda.`);
    }
});

console.log("Conexiones por nodo:", conexionesPorNodo); 
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados); 
console.log("Sugerencias de optimización:", sugerencias);