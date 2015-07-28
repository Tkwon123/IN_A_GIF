#IN A GIF

##Introduction
Conveying emotions online can often be a daunting task. How can words possibly convey true excitement? Anger? How about cats? 

Images are good-- and .gifs are even better, but with so many online, how do you possibly choose? 

*IN A GIF* solves your problems by leveraging [GIPHY's API services](https://github.com/giphy/GiphyAPI) and allowing you to score a .gif show-down style to find your current feelings. 

Regret passing on a .gif earlier in the queue? No problem! *IN A GIF* keeps a scorecard of all past .gifs so you wont ever worry about missing out on that last opportunity. May your conversations be forever emoted! 

##Inner workings
*IN A GIF* sits ontop of Rails for its handy use of APIs. Backend ruby library queues of the images while Javascript handles all the placement and scoring. Basic filtering of images occurs including tossing out those .gifs exceeding 500 pixels for size reasons. At times, this can cause additional delay for new images to appear.

 A known issue exists wherein repeat images may be displayed (unexpected behavior originating from Giphy's 'Random' API) which is being tracked on Giphy's Issue Log. 