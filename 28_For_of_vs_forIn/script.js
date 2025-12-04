// const fruits=['banana', 'apple','grapes','pear','peach']

//for of loop
// for( const fruit of fruits){
//     console.log(fruit)
// }

// const user='Aayushmaan'
// for(const letter of user){
//     console.log(letter)
// }


//for in loop
const person={
    firstName: 'Ran',
    lengthName: 'Doe',
    age: 36,
    eyeColor: 'green',
    city:'San Francisco',
}
// for(const key in person){
//          console.log(key,':',person[key])
//    }

const personKeys=Object.keys(person)
const personValues=Object.values(person)
const personEntries=Object.entries(person)

// for (const key of personKeys){
//     console.log(key,':',person[key])
// }


