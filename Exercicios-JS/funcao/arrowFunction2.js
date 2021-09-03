/* this, dentro do contexto de arrow function, não varia de acordo com quem está chamando */
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // this não vai variar, pois a ação foi escrita dentro do contexto.
            console.log(this.idade)
    }, 1000)
}
new Pessoa