const numbers=[1,2,3,4,5]

const sum=numbers.reduce((accumulator,current,i)=>{
   // console.log(i,current)
  // console.log(accumulator)
    return accumulator+current
},0)