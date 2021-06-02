//-------------------------------ECMAScript 5------------------------------------

//Default parameters
function defaultParametersES5(player_class, weapon, level) {
    var player_class = player_class || 'None'
    var weapon = weapon || 'Fists'
    var level = level || '1'
    console.log(player_class, weapon, level)
}
//defaultParametersES5()


//Concatenation
var firstName = 'Tom'
var lastName = 'Hanks'
var completeName = firstName + ' ' + lastName
//console.log(completeName)


//Multiline
var phrase1 = 'Qui consequatur. Commodi. Ipsum vel duis yet minima\n'
    + 'New phrase 1 line'
//console.log(phrase1)


//Destructuration
var monster1 = {
    'type': 'goblin',
    'level': '10',
    'HP': '220',
    'MP': '50'
}
//console.log(monster1.type, monster1.level, monster1.HP, monster1.MP)
//----------------------------------------------------------------------------






//-------------------------------ECMAScript 6------------------------------------

//Default parameters
function defaultParametersES6(
    player_class = 'None',
    weapon = 'Fists',
    level = '1') {

    console.log(player_class, weapon, level)
}
//defaultParametersES6()
//defaultParametersES6('Warrior', 'Sword', '45')


//Concatenation
let completeName2 = `${firstName} ${lastName}`
//console.log(completeName2)


//Multiline
var phrase2 = `ES6 implementation
This detects new lines and others characteristics`
//console.log(phrase2)


//Destructuration
let monster2 = {
    'type': 'Undead Guard',
    'level': '100',
    'HP': '220000',
    'MP': '100000', //In ES6 the , at the end of the last atribute is valid and is a good practice
}

let { type, level, HP, MP } = monster2
//console.log(type, level, HP, MP)


//Spread Operator
let team1 = ['Adara', 'Betria', 'Xonion']
let team2 = ['Aren', 'Sigurd', 'Iria']

let squadron = ['Rexan', ...team1, ...team2]
//console.log(squadron)


//Parameters in objects
let name = 'Albert'
let age = '35'

person1 = {
    name: name,
    age: age
}
//console.log(person1)

person2 = { name, age }
//console.log(person2)


//Promises
const testingPromise = () => {
    return new Promise(
        (resolve, reject) => {
            if (false) {
                resolve('Resolved!')
            }
            else {
                reject('Rejected!')
            }
        }
    )
}
// testingPromise()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))


//Classes
class Weapon {
    constructor() {
        this.type = 'Dagger'
        this.attack = 220
        this.minUserLevel = 20
        this.dualHanded = 'Yes'
    }

    printWeaponInfo() {
        console.log(`Weapon info:
        Type: ${this.type}
        Attack: ${this.attack}
        Minimun Level Requeried: ${this.minUserLevel}
        Dual Handed: ${this.dualHanded}`)
    }
}
const dagger = new Weapon()
//dagger.printWeaponInfo()


//Modules
// import { printSalute } from './module'
// printSalute()
// console.log(salute())


//Generators
function* spell() {
    if (true) {
        yield 'Lighting '
    }
    if (true) {
        yield 'Storm'
    }
}
const printSpell = spell()
// console.log(printSpell.next().value)
// console.log(printSpell.next().value)
//-------------------------------------------------------------------------





//------------------------------ECMAScript 7-------------------------------

//Includes
const exampleArray = [1, 2, 3, 4, 5]

if (exampleArray.includes(3)) {
    //console.log(`The array includes ${exampleArray[2]}`)
} else {
    //console.log(`The array does not include ${exampleArray[2]}`)
}


//Exponent
let base = 2
let exponent = 2
let result = base ** exponent
//console.log(result)
//-------------------------------------------------------------------------





//-------------------------------ECMAScript8-------------------------------

//Entries
const spellTechnique = {
    Name: 'Fire Ball',
    Element: 'Fire',
    Damage: 340,
}

const entries = Object.entries(spellTechnique)
// console.log(entries)
// console.log(entries.length)


//PadStart - PadEnd
const message = 'Just a message'
// console.log(message.padStart(19, 'Haha '))
// console.log(message.padEnd(17, ' XD'))
// console.log('Hello'.padStart(20, 'Haha '))


//Async Await
const asyncTestPromise = () => {
    return new Promise(
        (resolve, reject) => {
            (true)
                ? setTimeout(() => resolve('Just Testing'), 3000)
                : reject(new Error('Test Error'))
        }
    )
}
//console.log(asyncTestPromise())

const asyncTest = async () => {
    const test = await asyncTestPromise()
    console.log(test)
}
//asyncTest()

const asyncTest2 = async () => {
    try {
        const test2 = await asyncTestPromise()
        console.log(test2)
    } catch (error) {
        console.log(error)
    }
}
//asyncTest2()
//---------------------------------------------------------------------------------





//--------------------------------ECMAScript 9-------------------------------------

//Propagation Properties
const potion = {
    type: 'Healing',
    duration: '20',
    grade: 'B',
}

let { grade, ...all } = potion
//console.log(all)
const SuperPotion = {
    ...potion,
    extraEffect: 'Attack +100'
}
//console.log(SuperPotion)


//Finally
const asyncTestPromise2 = () => {
    return new Promise(
        (resolve, reject) => {
            (true)
                ? setTimeout(() => resolve('Just Testing'), 2000)
                : reject(new Error('Test Error'))
        }
    )
}

// asyncTestPromise2()
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
//     .finally(
//         () => console.log('Finalized')
//     )


//Regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-06-02')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)
//----------------------------------------------------------------------------------------





//-------------------------------------ECMAScript 10---------------------------------------

//Flat

let testArray = [1, 2, 3[4, 5, 6, [7, 8, 9]]]

//console.log(testArray.flat(2))
// console.log(testArray.flatMap(
//     value => [value, value * 2]
// ))


//Trim
let string1 = '          Bonjour'
//console.log(string1.trimStart())

let string2 = 'Konnichiwa         '
//console.log(string2.trimEnd())


//Entries
let entriesTest = [['name', 'Ryu'], ['age', '27']]
// console.log(Object.fromEntries(entriesTest))


//Symbol
let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)