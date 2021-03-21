# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Junyan Wu**

Time spent: **3** hours spent in total

Link to project: https://light-and-sound-memory-game1.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](http://g.recordit.co/dPBs06SaFo.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
*[https://www.w3schools.com/jsref/jsref_length_array.asp]*

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
*[A challenge I encountered in creating this submission was figuring out how to implement the "guess" function. I had three conditions to check: is the guess correct, is the turn over, and is this the last turn. To check if the guess is correct, I used btn which was passed into the function and I compared if the btn is the same as the pattern[guessCounter] using array indexing. To check if the turn is over, I checked if the variable guessCounter is the same as the variable progress. Finally, to check if it is the player's last turn, I checked if the progress variable is the same as one less the number of items in the pattern array. I didn't know how to check the length of an array in JavaScript, so I Googled how to check the length of an array in JavaScript and found that the solution is array.length or pattern.length. Another challenge I encountered was understanding the "Init Sound Synthesizer" variables and functions. The provided link "https://www.the-art-of-web.com/javascript/creating-sounds/" was helpful in understanding what these variables and methods do in creating sound. I spent most of my time reading documentation and understanding HTML, CSS, and JavaScript, and the provided drop down descriptions were helpful in understanding what certain parts of the code do.]* 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
*[A question I have about web development is how to properly format the text and the buttons on a web page so that everything is centered properly in the middle instead of being aligned to the left side of the page. Another question I have about web development is how to handle security when building a web application. I also want to know why the sound is not being implemented when I open the web application in a new incognito window. The sound works perfectly fine when I had it opened in a new tab on the same window and when I had it opened on the side of the glitch page.]*

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional
features, etc). Be specific. (recommended 100 - 300 words) 
*[If you had a few more hours to work on this project, I would add a randomizer to have a different sequence of patterns when the user starts the game. I would also add one more button to increase the difficulty level of the light and sound memory game. I would also have a timer so the user has a limited amount of time on each turn to complete the pattern. Finally, I would increase the playback speeds each turn of the pattern. I want the game to be more difficult, because when a game is challenging, the game is more fun.]*


## License

    Copyright [Junyan Wu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
