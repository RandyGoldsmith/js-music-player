# JavaScript Music Player
[image](https://github.com/RandyGoldsmith/js-music-player/blob/main/snippet1.png)

## Description
A music player based on ZTM's course "Build 20 projects", but customized with more features. To start the music player, you just hit the play button. You can also click anywhere 
on the progress bar to move to different places in a song. To move to the next song, you can either press the "next" button
or wait for the song to end and it will automatically go to the next song. To move to the previous song, you can press the "previous" button.
The music player also has volume control to where you can click on the volume bar or the volume buttons to adjust the volume as needed.
You can also see different backgrounds for each song played as well as the current song being played and the artist. 

## Demo


## Technologies Used
HTML, CSS, and JavaScript


## Challenges/Problems faced
When implementing the volume functionality, I grabbed the volume buttons and added a click event listener to them. I then made a callback function
that took no parameters and got the number value of the volume_slider since it is an input element of type range. So I took the number value of the volume_slider
and incremented it by 10 in one of the callbacks abd decremented it by 10 in the other allowing me to increase or decrease the volume by 10. Well, whenever you 
are getting a value of an input of type range, the value is NOT a number but rather a string. Whenever I turned down the volume it worked, but whenever trying to 
increase the volume it automatically went to a value of 100 (the max I had set) instead of incrementing by 10. I looked at the code trying to debug it but nothing
made sense. I took to stackoverflow and asked the question and also learned how to format questions right and get straight to the point. The answer was so simple
as I pointed out above I could not believe I missed it. So, the solution was simply to cast the string to a number and save it into a variable. I then took the current
volume_sliders value and set it equal to the casted number value plus 10, which would let JavaScript to do the math correctly. I also did this for the other callback
to where I wanted to decrease the volume by 10. 
