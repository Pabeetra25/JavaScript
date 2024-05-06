//destructuring mainly used with objects and array
const colors=['red', 'green', 'blue','yellow','pink','orange']

// const color1=colors[0]
// const color2=colors[1]
// const color3=colors[2]

//destructuring array of colors
const [color1, color2, ...color3] =colors
//const [,,color3] = colors
// const {3:color4,5:color5} = colors

const user ={
    name: 'nicas',
    age:24,
    address:{
        city:'Kathmandu',
        state:'Bagmati',
    },
}

// const age=user.age
// const name=user.name
// const address=user.address

//destructuring objects
const {name,age}=user
// const {name:userName,age:userAge, address}=user


// const {address:{city}}=user


//on function
function intro({age,name}){
    console.log(age,name)
}
// intro(user)

function printColors([a,b,,c]){
    console.log(a,b,c)
    
// function printColors({4:color5}){
//     console.log(color5)
}
printColors(colors)
