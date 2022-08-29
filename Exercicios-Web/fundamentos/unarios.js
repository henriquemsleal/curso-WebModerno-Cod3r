let [n1, n2] = [1, 2]
console.log(typeof n1)
console.log(typeof n2)

// ++ incrementa. -- decrementa.
n1++ // ou
++n1 // forma com prioridade (ordem de precedência)
console.log(n1)
n2-- // ou
--n2 // forma com prioridade (ordem de precedência)
console.log(n2)

n1 -= 2
n2 += 2
console.log(n1, n2)
console.log(++n1 === n2--) // true, porque fez a comparação antes do decremento
console.log(n1 === n2)