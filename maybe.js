const Just = a => ({ value: a, type: 'just' })
const Nothing = a => ({ value: a, type: 'nothing' })
const Maybe = a => !a ? Nothing(a) : a.type ? Maybe(a.value) : Just(a)

console.log(Maybe(undefined))
console.log(Maybe(1))
console.log(Maybe(Maybe(undefined)))