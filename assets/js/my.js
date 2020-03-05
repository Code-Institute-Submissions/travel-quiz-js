
(function () {

    // functions: 
    // 1) buildQuiz 2) showSlide 3) showNextSlide 4) showPreviousSlide 5) showResults

    function buildQuiz() {   // making the innerhtml of the quiz container including radio buttons, questions etc. 

        const output = [];

        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                const answers = [];

                for (letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                <input type="radio" class="radioBig" name="question${questionNumber}" value="${letter}">  
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
    
    function showResults() {

        const answerContainers = quizContainer.querySelectorAll('.answers');  // finding all the possible answers from the quiz 

        var answerArray = "";
        var countryToGoTo = "";

        myQuestions.forEach((currentQuestion, questionNumber) => {

            const answerContainer = answerContainers[questionNumber];   // ?  
            const selector = `input[name=question${questionNumber}]:checked`;   // ?
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;  // ? finding specifically the checked answers

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
                break;
            case 'TTTTF':
                countryToGoTo = 'TENERIFE';
                break;
            case 'TTTFT':
                countryToGoTo = 'SANTIAGO, U.S.A';
                break;
            case 'TTTFF':
                countryToGoTo = 'VALENCIA, SPAIN';
                break;
            case 'TTFTT':
                countryToGoTo = 'LAOS';
                break;
            case 'TTFTF':
                countryToGoTo = 'COLUMBIA';
                break;
            case 'TTFFT':
                countryToGoTo = 'KUALA LUMPUR, MALAYSIA';
                break;
            case 'TTFFF':
                countryToGoTo = 'TURKEY';
                break;
            case 'TFTTT':
                countryToGoTo = 'QUEENSLAND, AUSTRALIA';
                break;
            case 'TFTTF':
                countryToGoTo = 'BARBADOS';
                break;
            case 'TFTFT':
                countryToGoTo = 'PORTUGAL';
                break;
            case 'TFTFF':
                countryToGoTo = 'SEVILLE, SPAIN';
                break;
            case 'TFFTT':
                countryToGoTo = 'NORTHERN PROVINCE, SRI LANKA';
                break;
            case 'TFFTF':
                countryToGoTo = 'BORNEO';
                break;
            case 'TFFFT': 
                countryToGoTo = 'OMAN';
                break;
            case 'TFFFF':
                countryToGoTo = 'KUWAIT';
                break;
            case 'FTTTT':
                countryToGoTo = 'BRITISH COLUMBIA, CANADA';
                break;
            case 'FTTTF':
                countryToGoTo = 'SWITZERLAND';
                break;
            case 'FTTFT':
                countryToGoTo = 'VAL-D\'SERE, FRANCE';
                break;
            case 'FTTFF':
                countryToGoTo = 'ZURICH, SWITZERLAND';
                break;
            case 'FTFTT':
                countryToGoTo = 'LIECHTENSTEIN';
                break;
            case 'FTFTF':
                countryToGoTo = 'ULUGH MUZTAGH, CHINA';
                break;
            case 'FTFFT':
                countryToGoTo = 'ULAAN BATAAR, MONGOLIA';
                break;
            case 'FTFFF':
                countryToGoTo = 'FUJI, JAPAN';
                break;
            case 'FFTTT':
                countryToGoTo = 'DENMARK';
                break;
            case 'FFTTF':
                countryToGoTo = 'NEW FOREST, ENGLAND';
                break;
            case 'FFTFT':
                countryToGoTo = 'TORONTO, CANADA';
                break;
            case 'FFTFF':
                countryToGoTo = 'NORTH POLE, ARCTIC';
                break;
            case 'FFFTT':
                countryToGoTo = 'ICELAND';
                break;
            case 'FFFTF':
                countryToGoTo = 'ESTONIA';
                break;
            case 'FFFFT':
                countryToGoTo = 'FINLAND';
                break;
            case 'FFFFF':
                countryToGoTo = 'MOSCOW, RUSSIA';
        }

        resultsContainer.innerHTML = `${countryToGoTo}!`;

    }


    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;

        if(currentSlide === 0){
            previousButton.style.display = 'none';
        } else{
            previousButton.style.display = 'inline-block';
        }
        if(currentSlide === slides.length-1){
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else{
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

    $("#submit").click(function(){
        $(".quiz-container").hide();
    })

    $("#submit").click(function(){
        $("#submit").hide();
    })

    $("#submit").click(function(){
        $("#previous").hide();
    })

    $("#submit").click(function(){
        $("#next").hide();
    })

    $("#results").hide();

    $("#submit").click(function(){
        $("#results").show();
    })

    $("#map").hide();

    $("#submit").click(function(){
        $("#map").show();
    })

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

})();

/*-- JavaScript for Google Maps ---*/

    function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: {
            lat: 51.509865,     // add a case statement with all lng and lat, depends on the tf string.. 
            lng: -0.118092
        }
    });
}


// 
/*-- Javascript for About page stylings --*/

// $("#card").mouseenter(function() {
//     $("#card").css("color", "#fff");
// });