//--------------------clase 4--------------------------
var appCinco= new Vue({
  el: '#appCinco',
  data: {
    contador: 0,
    listasDeElementos : [],
    email:'',
    listaEmails: [],/*Se crea una lista de email como data */
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
    agregarEmail: function() {
      this.listaEmails.push(this.email);
      this.email = "";//se resetea porque es bidireccional el codigo
    },/*Se crea un metodo que se llama "agrgarEmail", que agarra a la lista de emails y pushea lo que tiene email, despues se renderiza en HTML */
    limpiarListaEmails: function() {
      this.listaEmails = [];
    },
    eliminarEmail: function() {
      
    }
  }
});