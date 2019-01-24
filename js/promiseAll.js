function promiseAll(tasks) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(tasks)) {
      return reject(new TypeError('params type error'))
    }
    let fulfilledQueue = 0
    let length = tasks.length
    let values = new Array(length)
    for (let i = 0; i < length; i++) {
      Promise.resolve(tasks[i]).then(function (v) {
        values[i] = v
        fulfilledQueue += 1
        if (fulfilledQueue === length) {
          return resolve(values)
        }
      }, function (error) {
        return reject(error)
      })
    }
  })
}

function PromiseFactory(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve('PromiseFactory')
    }, time)
  })
}

promiseAll([
  PromiseFactory(1000),
  PromiseFactory(2000)
]).then(v => console.log(v))
