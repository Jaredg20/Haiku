// our 'database' of words

const oneNouns = ["tree", "roof", "plant", "leaf", "sky", "hope"];
const twoAdjectives = ["growing", "peaceful", "pleasent", "happy", "friendly", "charming"];
const fourAdjectives = ["beautiful", "exceptable", "encouraging", "emotionioal", "incredible", "desirable"];
const twoNouns = ["jared", "flower", "branches", "sunlight", "window"];
const fiveAdjectives = ["extrodinary", "intellectual", "supernatural", "biological", "enthusiastic", "invigorating"];
const threeAdjectives =["loveable", "excited", "colorful", "organic", "elegant"];


/**
 * Haiku structure:
 * 4a 1n
 * 2a 3a 2n
 * 5a
 */
function generateHaiku() {
    // need to get random word for each type of word
const fourAdjective = getRandomWord(fourAdjectives);
const oneNoun = getRandomWord(oneNouns);
const twoAdjective = getRandomWord(twoAdjectives);
const threeAdjective = getRandomWord(threeAdjectives);
const twoNoun = getRandomWord(twoNouns);
const fiveAdjective = getRandomWord(fiveAdjectives);
    // then need to return a string of html formatting the haiku
    return `
    ${fourAdjective} ${oneNoun} <br>
    ${twoAdjective} ${threeAdjective} ${twoNoun} <br>
    ${fiveAdjective}`
}

function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length)
    // get the word from the random index
    return words[randomIndex];
}

// need to access the button and 'haiku' elements from the DOM
const btn = document.querySelector ("button");
const haiku = document.querySelector ("#haiku");

// add an event listener for when a user clicks the button
btn.addEventListener("click", function () {
    // what should happen when a user clicks the button?
    haiku.innerHTML = generateHaiku();
})