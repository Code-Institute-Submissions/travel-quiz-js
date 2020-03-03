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
                countryToGoTo = 'HAWAII!';
            case 'TTTTF':
                countryToGoTo = 'LAOS!';
            case 'TTTFT':
                countryToGoTo = 'SANTIAGO, U.S.A!';
            case 'TTTFF':
                countryToGoTo = 'VALENCIA, SPAIN!';
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