# Time-Running-Low
## Project Overview
In this project, I am to create a timed quiz over JS fundamentals. Upon clicking the Start Quiz button, the test shall begin and the timer in the top right corner of the page will begin its countdown starting at 60 seconds. If an incorrect answer is chosen then 10 seconds should be deducted from the remaining time, and "incorrect" should appear under the next question. If the correct answer is chosen then no time will be deducted, and "correct" should appear under the next question. The quiz will either end when time runs out or all questions have been answered. A final score should appear based on correct answers and time left, and the user should be able to input their initials to save their score. Their score should remain stored in the website for if the quiz is retaken, allowing the user to see any previous high scores.

##https://andrewsalesjr.github.io/time-running-low/
![Web capture_11-8-2022_62815_](https://user-images.githubusercontent.com/93755640/184125760-bdb42317-68b4-40fd-8186-33deba74588a.jpeg)

## Detailed Changes
First I created the basic structure of the HTML and CSS files, styling it according to the mockup.

Next I added initial variable declaration for the Start Quiz button, so when clicked the button would load the first question(replacing the initial introduction's heading).

I then worked on adding the next buttons for the answers of the first question, setting them as child elements to the first question using JS.

I attempted to update CSS accordingly for the newly created elements to have a style consistent with the original HTML elements.
