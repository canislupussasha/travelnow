<div align="center">

# Travel Questionnaire

<p>This site is a fully interative and responsive travel quiz, to help the user
decide on where is best to travel dependant on their specific wants and needs 
at that time. Once answered a comprehensive set of questions, they will be given 
a tailored recommendation for a destination, and more information as of where this place is
on Google maps. I am also looking to include links to a flight and accomodation
comparison sites.</p>

#

## Why is this project unique?
<p>There are many accomodation and flight comparison sites out there, but you need to know
the destination prior to researching. There are also very simple questionnaires out there to help you make a 
decision on your destination. As far as I can see there is not a site to combine all the 
neccessary steps to travel, from researching the best place for you, to booking your trip.
As you can see in the Releases section, the amount and specificity of the questions will 
increase and therefore the quiz will be unique within itself.</p>
</div>

#

## UX

### Project Goals
<p>To provide an efficient way to help a user find there ideal travel destination
without having to to lots of research into their requirements. Also to provide
more information on that destination to aid with the follow up research needed.</p>

#

### User Goals
<p>To understand where to go away on their next travel exertion, somewhere that is
completely suited to their preferences, saving them lots of time. Also wanting clear paths
on where to go next so they can plan their trip</p>

#

### User Stories
#### As a user...
1. I want simple, concise questions so I can complete the quiz quickly.
2. I don't want too many answer options so I don't get overwhelmed by the choice and can't make a decision.
3. I want a simple design, so not to distract from the questions in the quiz.
4. I want location information on my chosen country so I can follow up from the quiz.
5. I want a large font and buttons so I can navigate and read easily. 

## Design choices
<p>I have chosen a minilistic design, it is a simple front-end concept, therefore I wanted to keep all the attention on the quiz, 
allowing the user to complete it with efficiency. The goal is to allow the user to relax and become excited for a rejuvinating get away. 
I have kept all corners rounded to create a 'soft' affect, similarily I have added some transparency to containers holding content.
</p>

### Background Image
- This background image has a calming yet exciting feel due to the colour schemes. I chose purple, orange and pinks. 
Orange and pink are exciting colours to grab attention, whilst purple is calming and trustworthy. I also chose this background image
due to it's composition and perspective. The user is pulled into the scene and is now in the right mindset for the quiz!</li></ul>

### Font
- The headings and nav bar headings are white in colour to stand out on top of a multicoloured background. 
- The questions are a dark blue to match the blue tones in the background and stand out in the question container.</li>
- The font I chose was Montserrat. This is a simple but professional font, keeping in style with the minimilistic tone of the site.</li>
- Font sizes are large and responsive throughout. There is a varied demographic that would complete this quiz, we need to make sure
everyone is able to read the questions and answers with ease.


### Buttons

The buttons are large on all devises, this is to ease of use. They are also consistent with the colour theme and compliment
the colours on the background photo. The buttons change to a darker purple when the users cursor hovers over them, which turns into a pointer.
The user will know to click and move onto the next step.

#

## Wireframes
All Wireframes were created using [Balsamiq Wireframes](https://balsamiq.com/)

[Mobile Homepage](https://ibb.co/JrNCL0k)

[Desktop Homepage](https://ibb.co/pytVDzd)

[Mobile Question Page](https://ibb.co/6FbJMbY)

[Mobile Results page](https://ibb.co/v1zQkTX)

#

## Features</h2>

### Existing Features
1. #### About page
- Allows user to learn about the Questionnaire, and how to tackle it, before beginning. It is simple, and broken
down into 4 steps. 
2. #### Next, Previous and Submit Buttons
- Once started the Quiz, there are next and previous buttons when needed. Allows the user to smoothly
transition onto the next question. Allows there to only be neccessary information on the page.
3. #### Google maps on results 
- Allows the user to pin point their recommended location and research further. 
4. #### Footer
- Simple footer with information about the developer and date created. 

### Future Features
1. #### Destination finder
- At the start of their questionnaire, the user will be asked to input their destination. 
This is allow for questions that are more precise to other factors or travelling. Therefore the 
user will have a better tailored result. I will need to use other technologies to achieve this. 
2. #### More detailed questions
- I will include questions like "budget", "time that you are travelling" and "temperature". I will need to use other 
technologies to achieve cross referencing these more specific answers, with possible destinations. 
3. #### Animation 
- Animation of a flying plane will be added to the front page. This is for fun, and to engage with 
the user.
4. #### API's to comparison sites
- The user will be able to book flights, accomdation, car rental and activities through these connections 
with other companies. 

#

## Releases

### Release 1
- The first release will be a short quiz with 5 questions, the goal is to make accurate
recommendations, dependant on the users answers, of where they should travel to. When told their
destination, a Google Maps of that area will also be shown. 
### Release 2
- The goal of the second release is to increase the size and specificity of the quiz to allow for 
a presice location recommendation. The results will also be more informative, including links to comparison
sites and general information, for example, weather specifics. 
### Release 3
- The goal of the third release will be a large website with a very detailed questionnaire of 
their travelling preferences. The questionnaire will begin by asking them their current location, or where they
are travelling from and can therefore ask questions like **preferred airport** and **time travelling**. Once completed the 
questionnaire you will be provided with accomodation and flight comparisons. Information on weather
and costings, and all the extras needed to plan your time away. This will include API's to Booking.com and 
Skyscanner.net. This questionnaire will become an virtual travel consultant.

#

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JQuery
- BootStrap4
- GitHub
- GitPod
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)
- [Balsamiq Wireframes](https://balsamiq.com/)
- [Imgbb](https://imgbb.com/)
- [WC3 Markup Validation](https://validator.w3.org/)

#

## Testing

I began my testing using 

[HTML WC3 Markup Validation Service](https://validator.w3.org/).

[CSS WC3 Markup Validation Service](https://jigsaw.w3.org/css-validator/)

[JSHint](https://jshint.com/)


- The index.html, I needed to put my anchor tag on the startQuiz button on the outside of the button not inside the element.
- The about.html had no errors. 
- The question.html had no errors. 
- The main.css had no errors. 

- JSHint pointed out I needed semi-colons at the end of each of my case statements, I have added the neccessary semi-colons now. 
- No other errors, just warnings in regards to **const** being available in ES6, or Mozilla JS extensions.
### User Stories testing

1. I want simple, concise questions so I can complete the quiz quickly.
- The questions are actually statements, speaking as if we are the user. All of the statements are to the point, and 
easy to understand. 
2. I don't want too many answer options so I don't get overwhelmed by the choice and can't make a decision.
- The questionnaire is based on true or false. Therefore there are only two options at present, keeping it simple for the user.
3. I want a simple design, so not to distract from the questions in the quiz.
- The design is minimilistic yet asthetically pleasing, only absolutely neccessary information is taking up real estate. 
4. I want location information on my chosen country so I can follow up from the quiz.
- A Google map is rendered on the results page and functions well. It successfully only shows the recommended destination. 
5. I want a large font and buttons so I can navigate and read easily. 
- All buttons are large and clear. The font is consistent, large and responsive dependant on the devise. 


### Manual Testing
Myself and another person carried about the below tests on all sized devices, and different browsers: Google Chromer, Internet Explorer
and Mozilla Firefox. 

1. When you arrive on the homepage, the **Home** link in the nav bar is white, and the **About** link is a light grey. 
- Vice versa for the **About** page, the **About** page nav link is white, and the **Homepage** link is grey. 
2. When you hover over the **Start Quiz** button, the colour turns to a darker purple. 
3. When you click on the **Start Quiz** button, there is no blue outline that appears. 
4. Once you have clicked **Start Quiz**, the first slide appears. 
5. You can check both radio buttons, but you cannot check them both at the same time. 
6. On your first question, only the **Next** button appears below the slide. 
7. You can click **Next** and another slide appears, taking the place of the slide you were on. 
8. On the second slide you have both the **Next** button, and the **Previous** button below the slide. 
9. You are able to click **Previous** and change your previous answer. 
10. If you go back and change any answers, you still have the correct result dependant on the answerArray switch statement.
11. Click **Next** on each question without checking any of the answers, your result should be a default message saying **Please start the quiz again there seems to be an error**. 
12. Repeat the above, but check only a 1 answer, your result should be the above default message. 
13. Repeat the above 3 more times, first checking 2 answers, then 3 answers, then 4. As before, you should recieve the above default message.
14. On the **About** page, you are able to start the quiz by clicking the **Start Quiz** button at the bottom of the page.  


##### Bugs Found

1. When you click 'next' without actually checking any of the two possible answers, it would log your answers as if it was 'false,
and return Russia. 

2. When adding a default message to fix the bug above, the Google Maps would be blank as there was no longitude or latitude option. 

#### Resolved Bugs

1. I tried a number of methods to fix this bug. Firstly I tried including **required** into the input element in my.js file. 
This did not work. Therefore I researched and found that if I used a dropdown for my answers, it would require the user to have to
pick as result before moving on. I thought this through and decided this would not lend itself to the design of the site and ease of use. 
My best option was defensive programming; to have one of the answer radio buttons always **checked**, therefore the user is forced to change the answer if needed. 

2. The above resolve also resolved my second bug as there was now no need for a default message at all as there was no option for error now, 
and therefore no need for an error Google Maps. 

## Deployment

Travel quiz project was created using GitPod and regularly pushed to GitHub using the built in terminal.

1. git add ....file you are looking to push to GitHub
2. git commit -m "message to push with file"
3. git push

I deployed the project using GitHub pages...

1. Log into GitHub
2. Find the repository **travel-js-quiz**
3. Click into repository and click into **settings.** 
4. Scroll down to find the **GitHub pages** section. 
5. Click the dropdown named **none**, and select **master branch.**
6. Automatically, GitHub creates a link for you in this section, the project is deployed.  

#### Running this project locally

1. Log into your GitHub
2. Find the repository via this link [Travel Questionnaire](https://github.com/sw1ckham/travel-quiz-js)
3. Click on **clone or download**, copy the clone URL under **clone with HTTPS**.
4. Open up your IDE, and open **git bash**
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type **git clone**, and then paste the URL you copied. example: **$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**
7. Press Enter. Your local clone will be created.



## Credits

### Content
<p>All content written in this project was written by the developer.</p>

### Media (Images)
- I sourced my background photo from [Dreamstime](https://www.dreamstime.com/) All copyrights belong to them.
- I sourced 4 icons on my 'About' page from [Font Awesome](https://fontawesome.com/icons?d=gallery&q=home)

### Code

- I got inspiration for the basic structure of my quiz from [Site Point](https://www.sitepoint.com/simple-javascript-quiz/), I then changed
and edited the JavaScript to fit my purpose.
- Nav bar from [Codeply & Bootstrap 4](https://www.codeply.com/go/QAXbNGbWPA/bootstrap-4-navbar-transparent)
- Box shadow codes were generated at [CSS matic | box-shadow](https://www.cssmatic.com/box-shadow)
- CSS prefixes were added using [Autoprefixer](https://autoprefixer.github.io/)
- Card code on about page was taken from [BootStrap Documentation](https://getbootstrap.com/docs/4.3/components/card/) and edited.

### Achknowledgments
- A special thanks to my mentor Spencer for helping me throughout.
- Also to the student care team at The Code Institute for helping troubleshoot my code at those head scratching
moments!