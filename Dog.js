class Character{
    constructor(data) {
        Object.assign(this, data)

    }

    // methods
    getCharacterHtml() {
        const { name, avatar, age, bio } = this
        const isLiked = this.getStatusAction()

        return `
        <div class="character-card">
            ${isLiked}
            <div class="character-info">
                <div class="name"> <b> ${name}, ${age} </b></div>
                <div class="bio-dog">
                 ${bio}
                </div>
            </div>
            <img class="avatar" src="${avatar}" />   
        </div>
        `
    }

    getStatusAction() {
        return (!this.hasBeenLiked && this.hasBeenSwiped) ?
        `<img class="reject-btn-img" src="./images/badge-nope.png">` 
        : this.hasBeenLiked ?
        `<img class="match-btn-img" src="./images/badge-like.png" alt="like-image">` 
        :  ""
    } 
        
}


export default Character
