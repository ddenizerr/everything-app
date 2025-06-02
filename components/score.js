document.addEventListener('DOMContentLoaded', () => { // wait for the DOM to be fully loaded
    // Get the button and score field by their IDs
    const trackingButton = document.getElementById('create-tracker');
    const studentName = document.getElementById('student-name');

    trackingButton.addEventListener('click', async () => {

        const name = studentName.ariaValueMax;
        if (!name) {
            alert('Please enter a student name.'); // Check if name is empty
            return;
        }

        studentName.textContent = 'Loading...'; // Set the score field to loading

        function createScoreTracker(studentName) {
            let score = 0;

            return {
                increase: () => {
                    score++;
                    updateDisplay();
                },
                decrease: () => {
                    score--;
                    updateDisplay();
                },
                getScore: () => {
                    return score;
                }
            }
        }

        function updateDisplay() {
            document.getElementById('score-display').textContent = `${studentName}'s Score: ${score}`;
        }

        const tracker = createScoreTracker(name);

        document.getElementById('tracker-controls').classList.remove('hidden');

        document.getElementById('increase-score').onclick = tracker.increase;
        document.getElementById('decrease-score').onclick = tracker.decrease;

    });

});