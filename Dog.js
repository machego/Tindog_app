class Character{
    constructor(data) {
        Object.assign(this, data)

        // property
    }

    // methods
    getCharacterHtml() {
        const { name, avatar, age, bio } = this

        return `
        <div class="character-card">

            <div class="character-info">
                <h4 class="name"> ${name}, ${age} </h4>
                <div class="bio-dog">
                 ${bio}
                </div>
            </div>
            <img class="avatar" src="${avatar}" />   
        </div>
        `
    }
}


    
export default Character