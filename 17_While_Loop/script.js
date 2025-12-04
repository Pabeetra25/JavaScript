// let i=1;
// while (i<=10){
//     console.log(i)
//     i++
// }

const friends=['Kritika', 'Shanta', 'Karuna', 'Aakriti','Aliza']
let i=0
while (i !=friends.length){
    console.log(`${i+1}. ${friends[i]}`)
    friends[i] = friends[i] + ' ' +'Aryal'
    i++
}