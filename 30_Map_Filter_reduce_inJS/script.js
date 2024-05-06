const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  const capitalMonths=months.map( (month,index) =>{
//     console.log(index+1,month)
//     return month.toUpperCase()
// })


// const filteredMonths=months.filter( (month,index) =>{
//     //console.log()
//     // return month.length <= 5
//     return month.toLocaleLowerCase().includes('m')})


const students=[
    {name:'Anash',
    age:21,
},
{
    name:'Akriti',
    age:17,
},
{
    name:'Aksh',
    age:18,
},
{
    name:'Akim',
    age:23,
}
]

const adultStudents=students.filter( (student) =>{
return student.age >=18
})


const adultStudentsName=adultStudents.map( (student) =>{
  return student.name
})