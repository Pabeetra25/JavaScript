const num1=[1,2,3,4,5,6,7,8,9,10]

// function add(a,b,...nums){
//     console.log(`a:${a}  b:${b}`)
//     console.log(nums)
//     let sum =0;
//     for(let i=0;i<nums.length;i++) {
//     sum += nums[i]
// }
//     return sum
// }


function add(...nums){
   return nums.reduce((acc,curr)=>acc+curr) 
}

// function add(){
//     return [...arguments].reduce((acc,curr)=>acc+curr) 
//  }

//  function add(){
//     return Array.from(arguments).reduce((acc,curr)=>acc+curr) 
//  }
const result=add(...num1)