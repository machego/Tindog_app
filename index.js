import characterData from './data.js'
import Character from './Dog.js'

let dogIndex = 0
let tinDog = new Character(characterData[dogIndex])

let isWaiting = false

function getNewDog(){
    dogIndex = dogIndex + 1
            if(dogIndex === 3 /*6*/ ) {
            dogIndex = 0 
    }
    tinDog = new Character(characterData[dogIndex])

}


function like() {
    if(!isWaiting) {
        isWaiting = true
        tinDog.hasBeenSwiped = true
        tinDog.hasBeenLiked = true 
        render()
        setTimeout(() => {
            getNewDog() 
            isWaiting = false
            render()
        }, 1500)    
    }   
}

function reject() {
    if(!isWaiting) {
        isWaiting = true
        tinDog.hasBeenSwiped = true
        tinDog.hasBeenLiked = false
        render()
        setTimeout(() => {
            getNewDog()
            isWaiting = false
            render()
        }, 1500)     
    }
}


function render() {
    document.getElementById('card').innerHTML = tinDog.getCharacterHtml()
}
render()


document.getElementById('reject-btn').addEventListener('click', reject);
document.getElementById('match-btn').addEventListener('click', like);





