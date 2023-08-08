// Variable global y generador de array de flourescentes, ordenado de menor a mayor //
var randTubos;
function rand() {
  randTubos = Array.from({length: 4}, () => Math.floor(Math.random() * (200 - 100 + 1) + 100));
  randTubos.sort();
}

//Solucion A//
function examenA() {
  // Declarar variables para contar tuvos quemados, y cambios de tuvos (cada 2 tubos rotos)//
  var countTubos = 0;
  var countCambios = 0;

  // Abrir for loop para 4 itineraciones de la simulacion, una por cada porta tubos//
  for (i = 1; i <= 4; i++) {

    //abrir for loop para las 2700 horas totales que se calcula segun lo descripto//
    for (timeline = 0; timeline < 2700;) {

      //Llamar funcion rand para generar un set de tubos y tomo los primeros dos valores//
      rand();
      var tuboUno = randTubos[0];
      var tuboDos = randTubos[1];

      //Si el valor del segundo tubo sumado al timeline no excede 2700, se suman 2 quemados y 4 cambios//
      //else if, si el valor del primero sumado al timeline no excede 2700 se suma 1 quemado (seria el ultimo caso)//
      //else, si el valor el primero sumado al timeline excede los 2700, no se suma nada, se agrega el valor, y se sale del for loop//

      if ((timeline + tuboDos) < 2700){
        timeline = timeline + tuboDos;
        countTubos = countTubos + 2;
        countCambios = countCambios + 4;
      } else if ((timeline + tuboUno) < 2700) {
        timeline = timeline + tuboUno;
        countTubos++
      } else {
        timeline = timeline + tuboUno;
      }
    }
  }

  //Calcular gastos e imprimir resultados en log//
  var gastoA = countCambios * 7;
  console.log('Flourescentes Rotos =', countTubos);
  console.log('Flourescentes Cambiados =', countCambios);
  console.log('Gasto Total = $', gastoA);
}

//Solucion B//
function examenB() {

  // Declarar variables para contar tuvos quemados, y cambios de tuvos (cada 2 tubos rotos)//
  var tubosRotos = 0;
  var cambiosTubos = 0;

  // Abrir for loop para 4 itineraciones de la simulacion, una por cada porta tubos//
  for (i = 1; i <= 4; i++) {

    //abrir for loop para las 2700 horas totales que se calcula segun lo descripto//
    for (timeline = 0; timeline < 2700;) {

      //Llamar funcion rand para generar numeros y tomar los dos primeros valores//
      rand();
      var tuboA = randTubos[0];
      var tuboB = randTubos[1];

      //Si, la suma del valor tuboA mas el timeline actual es menor a 2700, sumar 1 a tubosRotos//
      //Else, sumar tuboA a timeline
      if ((timeline + tuboA) < 2700) {
        timeline = timeline + tuboA;
        tubosRotos++;
      } else {
       timeline = timeline + tuboA;
      }

      //Si el valor actual del timeline mas la diferencia del valor de tubo B y A es menor a 2700, sumar 1 a tubos rotos y 4 a cambios//
      //Else sumar la diferencia de B y A al timeline y cerrar el for loop, seria el ultimo ciclo//
      if ((timeline + (tuboB - tuboA)) < 2700) {
        timeline = timeline + (tuboB - tuboA);
        tubosRotos++;
        cambiosTubos = cambiosTubos + 4;
      } else {
        timeline = timeline + (tuboB - tuboA);
      }
    }
  }

  //Calcular gastos e imprimir resultados en Log//
  var gastoB = cambiosTubos * 7;
  console.log('Flourescentes Rotos =', tubosRotos);
  console.log('Flourescentes Cambiados =', cambiosTubos);
  console.log('Gasto Total = $', gastoB);
}
