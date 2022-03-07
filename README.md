# BattleShip-Game
## Date 03-06-21
## By: Ran Kim
****
### Description
![Game Image](https://i.ytimg.com/vi/kJ43PYmNIew/hqdefault.jpg)
#### Let's play Battleship! Engage in a single player game of battleship where you have 25 tries to find the placement of all 5 ships!
****
### How to Get Started
#### HTML #1
- welcome/landing page
- explaining game rules
#### HTML #2
- game page
#### JS
- (HTML1) button that links to HTML2
- Global Variables
    - game board array (0 for each cell)
    - variables for each cell
    - hit/miss variables
    - win/lose variables
    - scoreboard to keep track of number of hits
    - counter
    - 5 battle ship variables
        1. 2 spaces
        2. 3 spaces
        3. 4 spaces
        4. 5 spaces
        5. 6 spaces
- Functions
    - either... create 5 boards or randomize placement of ships with every restart
    - forEach/ for loop to go through game board array
    - every hit gives +1 and every miss keeps cell at 0
    - every hit increases scoreboard by +10 ==> when scoreboard reaches 200 player wins
    - if counter reaches 25 before scoreboard reaches 200 then player loses
    - replay button when player wins or loses
****
### Trello Board link

****
### Credits