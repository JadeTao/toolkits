function curry(fn) {
  const arity = fn.length
  return function f1() {
    const args = Array.from(arguments)
    if (args.length >= arity) {
      return fn.apply(null, args)
    } else {
      return function f2() {
        return f1.apply(null, args.concat(Array.from(arguments)))
      }
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

;[1, 2, 3].map(curry(add)(3)(4)) // [8,9,10]
