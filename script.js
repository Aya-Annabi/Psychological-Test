document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get answers
    let q1 = document.querySelector('input[name="q1"]:checked').value;
    let q2 = document.querySelector('input[name="q2"]:checked').value;
    let q3 = document.querySelector('input[name="q3"]:checked').value;
    let q4 = document.querySelector('input[name="q4"]:checked').value;
    let q5 = document.querySelector('input[name="q5"]:checked').value;
    let q6 = document.querySelector('input[name="q6"]:checked').value;
    let q7 = document.querySelector('input[name="q7"]:checked').value;
    let q8 = document.querySelector('input[name="q8"]:checked').value;

    // Tally the results
    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;
    let scoreD = 0;

    // Count the answers
    [q1, q2, q3, q4, q5, q6, q7, q8].forEach(answer => {
        if (answer === "A") scoreA++;
        if (answer === "B") scoreB++;
        if (answer === "C") scoreC++;
        if (answer === "D") scoreD++;
    });

    // Determine result
    let resultText = "";
    if (scoreA > scoreB && scoreA > scoreC && scoreA > scoreD) {
        resultText = "You are in harmony with your mental and physical health.";
    } else if (scoreB > scoreA && scoreB > scoreC && scoreB > scoreD) {
        resultText = "You have a balanced approach to life.";
    } else if (scoreC > scoreA && scoreC > scoreB && scoreC > scoreD) {
        resultText = "You are dynamic but should take more care of yourself.";
    } else {
        resultText = "You tend to neglect your well-being.";
    }

    // Display result
    document.getElementById('result').innerHTML = `<h2>Result</h2><p>${resultText}</p>`;
    document.getElementById('result').style.display = 'block';
});
