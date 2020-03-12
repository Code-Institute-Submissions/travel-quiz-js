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
                countryToGoTo = 'HAWAII';
                latlng = {
                    lat: 19.8968,
                    lng: -155.5828
                };
                break;
            case 'TTTTF':
                countryToGoTo = 'TENERIFE';
                latlng = {
                    lat: 28.048906,
                    lng: -16.711597
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
                countryToGoTo = 'VALENCIA, SPAIN';
                latlng = {
                    lat: 39.466667,
                    lng: -0.375000
                };
                break;
            case 'TTFTT':
                countryToGoTo = 'LAOS';
                latlng = {
                    lat: 19.8562698,
                    lng: 102.4954987
                };
                break;
            case 'TTFTF':
                countryToGoTo = 'COLOMBIA';
                latlng = {
                    lat: 3.900749,
                    lng: -73.073215
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
                countryToGoTo = 'TURKEY';
                latlng = {
                    lat: 38.963745,
                    lng: 35.243322
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
                countryToGoTo = 'BARBADOS';
                latlng = {
                    lat: 13.193887,
                    lng: -59.543198
                };
                break;
            case 'TFTFT':
                countryToGoTo = 'PORTUGAL';
                latlng = {
                    lat: 38.736946,
                    lng: -9.142685
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
                countryToGoTo = 'NORTHERN PROVINCE, SRI LANKA';
                latlng = {
                    lat: 9.6684504,
                    lng: 80.0074234
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
                countryToGoTo = 'OMAN';
                latlng = {
                    lat: 21.5125828,
                    lng: 55.9232559
                };
                break;
            case 'TFFFF':
                countryToGoTo = 'KUWAIT';
                latlng = {
                    lat: 29.3116608,
                    lng: 47.4817657
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
                countryToGoTo = 'SWITZERLAND';
                latlng = {
                    lat: 46.8181877,
                    lng: 8.2275124
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
                countryToGoTo = 'LIECHTENSTEIN';
                latlng = {
                    lat: 47.1675,
                    lng: 9.510530
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
                countryToGoTo = 'DENMARK';
                latlng = {
                    lat: 55.676098,
                    lng: 12.568337
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
                countryToGoTo = 'ICELAND';
                latlng = {
                    lat: 64.128288,
                    lng: -21.827774
                };
                break;
            case 'FFFTF':
                countryToGoTo = 'ESTONIA';
                latlng = {
                    lat: 59.4369583, 
                    lng: 24.7535305
                };
                break;
            case 'FFFFT':
                countryToGoTo = 'FINLAND';
                latlng = {
                    lat: 60.192059, 
                    lng: 24.945831
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

