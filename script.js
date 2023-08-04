// Arreglo respuestas correctas

let correctas = [1,1];

//Arreglo que guarda las respuestas seleccionadas

let opcion_elegida=[];

//almacena la cantidad total de respuestas correctas que el usuario seleccionó.

let cantidad_correctas=0;

//Esta función toma dos parámetros: "num_pregunta", que es el número de la pregunta y "seleccionada" que es la opción que el usuario ha elegido
//Almacena la opción seleccionada por el usuario para una pregunta específica

function respuesta(num_pregunta, seleccionada){

//operación que está asignando un valor a un elemento específico dentro del arreglo

    opcion_elegida[num_pregunta] = seleccionada.value;
}
 
//funcion que compara los arreglos para saber cuantas estuvieron correctas

function corregir(){
    cantidad_correctas = 0;
    for(i=0; i< correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}