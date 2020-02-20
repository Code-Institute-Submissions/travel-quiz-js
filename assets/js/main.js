function start() {

    var statements = [
        {
            statement1: "I want to be in a hot and sunny country!",
            answerA: "Yes! I love the heat.",
            answerB: "No, I prefer the cooler side of life."
        },
        {
            statement2: "I want to be in a mountain range landscape.",
            answerA: "Sounds great!",
            answerB: "No thanks, mountains aren't for me."
        },
        {
            statement3: "I want to be able to speak English.",
            answerA: "Yes, that is a definite must!",
            answerB: "No I am happy to learn the lingo."
        },
        {
            statement4: "I want to be surrrounded with wildlife.",
            answerA: "Absolutely I love the outdoors.",
            answerB: "No I am looking for more of a city break."
        },
        {
            statement5: "I want my destination to be family friendly.",
            answerA: "Of course!",
            answerB: "No I won't be travelling with family."
        }

    ]

var answerA = true;
var answerB = false;

    let array = [
        ["TTTTT",],
        ["TTTTF",],
        ["TTTFT",],
        ["TTTFF",],
        ["TTFTT",],
        ["TTFTF",],
        ["TTFFT",],
        ["TTFFF",],
        ["TFTTT",],
        ["TFTTF",],
        ["TFTFT",],
        ["TFTFF",],
        ["TFFTT",],
        ["TFFTF",],
        ["TFFFT",],
        ["TFFFF",],
        ["FTTTT",],
        ["FTTTF",],
        ["FTTFT",],
        ["FTTFF",],
        ["FTFTT",],
        ["FTFTF",],
        ["FTFFT",],
        ["FTFFF",],
        ["FFTTT",],
        ["FFTTF",],
        ["FFTFT",],
        ["FFTFF",],
        ["FFFTT",],
        ["FFFTF",],
        ["FFFFT",],
        ["FFFFF",]
    ];


    var answers = "";

    if(statement1 == true) {
       answers.push("T");
    }
    else if(statement1 == false) {
        answers.push("F");
    }

    if(statement2 == true) {
       answers.push("T");
    }
    else if(statement2 == false) {
        answers.push("F");
    }

    if(statement3 == true) {
       answers.push("T");
    }
    else if(statement3 == false) {
        answers.push("F");
    }

    if(statement4 == true) {
       answers.push("T");
    }
    else if(statement4 == false) {
        answers.push("F");
    }

    if(statement5 == true) {
       answers.push("T");
    }
    else if(statement5 == false) {
        answers.push("F");
    }


for (subarray in array) {
    if (subarray[0] == answers) {
        return subarray[1]; 
    }
}

}

// So you have an array of arrays. Each sub array is a unique set of answers, so there's 32 of them. Give each a country. Eg:
// ["TFFFT", "France"],
// Then when the user is going through the questions, you build a string from their answers:
// let answers = "";
// if (answer1 == true) {
//     answers.push("T");
// }
// You push either T or F to the string for each answer. Then at the end you have a string like TFTTF and you just compare:
// for subarray in array {
//     if subarray[0] == answers {
//         return subarray[1]; // return the country
//     }
// }
// So you check to find which of the premade strings match the new answers string, and return the matching country.
