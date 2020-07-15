# code_quiz
In this HTML file we will find the javascript inside the same file as well as descriptions of "what" is happening and where. There's a bit of redundancy in the creation of buttons and event listeners, which I know can be condensed, but for now this does the job. 

In this basic quiz application, the funcionailty is simple:
-with every click of a button, js will add a class to our elements, choosing which element to display and which one to hide
-each button has a value, either "correct" or "wrong"
-if the button with the "correct" value is chosen, then we add 1 to our number of correct ansers, otherwise we add 1 to the number of wrong ansers and we subtract one second
-scores are stored at the end (local storage)--although I haven't yet figured out how to make them appear from the highest number to the lowest
-final score = (# correct * 10) + timeLeft
-stats will reset so the quiz can be re-taken