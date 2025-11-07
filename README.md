


# 🍎 Fruit Word Challenge

A fun text-based word guessing game built in vanilla JavaScript with multiple difficulty levels.  
Test your guessing skills, unlock trophies, and see how many fruit names you can uncover before your attempts run out!  

## 🎯 Game Overview

The player must guess the hidden fruit name letter by letter — similar to the classic Hangman game.

You can choose from three difficulty levels:
- 🟢 **Easy** 8 attempts, short and simple words  
- 🟡 **Medium** 6 attempts, moderate difficulty  
- 🔴 **Hard** 4 attempts, long and challenging words  

During gameplay:
- Type one letter per turn (A–Z).
- Type "hint" for a clue (limited to 2 per game).
- Type "quit" or press "Cancel" anytime to exit immediately.
- After each round, you can choose to "play again" or "end the session".

## 🕹️ How to Play

1. Open the `index.html` file in any web browser.  
2. Click the "Start Game" button.  
3. Select your difficulty level (`easy`, `medium`, or `hard`).  
4. Guess letters one at a time via the prompt window.  
5. You win if you guess all letters before running out of attempts.  
6. At the end, see your stats and trophies 🏆.

## 🏆 Rewards System

You’ll earn trophies based on how many attempts you have left when you win:

| Attempts Left | Reward |
|----------------|---------|
| 4 or more | 🏆 **Gold Trophy – Amazing!!** |
| 3 or more | 🥈 **Silver Trophy – Well done!!** |
| 1–2 left | 🥉 **Bronze Trophy – Good!!** |
| Lost | 😔 **Try Again!!** |

## 💡 Features Implemented

✅ Random word selection from an array  
✅ Multiple difficulty levels  
✅ Input validation (only letters allowed)  
✅ Cancel and Quit button handling  
✅ Nested loops and conditional logic  
✅ Hints with usage limits  
✅ Trophy collection and session summary  
✅ Clean, semantic variable naming and consistent code style  

## 📁 File Structure

/My-Assignment-2
│
├── index.html # Main HTML file with Start Game button
├── style.css # Styling 
├── script.js # Contains all the game logic
└── README.md # Project documentation (this file)

## 🧰 Technologies
- HTML5, CSS3, Vanilla JavaScript (ES6+).