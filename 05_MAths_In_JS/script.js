let x=10
let y=20
let random_num=Math.floor(Math.random()*(y-x)+x)
console.log(random_num)

const lenght= +prompt('Enter  length  of rectangle:')
const breadth= +prompt('Enter breadth of rectangle:') 
const area=lenght*breadth
document.write(`Rectangle area: ${area}`)
