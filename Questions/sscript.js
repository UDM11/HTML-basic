document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = parseInt(document.getElementById('age').value);
    const raceCategory = document.getElementById('raceCategory').value;

    if (age < 18) {
        alert("You must be 18 or older to participate.");
    } else {
        let confirmationMessage = '';
        if (raceCategory === '5K') {
            confirmationMessage = "Welcome to the 5K Marathon! Get ready to sprint!";
        } else if (raceCategory === '10K') {
            confirmationMessage = "Welcome to the 10K Marathon! Pace yourself and enjoy the run!";
        } else if (raceCategory === 'Half Marathon') {
            confirmationMessage = "Welcome to the Half Marathon! Prepare for an incredible challenge!";
        }

        const confirmationDiv = document.getElementById('confirmationMessage');
        confirmationDiv.textContent = confirmationMessage;
        confirmationDiv.style.display = 'block';
    }
});

document.getElementById('getHelpBtn').addEventListener('click', function() {
    const helpMessage = document.getElementById('helpMessage');
    helpMessage.textContent = "Please call +977: 9812345678 for more details.";
    helpMessage.style.display = 'block';
});
