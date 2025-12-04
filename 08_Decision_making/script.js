const userName= prompt('Enter your name:') || 'Pabeetra';
const userAge = parseInt(prompt('Enter your age:')) || 23;

console.log(`Name:${userName}`);
console.log(`Age: ${userAge}`);
document.write(`Name:${userName}`);
document.write(`Age: ${userAge}`);

if(userAge>=25) {console.log(`${userName} is graduated Student`)
console.log('if condition ran.')
}
if(userAge>=25 && userAge<=45){
    console.log('User is professional')
}
const gender=prompt('Enter your gender:')
console.log(`Gender: ${gender}`);