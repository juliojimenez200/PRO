class Cadenas{
                regresar(){
                    window.history.back()
                }
    
                    cade(){
                    console.log("si fUNCIONO")
                }
                vocales(){
                  let frase = document.getElementById("datos").value
                    let cv=0,cc=0
                    for(let i=0;i < frase.length;i++){
                        if (frase[i]== 'a' || frase[i]== 'e' || frase[i]== 'i' || frase[i]== 'o' || frase[i]== 'u' ) {
                           cv=cv+1
                        }
                        if (frase[i]>= 'a' && frase[i]<= 'z' ) {
                           cc=cc+1
                        }
                    }
                    console.table({cv,cc})
                    let resp = document.getElementById("resp")
                    resp.textContent=`cantidad de vocales:= ${cv} cantidad de consonantes:= ${cc}`
            
               }
               Especiales() {
                let frase = document.getElementById("datos").value;
          
                let contadorComas = 0;
                let contadorPuntos = 0;
                let contadorPuntoComa = 0;
                let contadorDosPuntos = 0;
          
                for (let i = 0; i < frase.length; i++) {
                  let caracter = frase.charAt(i);
                  if (caracter === ",") {
                    contadorComas++;
                  } else if (caracter === ".") {
                    contadorPuntos++;
                  } else if (caracter === ";") {
                    contadorPuntoComa++;
                  } else if (caracter === ":") {
                    contadorDosPuntos++;
                  }
                }
          
                document.getElementById("resp").textContent = `Comas: ${contadorComas}, Puntos: ${contadorPuntos}, Punto y Coma: ${contadorPuntoComa}, Dos Puntos: ${contadorDosPuntos}`;
              }
              lindromo() {
                let frase = document.getElementById("datos").value;
          
                
                let fraseSinEspacios = frase.replace(/\s/g, '').toLowerCase();
          
                
                let esPalindromo = true;
                for (let i = 0; i < fraseSinEspacios.length / 2; i++) {
                  if (fraseSinEspacios.charAt(i) !== fraseSinEspacios.charAt(fraseSinEspacios.length - 1 - i)) {
                    esPalindromo = false;
                    break;
                  }
                }
          
                if (esPalindromo) {
                  document.getElementById("resp").textContent = "La frase si se lee igual";
                } else {
                  document.getElementById("resp").textContent = "La frase no se lee igual.";
                }
              }
              contarPalabras() {
                let frase = document.getElementById("datos").value;
                let palabras = frase.trim().split(/\s+/);
                 let cantidadPalabras = palabras.length;
          
                document.getElementById("resp").textContent = "Cantidad de palabras: " + cantidadPalabras;
              }
              invertir() {
                let frase = document.getElementById("datos").value;
          
                let fraseInvertida = "";
                for (let i = frase.length - 1; i >= 0; i--) {
                  fraseInvertida += frase.charAt(i);
                }
          
                document.getElementById("resp").textContent = "Frase invertida: " + fraseInvertida;
              }
              concatenar() {
                let frase1 = document.getElementById("datos").value;
                let frase2 = document.getElementById("datos2").value;
          
                let fraseConcatenada = frase1 + " " + frase2;
          
                document.getElementById("resp").textContent = "Frase concatenada: " + fraseConcatenada;
              }
              caracter() {
                let frase = document.getElementById("datos").value;
                let caracterABuscar = document.getElementById("datos2").value;
          
                // Utilizar indexOf() para encontrar la posición del carácter en la frase
                let posicion = frase.indexOf(caracterABuscar);
          
                if (posicion !== -1) {
                  document.getElementById("resp").textContent = `La posición del carácter "${caracterABuscar}" en la frase es: ${posicion}`;
                } else {
                  document.getElementById("resp").textContent = `El carácter "${caracterABuscar}" no se encuentra en la frase.`;
                }
                
                }
                Subcadena() {
                    let frase = document.getElementById("datos").value;
                    let subcadenaABuscar = document.getElementById("datos2").value;
                         let posicion = frase.indexOf(subcadenaABuscar);
              
                    if (posicion !== -1) {
                      document.getElementById("resp").textContent = `La posición de la subcadena "${subcadenaABuscar}" en la frase es: ${posicion}`;
                    } else {
                      document.getElementById("resp").textContent = `La subcadena "${subcadenaABuscar}" no se encuentra en la frase.`;
                    }
                  }
                  insertarSubcadena() {
                    let frase = document.getElementById("datos").value;
                    let subcadenaAInsertar = document.getElementById("datos2").value;
                    let posicionIndicada = parseInt(document.getElementById("datos3").value);
              
                   
                    if (posicionIndicada < 0 || posicionIndicada > frase.length) {
                      document.getElementById("resp").textContent = "Error: La posición indicada es inválida.";
                      return;
                    }
              
                    
                    let parteAntes = frase.slice(0, posicionIndicada);
                    let parteDespues = frase.slice(posicionIndicada);
                    let fraseInsertada = parteAntes + subcadenaAInsertar + parteDespues;
              
                    document.getElementById("resp").textContent = "Frase con subcadena insertada: " + fraseInsertada;
                  }
                  eliminarSubcadena() {
                    let frase = document.getElementById("datos").value;
                    let subcadenaAEliminar = document.getElementById("datos2").value;
              
                    
                    let posicion = frase.indexOf(subcadenaAEliminar);
              
                    if (posicion !== -1) {
                  
                      let parteAntes = frase.slice(0, posicion);
                      let parteDespues = frase.slice(posicion + subcadenaAEliminar.length);
              
                    
                      let fraseSinSubcadena = parteAntes + parteDespues;
              
                      document.getElementById("resp").textContent = "Frase sin subcadena: " + fraseSinSubcadena;
                    } else {
                      document.getElementById("resp").textContent = `La subcadena "${subcadenaAEliminar}" no se encuentra en la frase.`;
                    }
                  }
                  convertirAArreglo() {
                    let frase = document.getElementById("datos").value;
                    let caracterSeparador = document.getElementById("datos2").value;
                      let arreglo = frase.split(caracterSeparador);
              
                    document.getElementById("resp").textContent = "Arreglo: " + JSON.stringify(arreglo);
                  }
                  calcular() {
                    let frase = document.getElementById("datos").value;
                    let sumaDigitos = 0;
              
                 
                    for (let i = 0; i < frase.length; i++) {
                      let caracter = frase.charAt(i);
              
                    
                      if (!isNaN(caracter)) {
                        
                        sumaDigitos += parseInt(caracter);
                      }
                    }
              
                    document.getElementById("resp").textContent = "Suma de dígitos: " + sumaDigitos;
                  }






            }



const cadenas=new Cadenas()
cadenas.cade()
