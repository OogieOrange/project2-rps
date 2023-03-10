# Rock, Paper, Scissors

A perfect game to occupy ones atention when traveling or simply taking a quick break. 

Rock, paper, scissors is a basic webpage displaying a playable version of the game by the same name. It registers the users choice and match it against a randomly generated oponents choice. The score of the user and computer is recorded in a tally and the user can choose to continue playing indefinitely or to reset the score count. 

<img src="assets/readme-images/responsive.png" alt="Image showing responsiveness">

<br>

[LIVE SITE HERE](https://oogieorange.github.io/project2-rps/)

<br>

## Features

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

The wireframe for the webpage. Certain other elements were added when coding the page. This to either make it look more pleasing or to add another function to the page.

<img src="assets/readme-images/wireframe-rps.jpg" alt="Image showing wireframe">

<br>

## Technology

<br>

- HTML5
- CSS3
- JavaScript
- [Google Fonts](https://fonts.google.com/), <br> Was used to import the 'Fredoka One' and 'Quicksand' font familys into the connected css stylesheet.
- [Am I Responsive](https://ui.dev/amiresponsive), <br> Was used for checking responsiveness.
- ClipStudios, <br> Was used to create the wireframe and illustrating the images.
- Git, <br> Was used to commit through Gitpod repository and push code to GitHub.
- [GitHub](https://github.com/), <br> Was used to facilitate my project and to deploy it.
- [W3C Validator](https://validator.w3.org/#validate_by_uri), [W3C jigsaw CSS validator](https://jigsaw.w3.org/css-validator/) and [JSHint](https://jshint.com/), <br> Was used to validate all the code.

<br>

## Testing

<br>

### Function
All buttons and hover styling on the page have been tested and execute intended purpose on laptop and desktop devices. 

Hover styling is not implemented the same across mobile and tablet devices but this does not affect the usability of the page, as all buttons work as otherwise intended. It is more a question of consistant styling. This is adressed further down on the README, under future edits.

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

<br>

### Chrome Dev Tools

The webpage containes media queries and are responsive down to a screen width of 320px. Above a screen width of 1300px, the content will retain it's width of 60rem (at it's widest) and center itself (horizontally) on the screen.

<br>

### Modzilla Firefox

- MacBook Air 12"

<br>

### Safari

- MacBook Air 12"/13"
- IPhone 11/14

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

<br>

 When choosing to reset the game, the tally count would display 0-0 untill someone won a game. Now this is supposed to happen. But when the first new game was won, the tally for the winner would continue the count from the score preceding the reset.

 This was fixed by simply adding the "scoreWin" and "scoreLoss" variables (the score counting variables) to the reset button respons. 

 <br>

 When making a final check on responsiveness, I found that between 429-431px the buttons shifted and made an akward space underneath them.

 This was fixed by making the media querie respond to screen sizes smaller than 429px instead of the preavious one of 430px.

<br>

## Future Edits

<br>

In future the media queries will be changed to go from min-max instead of the reverse. And the use of max-width will be replaced with min-width, to ensure that the responsiveness is both more easily implemented an read. This will also be affected by future use of flexbox to simplify the code and queries.

On mobile and tablet devices, the hover function that is used on the websites buttons aren't implemented the same as on laptop or desktop devices. This function will in the future be changed to act when a button is pressed, to ensure a more consistent presentation over all devices.

<br>

## Deployment

<br>

### Github Pages

The site was deployed through Github by the following steps,

1. Open GitHub repository and open the settings tab
2. From settings navigate to pages tab
3. Under branch, select the main branch through the dropdown menu
4. Once selected and saved, the page will be refreshed (in case of nothing happening wait for a couple minutes and refresh page manually)
5. The refreshed page will show a detailed ribbon containing the website link and indicate a successful deployment.

<br>

### Forking Repository

Forking effectivily creates a copy of the repository on your own GitHub account. This to view or to make changes without affecting the original repository in any way. To do this follow the following steps,

1. Locate the repository in question on GitHub.
2. Scroll to the top of the reppository (if you're not already there), and locate the "Fork" button in the top right of the repository (not the top of the page).
3. When clicked, you should recive a copy of the repository on your GitHub account.

<br>

## Credits

<br>

Credit for this project will be given to the following, for acompanied reasons:

- [W3 Schools](https://www.w3schools.com/) and [Stack Overflow](https://stackoverflow.com/), For answering any query I had along the way.
- The 'Love Maths' project, For giving me a better understanding of JavaScript and ide??s on how to build the randomised computer response.
- Oskar Johansson and Joakim Karlsson, For helping me through hints and support on queries I had through out the project.
- My mentor, For helping me understand the code better and to simplify parts of my code in an understandable manner for my level of coding.
