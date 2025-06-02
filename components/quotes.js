document.addEventListener('DOMContentLoaded', () => { // wait for the DOM to be fully loaded

    const quoteBtn = document.getElementById('get-quote'); // get the button element
    const quoteText = document.getElementById('quote'); // get the quote text field where the quote will be displayed

    // Add the specified classes to the button
    quoteBtn.className = "bg-[#f6e05e] hover:bg-[#ff3b3b] text-black px-4 py-2 rounded shadow-md";

    function getQuote() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const quotes = [
                    { text: "Wish we could turn back time, to the good old days.", author: "Twenty One Pilots" },
                    { text: "My name's Blurryface and I care what you think.", author: "Twenty One Pilots" },
                    { text: "Sometimes to stay alive you gotta kill your mind.", author: "Twenty One Pilots" },
                    { text: "I ponder of something terrifying 'cause this time there's no sound to hide behind.", author: "Twenty One Pilots" },
                    { text: "I'll stay awake, 'cause the dark's not taking prisoners tonight.", author: "Twenty One Pilots" },
                    { text: "I'm fairly local, I've been around, I've seen the streets you're walking down.", author: "Twenty One Pilots" },
                    { text: "We're broken people.", author: "Twenty One Pilots" },
                    { text: "Sometimes you gotta bleed to know that you're alive and have a soul.", author: "Twenty One Pilots" },
                    { text: "I want to know you, I want to see, I want to say hello.", author: "Twenty One Pilots" },
                    { text: "If it wasn't for this music, I don't know how I would have fought this.", author: "Twenty One Pilots" }
                ];
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                resolve(randomQuote);
            }, 1000); // simulate 1 second delay
        });
    }

    quoteBtn.addEventListener('click', async () => {
        quoteText.textContent = 'Loading...';
        try {
            const randomQuote = await getQuote();
            console.log('Quote randomized successfully:', randomQuote);
            quoteText.textContent = `"${randomQuote.text}" - ${randomQuote.author || "Unknown"}`;
        } catch (error) {
            quoteText.textContent = 'Failed to fetch quote. Please try again later.';
            console.error('Error fetching quote:', error);
        }
    });

})