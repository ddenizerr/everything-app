document.addEventListener('DOMContentLoaded', () => {

    //get variables by id

    const jokeBtn = document.getElementById('get-joke');
    const jokeField = document.getElementById('joke');

    //define what the function will do when action is received.

    jokeBtn.addEventListener('click', async () => {
        //set the joke field to loading because promise
        // will take time to resolve
        jokeField.textContent = 'Loading...';

        try {
            const response = await fetch('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jokeData = await response.json();
            jokeField.textContent = jokeData.joke;

        } catch (error) {
            jokeField.textContent = 'Failed to fetch joke. Please try again later.';
        }
    });
});
