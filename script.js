const firstArray = ["Hello", "Hi", "Howdy", "Greetings", "Good day"];
const secondArray = ["user", "person", "human", "earthling", "mortal"];
const ThridArray = ["have a great day", "you will shine today", "you are going to smash today", "you are important", "remember your worth"];


function pickRandomWordInArray (array) {
    let randomWord;
    const randomIndex = Math.floor(Math.random() * array.length);

    randomWord = array[randomIndex];
    return randomWord;
}
