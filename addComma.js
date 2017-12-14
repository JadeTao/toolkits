const addComma = num => {
  if (num && num.length < 3) return
  num += ''
  const arr = num.split('')
  let res = []
  while (arr.length >= 3) {
    res.unshift(arr.splice(-3))
  }
  arr.length&&res.unshift(arr)
  res = res.map(v => v.join(''))
  return res.join(',')
}