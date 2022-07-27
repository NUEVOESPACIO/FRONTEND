var eventoControlado = false;

window.onload = function() { 

document.onkeydown = mostrarInformacionTecla;
document.onkeyup = chequeoFin; 

}


function mostrarInformacionTecla(evObject) {

               

               const myElement1 = document.getElementById("uno"); 
               const myElement2 = document.getElementById("dos"); 

            
               var teclaPulsada = evObject.keyCode;
               var compar=myElement1.textContent.charAt(varglobal);
               if (compar.charCodeAt(0)===teclaPulsada) {


                var spart="-".repeat(myElement1.textContent.length-varglobal-1);
                var ppart=myElement1.textContent.substring(0,varglobal+1);
                myElement2.textContent=ppart+spart;
                varglobal++;
                 }
 

           

};



function chequeoFin() {

    const myElement1 = document.getElementById("uno"); 
    const myElement2 = document.getElementById("dos"); 

    if (varglobal===myElement1.textContent.length) {
        
        varglobal=0;
        cargar();
    }


}


