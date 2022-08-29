const c = [10, 7, 9, 8]
console.log(c)
console.log(typeof c)

// destructuring
const [a, , b] = c
console.log(a)
console.log(typeof a)
console.log(b)

c[4] = 11

const [n1, , n3, , n5, n6 = 0] = c
console.log(n1, n3, n5, n6)

const arr = [n1, n3, n5]
console.log(arr)