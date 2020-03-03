function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.1344766
        }
    });
}

switch (answerArray) {
            case 'TTTTT':
                center = {
                    lat: 19.8968,
                    lng: -155.5828
                }
            case 'TTTTF':
                center = {
                    lat: 19.8562698,
                    lng: 102.4954987
                }
            case 'TTTFT':
                center = {
                    lat: -33.459229,
                    lng: -70.645348
                };
            case 'TTTFF':
                center = {
                    lat: 39.466667, 
                    lng: -0.375000
                };
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




