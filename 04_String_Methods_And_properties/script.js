const message="namaste from Gulmi "
//to check length of message
const len=message.length
console.log(len)

//capitalize
const toCapital=message.toUpperCase()
console.log(toCapital)

const toLowerCase=message.toLowerCase()
console.log(toLowerCase)

const m1='    hi,this is ohiiooo    '
const toTrim=m1.trim()
console.log(toTrim)

console.log(m1.trimStart())
console.log(m1.trimEnd())

//Methods with arguments
const msg='This is the new chapter of life'
console.log(msg.includes(' the new'))
console.log(msg.indexOf('f'))
console.log(msg.indexOf('T'))
console.log(msg.replace('life','game'));
console.log(msg.replaceAll('h','H'));

const m2='Madam'
const m3='Curie'
const concatMessage=m2.concat(' ',m3)
console.log(concatMessage);

const lastFourDigits='9999'
const accNum=lastFourDigits.padStart(16,'*')
console.log(accNum)

console.log(msg.charAt(12));

console.log(msg.charCodeAt(18));

console.log(msg.split('h'));


const bankBalance=345678;
const templateString=`I have ${bankBalance} + in my account.`
console.log(templateString)