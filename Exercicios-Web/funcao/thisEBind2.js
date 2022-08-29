 function pessoa() {
     this.idade = 0 // cria atributo

     const self = this // coloca this numa constante, caso não use o .bind(), para acessar os atributos
     setInterval(function() { // setInterval(param1, tempo)
         self.idade++
             console.log(self.idade)
     } /* .bind(this) */ , 1000)
 }

 new pessoa