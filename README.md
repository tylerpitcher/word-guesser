# WordGuesser
[![Test-All](https://github.com/tylerpitcher/word-guesser/actions/workflows/test.yml/badge.svg)](https://github.com/tylerpitcher/word-guesser/actions/workflows/test.yml) \
A wordle-inspired guess the word game.


```
├── LICENSE
├── README.md
├── .github
│   └── workflows
│       └── test.yml
├── public
│   ├── index.html
│   └── style.css
├── src
│   ├── components
│   │   ├── __tests__
│   │   │   ├── Integration.test.js ======> Integration tests for entire app
│   │   │   ├── Blank.test.js       ======> Unit tests for blank tiles
│   │   │   ├── Board.test.js       ======> Unit tests for game board
│   │   │   ├── Guess.test.js       ======> Unit tests for tiles containing guesses
│   │   │   ├── Popup.test.js       ======> Unit tests for popups
│   │   │   └── Tile.test.js        ======> Unit tests for tile components
│   │   │
│   │   ├── App.js                  ======> Main app component
│   │   ├── Blank.js                ======> Blank component
│   │   ├── Board.js                ======> Game board component
│   │   ├── Guess.js                ======> Previous guess component
│   │   ├── Popup.js                ======> Popup handler
│   │   └── Tile.js                 ======> Guess tiles
│   └── index.js                    ======> Renders App to DOM
├── .gitignore         
├── package-lock.json
└── package.json
```

## Screenshot
<img src="https://i.imgur.com/mEt7Dyr.jpg" height="400">
