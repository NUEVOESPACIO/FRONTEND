var varglobal=0;

function cargar() {

    // Referencia lo dos elementos DOM con que trabajaremos.-
    const myElement1 = document.getElementById("uno");  
    const myElement2 = document.getElementById("dos");       
    const myElement4 = document.getElementById("foto");  
    
    // Define las Silabas y elije al azar una de ellas.-
    var silabas = ["ANTEOJOS","ARBOL","AUTO","AVION","BARCO","CAMA","CAMPERA","CARNE", "CASA","CELULAR","COLITA","CORAZON","CUADERNO","ESCALERA","ESCOBA","ESTRELLA","FIDEOS","FLOR","GOMA","JUGO","LAMPARA","LAPIZ","LIBRO","LUNA","MAR","MARIPOSA","MATE","MEDIALUNAS","MEDIAS","MESA","MOCHILA","MOTO","PAJARO","PANTALON","PATO","PEINE","PELOTA","PERRO","PILETA","PIZZA","PLATO","PUERTA","RIO","SALAME","SILLA","SILLON","SOL","TELEVISOR","VASO","VENTANA"];
    var poner=silabas[Math.floor(Math.random()*silabas.length)];    
    
    // Coloca en my Element1 el valor poner y finalmente quita el foco del boton
    myElement1.textContent=poner;
    myElement2.textContent="-".repeat(poner.length);
    
    myElement4.src="img/"+myElement1.textContent+".jpg";
  
    

    // Establece valores de EtapaJuego y de Caracter a Esperar para que los maneje el codigo d esperar.js
    var varglobal=0;
 
    
}

