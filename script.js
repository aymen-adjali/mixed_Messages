//creating three arrays to hold parts of my generated message.
const firstArray = ["Hello", "Hi", "Howdy", "Greetings", "Good day"];
const secondArray = ["user", "person", "human", "earthling", "mortal"];
const ThridArray = ["have a great day", "you will shine today", "you are going to smash today", "you are important", "remember your worth", "all your dreams can come true", "don’t limit yourself", "everything you can imagine is real"];

//function to pick a randon word from a given array using Math.random().
function pickRandomWordInArray (array) {
    let randomWord;
    const randomIndex = Math.floor(Math.random() * array.length);

    randomWord = array[randomIndex];
    return randomWord;
}

//factory funtion to return an object with parts of the message joined up with added grammar.
function factoryMessage() {
    return {
        firstPart: pickRandomWordInArray(firstArray),
        secondPart: pickRandomWordInArray(secondArray),
        thirdPart: pickRandomWordInArray(ThridArray),

        //making first letter of a word capital.
        makeFirstLetterCaps(word) {
            const wordCap = word.charAt(0).toUpperCase() + word.slice(1);        
            return wordCap;
        },

        formatAndPrintMessage() {
            console.log(`${this.firstPart} ${this.secondPart}! ${this.makeFirstLetterCaps(this.thirdPart)}.`);
        }
    }
}

const newMessage = factoryMessage();
newMessage.formatAndPrintMessage();