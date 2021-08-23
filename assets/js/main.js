//Lev1_1_1
let address = ['brüsseler', 45, '13353', 'Berlin', 'Berlin']

let friends = ['Pinar', 'Luke', 'Miri', 'Daniela', 'Gina']

let person = ['Chen', 'Lin', 30, 'Yoga', ' China', 'Supercode']

console.log(friends)
console.log(person)
console.log(address)

person.push(address, friends)
console.log(person)
console.log(person[7])
console.log(person[6])

//Lev1_1_2
console.log(friends.length)
console.log(person.length)
console.log(address.length)

//Lev1_2
let myTrainers1 = ['Anass', 'Steffen', 'Eric', 'Elaine']
console.log(myTrainers1)

let myTrainers2 = new Array('Georg', 'Anass', ' Hakan', 'Elaine')
console.log(myTrainers2)

let myTrainers3 = new Array()
myTrainers3[0] = 'Georg'
myTrainers3[1] = 'Steffen'
myTrainers3[2] = 'Eric'
myTrainers3[3] = 'Elaine'
console.log(myTrainers3)

//Lev1_3
let numberArray = [5, 6, 7, 8, 9, 10]
console.log(numberArray)
console.log(numberArray[0])
console.log(numberArray[5])

// Lev1_4
let meinText1 = 'Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.'
let meinText2 = 'Wie geht es dir heute?'
let meinText3 = 'Heute ist ein großer Tag für uns.'

let split1 = meinText1.split();
console.log(split1)
let split2 = meinText2.split(" ")
console.log(split2)
let split3 = meinText3.split("")
console.log(split3)

//lev1_5_1
let songs = ['Bohemian Rhapsody', 'Stairs to Heaven', 'Hotel California']
// let totalSong = ['porto', 'better together', 'banana pancake']
// songs.push(totalSong)
// console.log(totalSong)
songs.push("sweet child o'mine", 'better together', "banana pancake")
let totalSongs = songs
totalSongs.push('punk', 'metal', 'techno')
console.log(totalSongs)

let besteFussballerAllerZeiten = ['Müller', 'Ronaldo', 'Beckham', 'Messi', 'Maradona']
besteFussballerAllerZeiten.push('Kahn', 'Buffon', 'Zidane')
console.log(besteFussballerAllerZeiten)


const artists = ["michael", "elvis"]
artists.push('EdSheran', 'Coldplay')
console.log(artists)

//lev1_5_2
let heroUndEnemy = [['Batman', 'The Joker'], ['professor X', 'Magneto'], ['Thor', 'Loki']]
heroUndEnemy.push(['wolverine', 'sabrethooth'], ['ghost rider', 'mephisto'], ['Superman', 'Lexluthor'])
console.log(heroUndEnemy)


//lev1_6
totalSongs.pop()
let entfernterSong = totalSongs.pop()
console.log(entfernterSong)
console.log(totalSongs)

besteFussballerAllerZeiten.pop()
// saves the removed element
let entfernterFussballer = besteFussballerAllerZeiten.pop()

besteFussballerAllerZeiten.pop()
console.log(entfernterFussballer)
console.log(besteFussballerAllerZeiten)

//Entferne dann 3 Fussballer.
besteFussballerAllerZeiten.pop()
console.log(besteFussballerAllerZeiten)

besteFussballerAllerZeiten.pop()
console.log(besteFussballerAllerZeiten)

// Lev 1_7
let deutscheGerichte = ['Speckkuchen', 'Thüringer Rostbratwurst', 'Quarkkeulchen', 'Sauerbraten']
deutscheGerichte.unshift()


