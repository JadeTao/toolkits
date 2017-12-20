const async = (fns) => {
  const queue = fns
  if (!queue.length) return
  const callback = () => {
    if (queue.length) {
      const current = queue[0]
      queue.shift()
      current(callback)
    }
  }
  callback()
}

function a(cb) {
  setTimeout(() => { console.log(1); cb() }, 1000)
}

function b(cb) {
  setTimeout(() => { console.log(2); cb() }, 500)
}

function c(cb) {
  setTimeout(() => { console.log(3); cb() }, 3000)
}

async([a,b,c])