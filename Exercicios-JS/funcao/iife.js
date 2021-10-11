// IIFE --> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// alternativa para fugir do escopo global
// cria função anônima, delimitada por parenteses 
// invoca imediatamente, com parenteses