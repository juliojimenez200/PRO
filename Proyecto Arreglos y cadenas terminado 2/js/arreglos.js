class Arreglos{
         Arreglos(){
               console.log("hola si funciono")
            }
            regresar(){
                  window.history.back()
            }
            mayor(){
                  let datos= document.getElementById("datos").value
                   let numeros = datos.split(";")
                   let may=parseInt(numeros[0]) 
                   for(let i=1;i < numeros.length;i++){
                      if (may < parseInt(numeros[i])){
                        may = parseInt(numeros[i])
                      } 
                   }
                   let resp = document.getElementById("resp")
                   resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
                }
                menor(){
                  let datos=document.getElementById("datos").value
                  let mun= datos.split(";")
                  let arr=parseInt(mun[0])
                  for(let i= 1;i<mun.length;i++){
                        if(arr >  parseInt(mun[i])){
                              arr=parseInt(mun[i])
                           }
                     let resp=document.getElementById("resp")     
                     resp.textContent= `El menor del arreglo[${mun}] es= ${arr}`
                   }
                  }
                  promedio(){
                        let datos = document.getElementById("datos").value;
                        let numeros = datos.split(";").map(Number);
                         let suma = 0;
                        for (let i = 0; i < numeros.length; i++) {
                          suma += numeros[i];
    }
                          let promedio = suma / numeros.length;

                          let resp = document.getElementById("resp");
                          resp.textContent = `El promedio del arreglo [${numeros}] es: ${promedio.toFixed(2)}`
                  }
                  nombreslrevez(){
                    let nombres = document.getElementById("datos").value;
                    let separados = nombres.split(";");
                    let alReves = [];
                
                    for (let i = 0; i < separados.length; i++) {
                        let nombre = separados[i];
                        let nombreInvertido = "";
                
                        for (let j = nombre.length - 1; j >= 0; j--) {
                            nombreInvertido += nombre[j];
                        }
                
                        alReves.push(nombreInvertido);
                    }
                
                    let resp = document.getElementById("resp");
                    resp.textContent = `Nombres al revés: ${alReves.join(', ')}`;
                  }
                  buscarElemento() {
                        let datos = document.getElementById("datos").value;
                        let arreglo = datos.split(";").map(Number); 
                    
                        let buscado = parseInt(prompt("Ingresa el elemento que deseas buscar:"));
                    
                        let posicion = arreglo.indexOf(buscado);
                    
                        if (posicion !== -1) {
                            let resp = document.getElementById("resp");
                            resp.textContent = `El elemento ${buscado} se encuentra en la posición ${posicion} del arreglo.`;
                        } else {
                            let resp = document.getElementById("resp");
                            resp.textContent = `El elemento ${buscado} no se encuentra en el arreglo.`;
                        }
                    }
                    

                   
                   
                     generarArreglo() {
                         let arrNumeros = [];
                        for (let i = 0; i < 100; i++) {
                          arrNumeros.push(Math.floor(Math.random() * 100));
                        }
                        console.log("Arreglo generado con éxito:", arrNumeros);
                      
                        
                        let adivinar = parseInt(document.getElementById("datos").value);
                      
                       
                        let resp = document.getElementById("resp");
                        if (!isNaN(adivinar) && arrNumeros.includes(adivinar)) {
                          resp.textContent = "¡Adivinaste! El número está en el arreglo.";
                        } else {
                          resp.textContent = "Error, no adivinaste. El número no está en el arreglo.";
                        }
                      }
                      insertar(){
                        let datos=document.getElementById("arreglo").value
                        let numeros=datos.split(";")
                        let num=document.getElementById("posicion").value
                        num=parseInt(num)
                        let num2=document.getElementById("dato").value
                        num2=parseInt(num2)
                        if (!isNaN(num2) && !isNaN(num)) {
                          numeros.splice(num, 0, num2);
                          document.getElementById("resp").textContent = `El numero ${num2} se arrego al arreglo [${numeros}]`
                        } else {
                          document.getElementById("resp").textContent = "Error: Ingresa números válidos para el dato y la posición.";
                        }
                    
                      }
                      contarPrimos() {
                        let arr1 = document.getElementById("datos").value
                        let arr=arr1.split(";").map(Number)
                        let canPrimos = 0;
                  
                        for (let i = 0; i < arr.length; i++) {
                          let numero = arr[i];
                          if (numero > 1) {
                            let esPrimo = true;
                            for (let j = 2; j <= Math.sqrt(numero); j++) {
                              if (numero % j === 0) {
                                esPrimo = false;
                                break;
                              }
                            }
                            if (esPrimo) {
                              canPrimos++;
                            }
                          }
                        }
                  
                        document.getElementById("resp").textContent = "Cantidad de números primos: " + canPrimos;
                      }
                      eliminarDato() {
                        let arr1 = document.getElementById("dato").value
                        let arr= arr1.split(";").map(Number)
                        let posicionAEliminar = document.getElementById("posicion").value;
                                      posicionAEliminar=parseInt(posicionAEliminar)
                       
                        if (!isNaN(posicionAEliminar) && posicionAEliminar >= 0 && posicionAEliminar < arr.length) {
                          arr.splice(posicionAEliminar, 1);
                          document.getElementById("resp").textContent = "Arreglo después de la eliminación: " + arr;
                        } else {
                          document.getElementById("resp").textContent = "Error: Ingresa una posición válida dentro del arreglo.";
                        }
                      }
                      Base10() {
                        let Bin = document.getElementById("dato").value;
                        let decimal = 0;
                        for (let i = 0; i < Bin.length; i++) {
                          let digito = parseInt(Bin.charAt(i));
                          if (isNaN(digito) || digito !== 0 && digito !== 1) {
                            document.getElementById("resp").textContent = "Error: Ingresa un número binario válido (solo 0 y 1).";
                            return;
                          }
                          decimal += digito * Math.pow(2,Bin.length - 1 - i);
                        }
                  
                        document.getElementById("resp").textContent = "Número en base 10: " + decimal + ", Número en base 2: " + Bin;
                      }                  
                                          
                      calcularPromedio() {
                        let empleados = [];
                        let nombre = document.getElementById("nombreEmpleado").value;
                        let valorHora = parseInt(document.getElementById("valorHora").value);
                        let numeroHoras = parseInt(document.getElementById("numeroHoras").value);
                  
                        if (nombre && !isNaN(valorHora) && !isNaN(numeroHoras)) {
                          empleados.push({ nombre: nombre, vh: valorHora, nh: numeroHoras });
                          document.getElementById("nombreEmpleado").value = "";
                          document.getElementById("valorHora").value = "";
                          document.getElementById("numeroHoras").value = "";
                        }
                  
                        if (empleados.length === 0) {
                          document.getElementById("resp").textContent = "Agrega al menos un empleado.";
                        } else {
                          let totalSueldos = 0;
                          for (let i = 0; i < empleados.length; i++) {
                            totalSueldos += empleados[i].vh * empleados[i].nh;
                          }
                  
                          let promedioSueldos = totalSueldos / empleados.length;
                          document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);
                        }
                      }
                      convertirABase10() {
                        let Bin = document.getElementById("dato").value;
                  
                        let longitud = Bin.length;
                        let decimal = 0;
                  
                        for (let i = 0; i < longitud; i++) {
                          let digito = parseInt(Bin.charAt(i));
                          if (isNaN(digito) || digito !== 0 && digito !== 1) {
                            document.getElementById("resp").textContent = "Error: Ingresa un número binario válido (solo 0 y 1).";
                            return;
                          }
                          decimal += digito * Math.pow(2, longitud - 1 - i);
                        }
                  
                        document.getElementById("resp").textContent = "Respuesta en base 10: " + decimal;
                      }
                      
                      acuDivisores(num){
                        let acu=0
                        for(let c=1;c<num;c++){
                           if (num%c==0){
                               acu=acu+c
                           }
                        }
                        return acu 
                     }
                     sumadivi(){
                     
                       let datos= document.getElementById("datos").value
                       let numeros = datos.split(";") 
                       let acu,num=0,resultado=""
                     
                       for(let i=0;i < numeros.length;i++){
                          
                           num=parseInt(numeros[i])
                           acu=this.acuDivisores(num)
                           resultado=resultado+acu+"|"    
                       }
                       let resp = document.getElementById("resp")
                       resp.textContent=`La suma de los divisores del arreglo[${numeros}] son= ${resultado}`
                       
                     }
                     perfectos(){
                      
                       let datos= document.getElementById("datos").value
                       let numeros = datos.split(";") 
                       let acu,num=0,resultado=""
                      
                       for(let i=0;i < numeros.length;i++){
                          
                           num=parseInt(numeros[i])
                           acu=this.acuDivisores(num)
                           if (acu==num){
                              resultado=resultado+num+"|"    
                           }
                        }
                       let resp = document.getElementById("resp")
                       resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= ${resultado}`
                   
                     }
                      
                       arreglodeREP(){
  
                              let num1=document.getElementById("num1").value
                               let x= num1.split(";")
                             let num2=document.getElementById("num2").value
                              let c=0
                               for(let i=0;i<x.length;i++){
                                  if (x[i]===num2)
                               c++;
                        }
                 
                   let resp=document.getElementById("resp")
                   resp.textContent=`el numero ${num2} se repite ${c}`
              
        }
        calcular() {
          let cantidad =document.getElementById("datos").value
          cantidad = parseFloat(cantidad);
          let vueltofinal=parseInt(cantidad)
          let cantidaddecimal=Math.round((cantidad%1)*100)
          const billetesMonedas = [50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
          let respuesta = "";
          let respuestaFormatoEspecial = "";
      
          for (let i = 0; i < billetesMonedas.length; i++) {
            const billeteMoneda = billetesMonedas[i];
            let contador = 0;
      
            while (vueltofinal >= billeteMoneda) {
              contador++;
              vueltofinal-= billeteMoneda;
            }
      
            if (contador > 0) {
              if (billeteMoneda >= 1) {
                respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billeteMoneda}, `;
              }
            }
          }
      
          respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
          document.getElementById("resp").textContent = `Cambio: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
                      
                      
                    
                    































                        

















        }

                  }
const arr=new Arreglos()
arr.Arreglos()
