import characterData from './data.js'
import Character from './Dog.js'

let dogIndex = 0
let tinDog = new Character(characterData[dogIndex])


function render() {
    document.getElementById('card').innerHTML = tinDog.getCharacterHtml()

}
render()



