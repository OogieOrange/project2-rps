# Rock, Paper, Scissors

A perfect game to occupy ones atention when traveling or simply taking a quick break. 

Rock, paper, scissors is a basic webpage displaying a playable version of the game by the same name. It registers the users choice and match it against a randomly generated oponents choice. The score of the user and computer is recorded in a tally and the user can choose to continue playing indefinitely or to reset the score count. 

<img src="assets/readme-images/responsive.png" alt="Image showing responsiveness">

<br>

[LIVE SITE HERE](https://oogieorange.github.io/project2-rps/)

<br>

## Features
---

<br>

### Header

Displays that the purpose of the webpage is the game with corresponding name.

<img src="assets/readme-images/header.png" alt="Image showing page header">

<br> 

### Rules

Introduces how the game works for the user

<img src="assets/readme-images/rules.png" alt="Image showing game rules">

<br>

### Option Buttons

Displays the options the user can choose between and registers their choice.

<img src="assets/readme-images/choices.png" alt="Image showing game choices">

<br>

### Winner Display

Shows both parties choices and who won the round.

<img src="assets/readme-images/who-won.png" alt="Image showing who won">

<br>

### Score Display

Holds the tally of how many times each of the parties has won.

<img src="assets/readme-images/tally.png" alt="Image showing score tally">

<br>

### Reset Button

Resets the tally scores. So the user can choose to start over.

<img src="assets/readme-images/reset.png" alt="Image showing reset button">

<br>

## Wireframe

---

The wireframe for the webpage. Certain other elements were added when coding the page.

<img src="assets/readme-images/wireframe-rps.jpg" alt="Image showing wireframe">

<br>

## Technology
---

<br>

- HTML5
- CSS3
- JavaScript
- [Google Fonts](https://fonts.google.com/), <br> Was used to import the 'Fredoka One' and 'Quicksand' font familys into the connected css stylesheet.
- [Am I Responsive](https://ui.dev/amiresponsive), <br> Was used for checking responsiveness.
- [ClipStudios], <br> Was used to create the wireframe.
- Git, <br> Was used to commit through Gitpod repository and push code to GitHub.
- [GitHub](https://github.com/), <br> Was used to facilitate my project and to deploy it.
- [W3C Validator](https://validator.w3.org/#validate_by_uri), [W3C jigsaw CSS validator](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/), <br> Was used to validate all the code.

<br>

## Testing
---

<br>

### Function
All buttons on the page have been tested and all hover styling have been tested and execute intended purpose.

<br>

### Validation
The websites code has been tested and validated through W3C Validator, W3C jigsaw CSS validator, JSHint and LightHouse. The result is shown bellow through screenshots.

### W3C Validator

<img src="assets/readme-images/html-validation.png" alt="Image showing W3C Validator result">

<br>

### W3C jigsaw CSS validator

<img src="assets/readme-images/css-validation.png" alt="Image showing W3C jigsaw CSS validator result">

<br>

### JSHint

<img src="assets/readme-images/jshint.png" alt="Image showing JSHint result">

<br>

### Lighthouse

<img src="assets/readme-images/lighthouse.png" alt="Image showing LightHouse result">

<br>

## Browser Testing
---

<br>

### Chrome Dev Tools

The webpage containes media queries and are responsive down to a screen width of 320px. Above a screen width of 1300px, the content will retain it's width of 60rem (at it's widest) and center itself on the screen.

<br>

### Modzilla Firefox

- MacBook Air 12"

<br>

### Safari

- MacBook Air 12"/13"
- IPhone 11

<br>

### Chrome

- Desktop
- MacBook Air 12"/13"
- IPhone 11

<br>

### Microsoft Edge

- Desktop

<br> 

## Found and Fixed Bugs
---

<br>

 When choosing to reset the game, the tally count would display 0-0 untill someone won a game. Now this is supposed to happen. But when the first new game was won, the tally for the winner would continue the count from the score preceding the reset.

 This was fixed by simply adding the "scoreWin" and "scoreLoss" variables (the score counting variables) to the reset button respons. 

<br>

## Deployment
---

<br>

1. Open GitHub repository and open the settings tab
2. From settings navigate to pages tab
3. Under branch, select the main branch through the dropdown menu
4. Once selected and saved, the page will be refreshed (in case of nothing happening wait for a couple minutes and refresh page manually)
5. The refreshed page will show a detailed ribbon containing the website link and indicate a successful deployment.

<br>

## Credits
---
