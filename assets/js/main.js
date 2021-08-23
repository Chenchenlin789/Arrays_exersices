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
let germanFood = deutscheGerichte.unshift('Bratwurst', 'Sauerkraut', 'Brezel')

deutscheGerichte.unshift('Bratwurst', 'Sauerkraut', 'Brezel')
console.log(germanFood)//Why this turn into a number?

//Lev1_8
console.log(deutscheGerichte)

deutscheGerichte.shift()
console.log(deutscheGerichte)

deutscheGerichte.shift()
nichtGut = deutscheGerichte.shift()
console.log(nichtGut)

deutscheGerichte.shift()
nichtGut = deutscheGerichte.shift()
console.log(nichtGut)
console.log(deutscheGerichte)

//Lev1_9
let num = [23, 54, 75]
num.push(45, 56, 67, 78, 89)
num.unshift(12, 23, 34, 45, 56)
num.pop()
num.pop()
num.shift()
num.shift()
console.log(num)

//Lev1_10
let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
//Entferne die Fotos mit der Nummer 004-007.
array.splice()
let DelImg1 = array.splice(4, 4)
console.log(array)
console.log(DelImg1)

//Entferne die Fotos mit der Nummer 010-014.
let DelImg2 = array.splice(6, 5)
console.log(DelImg2)
console.log(array)

let DelImg3 = array.splice(2)
console.log(DelImg3)
console.log(array)

//Lev1_11
var array2 = ["imageTeilnehmer000supercode.jpg", "imageTeilnehmer001supercode.jpg"];
//Füge Fotos mit der Nummer 008-010 hinzu.
// Gib array in der Konsole aus.
array2.splice(2, 0, "imageTeilnehmer008supercode.jpg", "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg")
console.log(array2)

//Füge Fotos mit der Nummer 014-019 hinzu.
// Gib array in der Konsole aus.
array2.splice(6, 0, "imageTeilnehmer014supercode.jpg", "imageTeilnehmer015supercode.jpg", "imageTeilnehmer016supercode.jpg", "imageTeilnehmer017supercode.jpg", "imageTeilnehmer018supercode.jpg", "imageTeilnehmer019supercode.jpg")
console.log(array2)
//Füge Fotos mit der Nummer 000-019 hinzu.
// Gib array in der Konsole aus.
array2.splice(2, 0, "imageTeilnehmer002supercode.jpg", "imageTeilnehmer003supercode.jpg", "imageTeilnehmer004supercode.jpg", "imageTeilnehmer005supercode.jpg", "imageTeilnehmer006supercode.jpg", "imageTeilnehmer007supercode.jpg")
array2.splice(11, 0, "imageTeilnehmer011supercode.jpg", "imageTeilnehmer012supercode.jpg", "imageTeilnehmer013supercode.jpg")
console.log(array2)

//Lev1_12
console.log(array2.slice(0, 4))

console.log(array2.slice(4))

//Kopiere die Bilder 007-014 und deklariere sie als Variable copyImg1.
let copyImg1 = array2.slice(7, 15)
console.log(copyImg1)
//Kopiere die Bilder 006-011 und deklariere sie als Variable copyImg2.
let copyImg2 = array2.slice(6, 12)
console.log(copyImg2)

