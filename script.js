//--------------------clase 1--------------------

var app = new Vue({
    el: '#app',
    data: {
      message: 'Hola Vue!',
      mostrarBoton: false,
       codigoHtml: '<h2>Subtitulo de la página</h2>',
      estaChequeado: false,
    }
  });

//--------------------clase 2------------------------

var appDos = new Vue({
  el: '#appDos',
  data: {
    message: 'Hola Vue!',
    mostrarBoton: false,
    codigoHtml: '<h2>Subtitulo de la página</h2>',
    estaChequeado: false,
  }
});
/*Lanza algo despues de un tiempo determinado*/
setTimeout(() => {
  /*función que se ejecuta*/
  app.codigoHtml = '<h4>Soy el titulo 4</h4>'
  /*Aqui hacemos que después de 2 segundo cambie de h2 al h4*/
}, 2000);

setTimeout(() => {
  /*función que se ejecuta*/
  app.codigoHtml = '<h2>Subtitulo de la página</h2>'
  /*Aqui hacemos que después de 2 segundo cambie de h2 al h4*/
}, 4000);


//--------------------clase 3--------------------------

var appTres = new Vue({
  el: '#appTres',
  data: {
    contador: 0,
    listasDeElementos : [],
  }
});

//let o const
/*el metodo push, permite trabajar aunque sea con una constante no tiene porque ser una variable, porque no requiere de autoasignación*/
// const listasDeElementos = [];
// appTres.listasDeElementos.push('Argentina');
// appTres.listasDeElementos.push('Brasil');
// appTres.listasDeElementos.push('Uruguay');

appTres.listasDeElementos.push({id:0, texto: 'Argentina', aclaracion: 'Argentino', codigoArea: '+54'})
appTres.listasDeElementos.push({id:1, texto: 'Uruguay', aclaracion: 'Uruguayo', codigoArea: '+598'})
appTres.listasDeElementos.push({id:2, texto: 'Brasil', aclaracion: 'Brasileño', codigoArea: '+55'})

/**************************** REPASO ****************************/

/*Cuando se recorre con "in", se ven los indices en la consola o sea las claves (key) que estan a la izquierda y los de la derecha se llaman valor (value)*/
//FOR-IN - recorre los indices
// for(let index in appTres.listasDeElementos) {
//   console.log(index, appTres.listasDeElementos[index]);
// }

//Cuando se recorre con of, se ven los items o sea los valores de la cuya lista
//FOR-OF - recorre los valores
// for(let item of appTres.listasDeElementos) {
//   console.log(item);
// }

//FOR - comun
// for(let i; i < appTres.listasDeElementos.length; i++ ){
//   console.log(i, appTres.listasDeElementos[i]);
// }

/**************************** REPASO ****************************/

/**************************** REPASO ****************************/
/*Función MAP
 permite recorrer el item de esa lista y con ese item se genera un nuevo item, es como que permite mdificar la lista es una función de orden superior que funciona cuando se le pasa una funcion colbac - lamda
*/

appTres.listasDeElementos = appTres.listasDeElementos.map(item => {
  return({...item, enable: (item.texto === 'Brasil') ? false : true });
}) 