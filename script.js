// Define an async function that introduces a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Define an async function to handle form submission
const handleSubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve user input values
    const text = document.getElementById('text').value;
    const delayTime = parseInt(document.getElementById('delay').value, 10);

    // Validate input values
    if (!text) {
        alert('Please enter a message.');
        return;
    }
    if (isNaN(delayTime) || delayTime < 0) {
        alert('Please enter a valid delay time in milliseconds.');
        return;
    }

    // Introduce the delay using async/await
    await delay(delayTime*1000);

    // Display the message after the delay
    document.getElementById('output').innerText = text;
};

// Attach the event listener to the form
document.getElementById('myForm').addEventListener('submit', handleSubmit);
