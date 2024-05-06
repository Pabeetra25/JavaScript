const myName='Pabeetra'

const userName1='' //address @77
const userName2=''//address @77

const user1={
    firstName: 'John'
} 
const user2={
    firstName: 'Tony',
    lastName: 'Stark',
    address:{
        city:'Silicon',
        pinCode:'123',
        state:'California',
        moreDetails:{
            populaton:325678564,
            area:'34643 sq km',
            weather:'Moderate'
        }
    }
}
// console.log(user2['lastName'])
// console.log(user1.firstName)


user2.age=20 
user2['is-student'] = true
console.log(user2)


// const user={firstName:'Johnny',
// lastName:'Depp',
// education:12,
// city: 'San Francisco',
// age:23
// }
// const user2={firstName:'Johnny',
// lastName:'Depp',
// education:12,
// city: 'San Francisco',
// age:23
// }

// console.log(user===user2);// returns false because addresses are different as objects are referenced types not value types