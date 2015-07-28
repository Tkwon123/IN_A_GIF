#IN A GIF

##Introduction
Conveying emotions online can often be a daunting task. 

![scared](http://s3.amazonaws.com/giphygifs/media/DHujNQWc9XjRC/giphy.gif)

How can words possibly convey true excitement? Anger? How about cats? 

![cats](http://s3.amazonaws.com/giphygifs/media/UuIom9saJP5eg/giphy.gif)


Images are good-- and .gifs are even better, but with so many online, how do you possibly choose? 

![confused](http://s3.amazonaws.com/giphygifs/media/v0eHX3n28wvoQ/giphy.gif)

*IN A GIF* solves your problems by leveraging [GIPHY's API services](https://github.com/giphy/GiphyAPI) and allowing you to score a .gif show-down style to find your current feelings. Simply click on the image you want to kill while keeping the other.

![excited](http://s3.amazonaws.com/giphygifs/media/G3jZwNpYd7wnm/giphy.gif)

Regret passing on a .gif earlier in the queue? 

![down](http://s3.amazonaws.com/giphygifs/media/rfAc51qRkoAHC/giphy.gif)

No problem! *IN A GIF* keeps a scorecard of all past .gifs so you wont ever worry about missing out on that last opportunity. 

![powerup](http://media.giphy.com/media/WnZT6RnEwbKP6/giphy.gif)

After finding your perfect .gif, stop and share it (hey! you might as well grab some runner-ups while you're at it). May your conversations be forever emoted! 

![salute](http://s3.amazonaws.com/giphygifs/media/SS7BbrR0YJ3R6/giphy.gif)

##Inner workings
*IN A GIF* sits ontop of Rails for its handy use of APIs. Backend ruby library queues of the images while Javascript handles all the placement and scoring. Basic filtering of images occurs including tossing out those .gifs exceeding 500 pixels for sizing/placement reasons. At times, this can cause additional delay for new images to appear but shouldnt affect performance too negatively.

 A known issue exists wherein repeat images may be displayed. This is as a result of unexpected behavior originating from Giphy's 'Random' API which is being tracked on Giphy's Issue Log. 
