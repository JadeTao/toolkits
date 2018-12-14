function curry(fn) {
  return function f1(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args)
    } else {
      return function f2(...arg) {
        return f1.apply(null, args.concat(arg))
      }
    }
  }
}

function add(a, b, c) {
  return a + b + c
}

;
[1, 2, 3].map(curry(add)(3)(4)) // [8,9,10]