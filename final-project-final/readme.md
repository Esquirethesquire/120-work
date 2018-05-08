Nathan Killian

# Final Project

[Art](https://alexk2313.github.io/120-work/final-project-final/);

## Intro
My final project was influenced by the the retro arcade game "Asteroids". I played the game alot in my childhood and ive always had a game idea that has stemed from the original. In my game you control a ship/character. In the game you run from orbs that float around the screen but you are also confined to the edges of the screen. If you are caught by the orbs you lose the game and have to restart.

## Research
When i first began making my game i realized there was alot that goes into it. I realized with some of the mechanics i had no idea how to program them to actually work. Some of the mechanics im referencing are, a momentum mechanic that makes your ship continue moving even after you tell it to stop, collision mechanics, and how to insert sound into my game.

I began my research and found many Shiffman videos that delt with the problems i was having. I was able to solve most of my problems by adapting the concepts that he was disscusing in his tutorials.

## Making of
I started my project by programing my ship class that my ship/character object was based from. This part was fairly simple and didnt take long to complete. I used vectors to base the position off of and a vector to add velocity to the ship. I created the ship using a triangle and adding arrow key commands to make the ship turn and move forward. To make the ship accelerate slower i decreased the multitude of the velocity vector.

Next i created my orbs that you see floating around the screen. I created 5 of them in the sketch and made it so they are confined to the edges of the canvas. I then split my Orb and Ship class into seperate documents to make the code easier to read and understand. I added collision detection within the Orb class to recognise if one of them hits the ship. After that i had to add the part that makes the ship disappear when it is hit by an orb.

After i finished making my classes and getting them working within my sketch i began to fine tune the game itself. I made changes to the orbs to make them faster and bigger but that made the game to hard, so i toned it down a little bit. I also fine tuned the movement and rotation speed of the ship to make it fair. After that i added text to specify the controls and objective!

## After Thoughts
I had alot of trouble figuring out the collision detection between different classes but eventually through the help of google i was able to figure it out. Also one thing i couldnt get figured out was how to add sound. Every time i added a song to my Libraries folder and included it within my sketch i always got an error that would tell me the song was not defined. Im sure this is an easy fix that i was not able to figure out. There was not much on how to fix or troubleshoot that error on the internet but im sure i will figure it out eventually. This project really helped me learn alot about programing in p5 and im sure this experience will help me in the future.
