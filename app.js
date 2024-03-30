const wordList = [
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
];

let wordDisplay = document.querySelector(".word-display");
let hintText = document.querySelector(".hint-text");

let randomIndex = Math.floor(Math.random() * wordList.length);
let randomWordObject = wordList[randomIndex];
let randomWord = randomWordObject.word;
let randomHint = randomWordObject.hint;



// Display underscores for each letter in the word
for (let i = 0; i < randomWord.length; i++) {
  wordDisplay.innerHTML += "_ ";
  wordDisplay.style.fontSize = "30px";
}

// Display the hint
hintText.innerHTML = `Hint: ${randomWordObject.hint}`;
hintText.style.color = "blue";

document.addEventListener("keydown", (event) => {
  // Convert the pressed key to uppercase
  let pressedKey = event.key.toUpperCase();
  // Check if the pressed key exists in the random word
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i].toUpperCase() === pressedKey) {
      // Replace the corresponding underscore with the letter
      let displayLetters = wordDisplay.textContent.split(" ");
      displayLetters[i] = pressedKey;
      wordDisplay.textContent = displayLetters.join(" ");
      
    }
  }
});

let incorrect = 0; // Declare the incorrect variable outside the loop
document.querySelectorAll(".keyboard button").forEach((button) => {
  button.addEventListener("click", () => {
    let pressedKey = button.textContent.toUpperCase();
    let isCorrectGuess = false; // Flag to check if any correct guess is made
    // Check if the pressed key exists in the random word
    for (let i = 0; i < randomWord.length; i++) {
      if (randomWord[i].toUpperCase() === pressedKey) {
        // Replace the corresponding underscore with the letter
        let displayLetters = wordDisplay.textContent.split(" ");
        displayLetters[i] = pressedKey;
        wordDisplay.textContent = displayLetters.join(" ");

        wordDisplay.innerHTML = wordDisplay.innerHTML.replace("_ ", "");

        isCorrectGuess = true;
      }
    }

    // If no correct guess is made, increment the incorrect counter
    if (!isCorrectGuess) {
      incorrect++;
      let img = document.querySelector(".hangman-box img");
      img.src = "/images/hangman-" + incorrect + ".svg";
      let guess = document.querySelector(".guesses-text");
      guess.innerHTML = `Incorrect Guess: ${incorrect} / 6`;
      if (incorrect === 6) {
        // Corrected the condition
        document.querySelector(".keyboard").style.display = "none";
        guess.innerHTML = "YOU LOST <br><br>";
        guess.innerHTML += `The word is "${randomWord}"`;

       
      }
    }
    let correctlyGuessed = Array.from(
      wordDisplay.textContent.replace(/\s/g, "")
    );
    if (
      correctlyGuessed.length === randomWord.length &&
      correctlyGuessed.every(
        (char, index) => char.toUpperCase() === randomWord[index].toUpperCase()
      )
    ) {
      wordDisplay.innerHTML = "YOU WON <br><br>";
      wordDisplay.innerHTML += `The word is "${randomWord}"`;
      document.querySelector(".keyboard").style.display = "none";
      document.querySelector(".guesses-text").style.display = "none";

    
    
    }
  });
});


let playAgain = document.createElement("button");
playAgain.innerHTML = "Play Again";
playAgain.classList.add("Play-Again");

let box = document.querySelector(".game-box");
box.append(playAgain);

document.querySelectorAll(".Play-Again").forEach(button => {
  button.addEventListener("click", () => {
      
      // Reload the page when "Play Again" button is clicked
      location.reload();
  });
});

