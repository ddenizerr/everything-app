document.addEventListener('DOMContentLoaded', () =>{
    const counterField = document.getElementById('count'); // get the counter field
    const incrementBtn = document.getElementById('increment');
    const decrementBtn = document.getElementById('decrement');
    const resetBtn = document.getElementById('reset');

    let count = 0;

    incrementBtn.addEventListener('click', () => { 
        count++;
        counterField.textContent = count;
    })

    resetBtn.addEventListener('click', () => {
        count = 0; 

        counterField.textContent = count;

    })

    decrementBtn.addEventListener('click', () => { 
        count--;
        counterField.textContent = count;
    })

    
})