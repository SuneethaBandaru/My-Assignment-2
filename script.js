const WORD_LISTS = {
  easy: [
    { word: 'apple', hint: 'A red color fruit' },
    { word: 'grape', hint: 'Small, round, green outside and juicy' },
    { word: 'mango', hint: 'Tropical and sweet' },
    { word: 'pear', hint: 'Green and bell-shaped' },
    { word: 'peach', hint: 'Fuzzy skin fruit' }
  ],
  medium: [
    { word: 'orange', hint: 'Citrus with a peel' },
    { word: 'banana', hint: 'Yellow and curved' },
    { word: 'cherry', hint: 'Small red berry' },
    { word: 'papaya', hint: 'Tropical with black seeds' },
    { word: 'kiwi', hint: 'Brown outside, green inside' }
  ],
  hard: [
    { word: 'strawberry', hint: 'Red with seeds outside' },
    { word: 'pineapple', hint: 'Spiky tropical fruit' },
    { word: 'watermelon', hint: 'Big and green outside, red inside' },
    { word: 'pomegranate', hint: 'Red fruit with many seeds' },
    { word: 'blackberry', hint: 'Dark purple berry' }
  ]
};

const ATTEMPTS = { easy: 8, medium: 6, hard: 4 };
const MAX_HINTS = 2;

let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let trophies = [];

const validateInput = (input) => /^[a-zA-Z]$/.test(input);
const buildDisplayWord = (word, guesses) =>
  word.map((ch) => (guesses.includes(ch) ? ch : '_')).join(' ');
const checkWin = (word, guesses) =>
  word.every((ch) => guesses.includes(ch));
const getReward = (won, left) => {
  if (!won) return 'Try Again!! 😔';
  if (left >= 4) return '🏆 Gold Trophy - Amazing!!';
  if (left >= 3) return '🥈 Silver Trophy - Well done!!';
  return '🥉 Bronze Trophy - Good!!';
};

const endSession = () => {
  alert(`🎉 Game Over!! 🎉 \n\nGames Played : ${totalGames}\nWins : ${totalWins}\nLosses : ${totalLosses}\nTrophies : ${trophies.join(', ') || 'None'}\n\nHave a nice day!! 👋\n\nCome again if you want more fun!! ❤️`);
  console.clear();
  console.log('===============================');
  console.log('🛑 GAME SESSION CLOSED');
  console.log('===============================');
  console.log(`Total Games : ${totalGames}, Wins : ${totalWins}, Losses : ${totalLosses}`);
  console.log(`Trophies : ${trophies.join(', ') || 'None'}`);
};

const selectLevel = () => {
  while (true) {
    const input = prompt('Select difficulty : Easy, Medium, or Hard (type "quit" to exit) ');

    if (input === null || input.trim().toLowerCase() === 'quit') {
      return null;
    }

    const level = input.trim().toLowerCase();
    if (['easy', 'medium', 'hard'].includes(level)) {
      return level; 
    }

    alert('❌ Invalid input!! Please enter Easy, Medium, or Hard.');
  }
};

const initGame = (level) => {
  const wordSet = WORD_LISTS[level];
  const maxAttempts = ATTEMPTS[level];
  const randomIndex = Math.floor(Math.random() * wordSet.length);
  const selectedItem = wordSet[randomIndex];
  const selectedWord = selectedItem.word;
  const hint = selectedItem.hint;

  const game = {
    selectedWord,
    hint,
    guessedLetters: [],
    attemptsLeft: maxAttempts,
    hintsUsed: 0,
    wordLetters: [...selectedWord],
    gameWon: false,
    maxAttempts
  };

  alert(`🎮 Starting ${level.toUpperCase()} level!! 🎮\nYou have ${maxAttempts} attempts.\nType one letter at a time.\nType "hint" for help (max ${MAX_HINTS}).\nType "quit" to exit.\nPress OK to continue.`);
  console.log(`🎯 Word selected : ${selectedWord} | Hint : ${hint}`);

  return game;
};

const startGame = () => {
  alert('Welcome to the Fruit Word Challenge game!! 🍎🍌🍓\nPress OK to start and have fun!! ');

  let playing = true;
  let roundNumber = 1;

  while (playing) {
    const level = selectLevel();
    if (!level) { endSession(); return; } 
    console.log(`\n========== Round ${roundNumber} ==========`);

    const game = initGame(level);
    totalGames++;

    while (game.attemptsLeft > 0 && !game.gameWon) {
      const input = prompt(
        `Word : ${buildDisplayWord(game.wordLetters, game.guessedLetters)}\n` +
        `Guessed : ${game.guessedLetters.join(', ')}\n` +
        `Attempts left : ${game.attemptsLeft}\n` +
        `Hints used : ${game.hintsUsed}/${MAX_HINTS}\n` +
        `Type a letter, "hint", or "quit" :`
        
      );

      if (input === null || input.toLowerCase() === 'quit') { endSession(); return; }

      const guess = input.toLowerCase();

      if (guess === 'hint') {
        if (game.hintsUsed < MAX_HINTS) {
          alert(`💡 Hint : ${game.hint}`);
          game.hintsUsed++;
        } else alert('No more hints!! ');
        continue;
      }

      if (!validateInput(guess)) { alert('Enter a single letter (A-Z)'); continue; }
      if (game.guessedLetters.includes(guess)) { alert('Already guessed'); continue; }

      game.guessedLetters.push(guess);

      if (game.wordLetters.includes(guess)) alert('✅ Good guess!!');
      else { game.attemptsLeft--; alert('❌ Wrong guess!!'); }

      game.gameWon = checkWin(game.wordLetters, game.guessedLetters);
    }

    const reward = getReward(game.gameWon, game.attemptsLeft);
    alert(`${game.gameWon ? '🎉 You Win!! 🎉' : '👎 You Lose!! 👎'}\nWord : ${game.selectedWord}\n${reward}`);

    console.log(`Round ${roundNumber} result : ${game.gameWon ? 'WIN' : 'LOSS'} | Word : ${game.selectedWord} | Reward : ${reward}`);

    if (game.gameWon) { totalWins++; trophies.push(reward.split(' ')[0]); }
    else totalLosses++;

    let validAnswer = false;
    while (!validAnswer) {
      const again = prompt('Play again? (yes/no)')?.toLowerCase();
      if (again === 'yes' || again === 'y') { validAnswer = true; roundNumber++; continue; }
      else if (again === 'no' || again === 'n') { playing = false; validAnswer = true; endSession(); return; }
      else alert('Please type "yes" or "no".');
    }
  }
};

window.addEventListener('load', () => {
  document.getElementById('start-btn').addEventListener('click', startGame);
  console.log('🎮 Game loaded. Ready to play.');
});
