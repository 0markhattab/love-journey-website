function checkDate() {
    var inputDate = document.getElementById('dateInput').value;
    if (inputDate === "25/12/2023") {
        window.location.href = 'nextpage.html'; // Redirect to the next page if correct
    } else {
        alert('Incorrect date. Please try again.');
    }
}


function checkWord() {
    var inputWord = document.getElementById('loveInput').value;
    if (inputWord.toLowerCase() === "universe") {
        window.location.href = 'finalpage.html'; // This should redirect to finalpage.html
    } else {
        alert('Incorrect word. Please try again.');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('missYouText');
    text.style.opacity = 0;
    let opacity = 0;
    const interval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            text.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 50);
});
