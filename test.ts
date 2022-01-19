const names = ['a', 'b']
let n = 0

const p = (): string => {
  if (n == names.length) n = 0
  const name = names[n]
  
  return name
  
  n++
}

p()