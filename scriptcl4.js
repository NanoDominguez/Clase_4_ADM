//--------------------clase 4--------------------------
var appCuatro = new Vue({
  el: '#appCuatro',
  data: {
    contador: 0,
    listasDeElementos : [],
    email:'',
  },
  methods: {
    //agregarTexto: function() {...},
    //agregarTitulo: function() {...},
    mostrarTextoEnConsola: function() {
      console.log("Texto en consola");
    },
    enviar: function() {
       alert("Estamos enviando");
    },
  }
});