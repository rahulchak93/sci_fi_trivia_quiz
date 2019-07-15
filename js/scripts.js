function displayResult(score) {
    if (score == 5) {
        document.getElementById('resultContent').innerHTML = "Congrats you got all right !!";
    } else {
        document.getElementById('resultContent').innerHTML = "You got "+score +" out of 5 correct.";
    }
    $('#resultModal').modal('show');

}


function evalSWQuiz() {
    var score = 0;
    if ($("#lswq12").hasClass("active")) {
        score++;
    }
    if ($("#lswq23").hasClass("active")) {
        score++;
    }
    if ($("#lswq33").hasClass("active")) {
        score++;
    }
    if ($("#lswq41").hasClass("active")) {
        score++;
    }
    if ($("#lswq54").hasClass("active")) {
        score++;
    }
    displayResult(score);
}

function evalFQuiz() {
    var score = 0;
    if ($("#lfq13").hasClass("active")) {
        score++;
    }
    if ($("#lfq24").hasClass("active")) {
        score++;
    }
    if ($("#lfq32").hasClass("active")) {
        score++;
    }
    if ($("#lfq41").hasClass("active")) {
        score++;
    }
    if ($("#lfq52").hasClass("active")) {
        score++;
    }
    displayResult(score);
}

function evalRMQuiz() {
    var score = 0;
    if ($("#lrmq14").hasClass("active")) {
        score++;
    }
    if ($("#lrmq22").hasClass("active")) {
        score++;
    }
    if ($("#lrmq31").hasClass("active")) {
        score++;
    }
    if ($("#lrmq41").hasClass("active")) {
        score++;
    }
    if ($("#lrmq53").hasClass("active")) {
        score++;
    }
    displayResult(score);
}

$("#closeResultModal").click(function () {
    $('#resultModal').modal('hide')
});