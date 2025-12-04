// const userName1='Rahul'

// let userName2=userName1
// userName2=userName2 +' Chhetri'


const fruits=['apple', 'orange', 'mango']

// const myFruits=fruits
// myFruits.push('pear','peach')

//1
// const myFruits=[]
// Object.assign(myFruits,fruits)
// myFruits.push('pineapple') 

//2
const myFruits=[...fruits]
myFruits.push('pear','peach')


//3
// const myFruits=[].concat(fruits)
// myFruits.push('Jackfruit')

//4
// const myFruits=fruits.slice()
// myFruits.push('papaya')


const user1={
    firstName: 'John',
    lastName: 'Deep',
    home:{
       city: 'San Francisco',
       pinCode:'122836',
    },
    subject:['physics','chemistry','biology']
    }

//const user2=user1  //this is not considered as copy 
//user2.lastName='Aryal'

// const user2={}
// Object.assign(user2,user1)
// user2.lastName='Aryal'



// const user2={...user1} //mostly used
// user2.firstName='Abhramn'

// const user2={...user1}
// user2.firstName='Albert'
//user2.home.city='Mumbai'


//1.shallow Copy
// const user2={}
// Object.assign(user2,user1)
const user2={...user1} 
//const addSubject=user1.subject.push('Maths')

//2.Deep Copy