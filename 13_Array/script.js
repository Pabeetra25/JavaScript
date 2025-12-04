// const flowersCollection=['sunflower','rose','marigold','lotus']
// console.log(flowersCollection[1])
// flowersCollection[4]='rhododendron'
// flowersCollection.push('tulipes')
// console.log(flowersCollection)
// console.log(`length of array is: ${flowersCollection.length}`)
// console.log(flowersCollection.pop())

const evenNumbers=[0,2,4,6,8,10,12,14,16,18,20,22]
const oddNumbers=[1,3,5,7,9]
// console.log(evenNumbers.shift())
// console.log(evenNumbers.unshift(0))
// console.log(evenNumbers.unshift(-2))

const  animals=['dog','cat','cow','elephant','tiger','lion','pig']
const addedArray1=evenNumbers.concat(animals)
console.log(addedArray1)
const addedArray2=animals.concat(evenNumbers,oddNumbers)

console.log(addedArray2.indexOf('cow'))

console.log(addedArray2.includes('cow'))

//const  reversedArray=animals.reverse()

//const sortedAnimals=animals.sort()
//const sortedEven=evenNumbers.sort()

const sliceAnimals=animals.slice(2,6)
console.log(sliceAnimals)

const splicedAnimals=animals.splice(2,1)
const splicedAnimals2=animals.splice(3,2,'horse','rhino')
console.log(splicedAnimals2)