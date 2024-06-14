var dateEnd = new Date('2024-09-14T00:00:00'),
    dateNow = new Date(),
    date = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countdown() {
    var dateleft = date,
        dateTemp = 0;

    dateTemp = Math.floor(dateleft / (24 * 60 * 60));
    dateleft -= dateTemp * 24 * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#days span').innerHTML = dateTemp;

    dateTemp = Math.floor(dateleft / (60 * 60));
    dateleft -= dateTemp * 60 * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#hours span').innerHTML = dateTemp;

    dateTemp = Math.floor(dateleft / 60);
    dateleft -= dateTemp * 60;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#minutes span').innerHTML = dateTemp;

    dateTemp = dateleft;
    if (dateTemp < 10) dateTemp = '0' + dateTemp;
    document.querySelector('#seconds span').innerHTML = dateTemp;

    date--;
}

countdown(); // Call countdown function once immediately to avoid initial delay
setInterval(countdown, 1000);

document.addEventListener('DOMContentLoaded', function () {
    var animatedElements = document.querySelectorAll('.animated-element');

    function checkScroll() {
        animatedElements.forEach(function (element) {
            var elementPosition = element.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
            if (elementPosition < screenHeight * 0.75) {
                element.classList.add('animate');
            }
        });
    }

    window.addEventListener('scroll', checkScroll);
});
