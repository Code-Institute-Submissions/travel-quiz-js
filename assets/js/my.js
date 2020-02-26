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
                <input type="radio" name="question${questionNumber}" value="${letter}">  
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
                countryToGoTo = '1';
            case 'TTTTF':
                countryToGoTo = '2';
            case 'TTTFT':
                countryToGoTo = '3';
            case 'TTTFF':
                countryToGoTo = '4';
            case 'TTFTT':
                countryToGoTo = '5';
            case 'TTFTF':
                countryToGoTo = '6';
            case 'TTFFT':
                countryToGoTo = '7';
            case 'TTFFF':
                countryToGoTo = '8';
            case 'TFTTT':
                countryToGoTo = '9';
            case 'TFTTF':
                countryToGoTo = '10';
            case 'TFTFT':
                countryToGoTo = '11';
            case 'TFTFF':
                countryToGoTo = '12';
            case 'TFFTT':
                countryToGoTo = '13';
            case 'TFFTF':
                countryToGoTo = '14';
            case 'TFFFT':
                countryToGoTo = '15';
            case 'TFFFF':
                countryToGoTo = '16';
            case 'FTTTT':
                countryToGoTo = '17';
            case 'FTTTF':
                countryToGoTo = '18';
            case 'FTTFT':
                countryToGoTo = '19';
            case 'FTTFF':
                countryToGoTo = '20';
            case 'FTFTT':
                countryToGoTo = '21';
            case 'FTFTF':
                countryToGoTo = '22';
            case 'FTFFT':
                countryToGoTo = '23';
            case 'FTFFF':
                countryToGoTo = '24';
            case 'FFTTT':
                countryToGoTo = '25';
            case 'FFTTF':
                countryToGoTo = '26';
            case 'FFTFT':
                countryToGoTo = '27';
            case 'FFTFF':
                countryToGoTo = '28';
            case 'FFFTT':
                countryToGoTo = '29';
            case 'FFFTF':
                countryToGoTo = '30';
            case 'FFFFT':
                countryToGoTo = '31';
            case 'FFFFF':
                countryToGoTo = '32';

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

    // Variables
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    const myQuestions = [
        {
            question: "I want to be in a hot and sunny country.",
            answers: {
                A: "Yes! I love the heat.",
                B: "No, I prefer the cooler side of life."
            },
            correctAnswer: "A" // we need to refer to the correct answer so we can use this to make sure T(rue) or F(alse) is added to the answer string.
        },

        {
            question: "I want to be in a mountain range landscape.",
            answers: {
                A: "Sounds great!",
                B: "No thanks, mountains aren't for me."
            },
            correctAnswer: "A"
        },
        {
            question: "I want to be able to speak English.",
            answers: {
                A: "Yes, that is a definite must!",
                B: "No I am happy to learn the lingo."
            },
            correctAnswer: "A"
        },
        {
            question: "I want to be surrounded with wildlife!",
            answers: {
                A: "Absolutely!",
                B: "No I prefer the a city environment."
            },
            correctAnswer: "A"
        },
        {
            question: "I want to participate in extreme sports whilst I am away",
            answers: {
                A: "Sounds right up my street.",
                B: "Absolutely not!"
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