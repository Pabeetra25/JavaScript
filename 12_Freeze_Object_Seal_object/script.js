const user={
    firstName: 'John',
    lastName: 'Doe',
    address:{
        city: 'San Francisco',
        pinCode:'1234',
        state:' California',
        moreDetails:{
            population:276543,
            area:'345 sq km',
        },
    },
    age:14,
    isGraduate:false,
}
//Object.seal(user)
Object.freeze(user) //more powerful than Object.seal()
console.log('lastName' in user)