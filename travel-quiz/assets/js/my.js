// Inspiration was taken from https://www.sitepoint.com/simple-javascript-quiz/ to build the basic structure
// of the quiz and then edited and added too to gain the required result. 


(function () {

    function buildQuiz() {   // making the innerhtml of the quiz container including radio buttons, questions etc. 

        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];

                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                <input type="radio" class="radioBig" name="question${questionNumber}" value="${letter}" checked="checked">  
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
                    );
                }

                output.push(
                    `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
             </div>`
                );

            }

        );

        quizContainer.innerHTML = output.join('');

    }

    /*--- Stringing together results and rendering the correct Country in the results container ---*/

    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');  // finding all the possible answers from the quiz 
        
        var answerArray = "";
        var countryToGoTo = "";
        var latlng = {};

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];  
            const selector = `input[name=question${questionNumber}]:checked`;   
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;  

            if (userAnswer === currentQuestion.correctAnswer) {
                console.log('true');
                answerArray = answerArray.concat('T');
            } else {
                console.log('false');                         
                answerArray = answerArray.concat('F');
            }

        });

        console.log(answerArray);

        // Combination answers and countryToGoTo

        switch (answerArray) {
            case 'TTTTT':
                countryToGoTo = ' KAHULUI, HAWAII';
                latlng = {
                    lat: 20.889331,
                    lng: -156.472896
                };
                break;
            case 'TTTTF':
                countryToGoTo = 'BELGRADE, SERBIA';
                latlng = {
                    lat: 44.818611,
                    lng: 20.468056
                };
                break;
            case 'TTTFT':
                countryToGoTo = 'SANTIAGO, CHILE';
                latlng = {
                    lat: -33.459229,
                    lng: -70.645348
                };
                break;
            case 'TTTFF':
                countryToGoTo = 'Barcelona, SPAIN';
                latlng = {
                    lat: 41.385155,
                    lng: 2.173695
                };
                break;
            case 'TTFTT':
                countryToGoTo = 'VIENTIANE, LAOS';
                latlng = {
                    lat: 19.8562698,
                    lng: 102.4954987
                };
                break;
            case 'TTFTF':
                countryToGoTo = 'BOGOTA, COLOMBIA';
                latlng = {
                    lat: 4.6,
                    lng: -74.0833333
                };
                break;
            case 'TTFFT':
                countryToGoTo = 'KUALA LUMPUR, MALAYSIA';
                latlng = {
                    lat: 3.140853,
                    lng: 101.693207
                };
                break;
            case 'TTFFF':
                countryToGoTo = 'ISTANBUL, TURKEY';
                latlng = {
                    lat: 41.0186111,
                    lng: 28.9647222
                };
                break;
            case 'TFTTT':
                countryToGoTo = 'QUEENSLAND, AUSTRALIA';
                latlng = {
                    lat: -20.917574,
                    lng: 142.702789
                };
                break;
            case 'TFTTF':
                countryToGoTo = 'BRIDGETOWN, BARBADOS';
                latlng = {
                    lat: 13.1,
                    lng: -59.6166667
                };
                break;
            case 'TFTFT':
                countryToGoTo = 'LISBON, PORTUGAL';
                latlng = {
                    lat: 38.7166667,
                    lng: -9.1333333
                };
                break;
            case 'TFTFF':
                countryToGoTo = 'SEVILLE, SPAIN';
                latlng = {
                    lat: 37.392529,
                    lng: -5.994072
                };
                break;
            case 'TFFTT':
                countryToGoTo = 'COLOMBO, SRI LANKA';
                latlng = {
                    lat: 6.9319444,
                    lng: 79.8477778
                };
                break;
            case 'TFFTF':
                countryToGoTo = 'BORNEO';
                latlng = {
                    lat: 3.354681,
                    lng: 117.596543
                };
                break;
            case 'TFFFT':
                countryToGoTo = 'MASKAT, OMAN';
                latlng = {
                    lat: 23.6133333,
                    lng: 58.5933333
                };
                break;
            case 'TFFFF':
                countryToGoTo = 'KUWAIT CITY, KUWAIT';
                latlng = {
                    lat: 29.3697222222,
                    lng: 47.9783333333
                };
                break;
            case 'FTTTT':
                countryToGoTo = 'BRITISH COLUMBIA, CANADA';
                latlng = {
                    lat: 49.246292,
                    lng: -123.116226
                };
                break;
            case 'FTTTF':
                countryToGoTo = 'BRASOV, ROMANIA';
                latlng = {
                    lat: 45.6333333,
                    lng: 25.5833333
                };
                break;
            case 'FTTFT':
                countryToGoTo = 'VAL-D\'SERE, FRANCE';
                latlng = {
                    lat: 45.448032,
                    lng: 6.980226
                };
                break;
            case 'FTTFF':
                countryToGoTo = 'ZURICH, SWITZERLAND';
                latlng = {
                    lat: 47.3666687,
                    lng: 8.5500002
                };
                break;
            case 'FTFTT':
                countryToGoTo = 'VADUZ SURROUNDINGS, LIECHTENSTEIN';
                latlng = {
                    lat: 47.140938,
                    lng: 9.521138
                };
                break;
            case 'FTFTF':
                countryToGoTo = 'ULUGH MUZTAGH, CHINA';
                latlng = {
                    lat: 36.40749837, 
                    lng: 87.383831798
                };
                break;
            case 'FTFFT':
                countryToGoTo = 'ULAAN BATAAR, MONGOLIA';
                latlng = {
                    lat: 47.92123, 
                    lng: 106.918556
                };
                break;
            case 'FTFFF':
                countryToGoTo = 'FUJI, JAPAN';
                latlng = {
                    lat: 35.360638,
                    lng: 138.72905
                };
                break;
            case 'FFTTT':
                countryToGoTo = ' RONDE, DENMARK';
                latlng = {
                    lat: 56.3,
                    lng: 10.4833333
                };
                break;
            case 'FFTTF':
                countryToGoTo = 'NEW FOREST, ENGLAND';
                latlng = {
                    lat: 50.879, 
                    lng: -1.6330
                };
                break;
            case 'FFTFT':
                countryToGoTo = 'TORONTO, CANADA';
                latlng = {
                    lat: 43.65107, 
                    lng: -79.347015
                };
                break;
            case 'FFTFF':
                countryToGoTo = 'NORTH POLE, ARCTIC';
                latlng = {
                    lat: 64.751114, 
                    lng: -147.349442
                };
                break;
            case 'FFFTT':
                countryToGoTo = 'AKUREYRI, ICELAND';
                latlng = {
                    lat: 65.6666667,
                    lng: -18.1
                };
                break;
            case 'FFFTF':
                countryToGoTo = 'PALDISKI, ESTONIA';
                latlng = {
                    lat: 59.3566667, 
                    lng: 24.0530556
                };
                break;
            case 'FFFFT':
                countryToGoTo = 'SALO, FINLAND';
                latlng = {
                    lat: 60.3833333, 
                    lng: 23.1333333
                };
                break;
            case 'FFFFF':
                countryToGoTo = 'MOSCOW, RUSSIA';
                latlng = {
                    lat: 55.751244, 
                    lng: 37.618423
                };
                break;
        }

        initMap(latlng);

        resultsContainer.innerHTML = `${countryToGoTo}!`;

    }

    /* -- Show questions and next, previous and submit buttoms --*/

    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    /*-- Show and Hide Quiz container, Results containers, Buttons and Google Maps --*/

    $("#submit").click(function () {
        $(".quiz-container").hide();
    });

    $("#submit").click(function () {
        $("#submit").hide();
    });

    $("#submit").click(function () {
        $("#previous").hide();
    });

    $("#submit").click(function () {
        $("#next").hide();
    });

    $("#results").hide();

    $("#submit").click(function () {
        $("#results").show();
    });

    $("#map").hide();

    $("#submit").click(function () {
        $("#map").show();
    });

    // Variables
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const myQuestions = [
        {
            question: '"I want to be in a hot and sunny country."',
            answers: {
                A: '"Yes! I love the heat."',
                B: '"No, I prefer the cooler side of life."'
            },
            correctAnswer: "A" // we need to refer to the correct answer so we can use this to make sure T(rue) or F(alse) is added to the answer string.
        },

        {
            question: '"I want to be in a mountain range landscape."',
            answers: {
                A: '"Sounds great!"',
                B: '"No thanks, mountains are not for me."'
            },
            correctAnswer: "A"
        },
        {
            question: '"I want to be able to speak English."',
            answers: {
                A: '"Yes, that is a definite must!"',
                B: '"No I am happy to learn the lingo."'
            },
            correctAnswer: "A"
        },
        {
            question: '"I want to be surrounded with wildlife!"',
            answers: {
                A: '"Absolutely!"',
                B: '"No I prefer the a city environment."'
            },
            correctAnswer: "A"
        },
        {
            question: '"I want to participate in extreme sports whilst I am away"',
            answers: {
                A: '"Sounds right up my street."',
                B: '"Absolutely not!"'
            },
            correctAnswer: "A"
        }
    ];

    buildQuiz(); 

    // Event Listeners
    submitButton.addEventListener('click', showResults);
    nextButton.addEventListener('click', showNextSlide);
    previousButton.addEventListener('click', showPreviousSlide);


    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(currentSlide);

    function initMap(latlng) {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: latlng
    });
   
}


})();

