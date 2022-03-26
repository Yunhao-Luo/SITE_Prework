# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Yunhao Luo**

Time spent: **14** hours spent in total

Link to project: lunar-brief-turnover.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [√] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [√] "Start" button toggles between "Start" and "Stop" when clicked. 
* [√] Game buttons each light up and play a sound when clicked. 
* [√] Computer plays back sequence of clues including sound and visual cue for each button
* [√] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [√] User wins the game after guessing a complete pattern
* [√] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [√] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [√] Buttons use a pitch (frequency) other than the ones in the tutorial
* [√] More than 4 functional game buttons
* [√] Playback speeds up on each turn
* [√] Computer picks a different pattern each time the game is played
* [√] Player only loses after 3 mistakes (instead of on the first mistake)
* [√] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [√] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [√] List anything else that you can get done to improve the app!
- Every time the player makes a mistake, there will be a window that reminds the player of how many more mistakes are allowed.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![](https://i.imgur.com/Rnu9pLy.gif)
![](https://i.imgur.com/VWA4dlh.gif)
![](https://i.imgur.com/EtEzNpr.gif)
![](https://i.imgur.com/LgKIkxp.gif)
![](https://i.imgur.com/t3Zg9Bw.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
W3S, Stackoverflow

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
The ticking clock feature was a big challenge for me. I started by reading the W3S page on setInterval and clearInterval. I first tried to make a progress
bar by printing "||" every second. After some experiment, I found that this method might not be the optimal solution because players can't see the exact
time remaining, and also a growing progress bar does not fit as a countdown clock that tells the player how much time is remaining for each turn.
Therefore, I switched to making a display of a digital timer. I had no idea how to change a text at first, so I searched online and read about different 
methods to change the text. After I managed to make a countdown clock, a new problem emerged, which is when to start the timer and when to stop it. 
At first few tries, I stopped the timer at the wrong place, and since a new timer starts at the beginning of every turn, the timer became really weird 
because the first turn timer doesn't stop and the second turn timer starts, so two timers were overlapping. I tried putting them at different places but
it still doesn't work. At this point, I thought the best thing to do is to re-read and re-understand the whole code and game logic, and hopefully find some 
insight.  After doing so, I finally found the right place to start the timer and stop the timer for each turn. At this point, the timer can function 
properly but still has some minor flaws. I noticed that there is a lag between the timer and changing the text displayed, so every time the timer stops when 
the web actually says there are 2 seconds remaining. Therefore, I made some adjustments to the timer and text display so that they match correctly. My take
away from solving this problem is that whenever things work in unexpected ways, it is better to get out from that single problem, re-inspect the code,
and hopefully gain some new insights from a higher point of view or a different perspective.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I learned a lot about web development from completing this submission. Creating this game on web is already a big achievement for me, but I think a game
is always more fun when players get to interact with other players. Thus, I am curious about how to establish real time connections and interactions between
different users so I can make this a multiplayer game. Moreover, I am also curious about the next level of web development. I think this submission really
gets me started on how to implement basic web pages, but I am also curious about the implementations of other more sophisticated websites. For example, webs that
have multiple layers and interfaces, as well as those that have more complicated animations and effects. Beyond these, I would love to learn more about how famous
websites like Facebook work. How they manage users' information, store data in their database, and how web pages send and receive data. In addition to how to
implement these functions and features in code, I am always curious about how things work under the hood，and the fundamental principles that help us to
realize these features. I believe these fundamentals are the critical foundation of web development, and knowing them will be helpful for creating a web.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
Games are always fun when played with friends, so I would spend more time adding another player into the game. There will be two modes, one for competition and 
another for collaboration. I would try to find some songs that can be played by these simple tones so that players can cooperate and play a song together. I would
also love to add a feature of celebration when the player wins the game. There will be a celebration song made by these tones, and once the player wins, the game
will automatically play that celebration song. Moreover, I think the most important thing that I want to improve is the appearance of this web game. The first 
look of a web page is always the key that captures people's attention and makes them stay to play the game. From my own experience, a good first impression usually comes from 
some elements on the page that stands out to me. Therefore, I would make its appearance matches the look of a piano so that everyone looking at this page knows that 
this is a music game. To do so, I would resize all the buttons and change their colors to make them look like real black and white piano keys. In this way, people would 
immediately know that this is a game about music and sound, and these buttons are supposed to be pressed like piano keys.



## Interview Recording URL Link

[My 5-minute Interview Recording]
https://drive.google.com/drive/folders/13tbeHcTXEDI6tDKZsZzHUVrkEfsIVwLV?usp=sharing


## License

    Copyright [Yunhao Luo]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
