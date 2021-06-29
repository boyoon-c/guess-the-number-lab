const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuesses: [],
    
    getGuess: function () {
        let guess = null;
  
        do {
            guess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum} (with secret number ${this.secretNum})`)
            guess = parseInt(guess)
            if (isNaN(guess)){
                alert("Enter a number!")
            } else if(guess <this.smallestNum || guess > this.biggestNum){
                alert("Enter a number within the range!")
            }
        } while (isNaN (guess) || guess < this.smallestNum || guess > this.biggestNum)
        return guess
    },
    
     play: function(){
         this.secretNum = Math.floor(Math.random()*
             (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        let guess 
        do {
            guess = this.getGuess()
            this.prevGuesses.push(guess)
            this.render(guess)
        } while (guess !== this.secretNum)
        
        alert("Yay!")
        
     },

    render: function(guessIn){
        if (guessIn !== this.secretNum){
            guessIn < this.secretNum ? alert(`Your guess is too low. Previous guesses: ${this.prevGuesses.join(', ')}`) : alert(`Your guess is too high. Previous guesses: ${this.prevGuesses.join(' , ')}`)
        } else {
        alert(`Congrats! You guessed the number in ${this.prevGuesses.length} tries!`)
        }
        
        return guessIn
        }
    }


 

game.play()

