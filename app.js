const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    getGuess: function(){
        do {
            //guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
            //guess=parseInt(guess)
            guess == this.secretNum

            console.log(typeof guess)
            if (typeof guess !== "string"){
                console.log("Number works")
                this.prevGuesses.push(guess)
            } else {
                console.log("Enter a number!")
            }
        } while (guess !== this.secretNum)
    
    },

    play: function(){
        this.secretNum = Math.floor(Math.random()*
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        console.log(this.secretNum)
        this.getGuess()
        console.log(this.prevGuesses)     

    }
}

game.play()

