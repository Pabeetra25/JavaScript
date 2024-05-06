 const num1=[1,2,3,4]
 const num2=[5,6,7,8,9,10]

//  const myName='Ashmana'
 const joinedArray =[...num1,...num2,11,12]



// const user = {
//     name: 'Ashmana',
//     age:23,
// }

// const updatedUser={...user,city:'san Francisco'}


function add(){
    console.log(arguments)
    let sum =0
    for(let i=0; i<arguments.length; i++) {
      sum+=arguments[i]
    }
    return sum
}