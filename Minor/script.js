// script.js
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const rating = document.getElementById('rating').value;
    const feedback = document.getElementById('feedback').value.trim();

    if (name && email && rating && feedback) {
        document.getElementById('response-message').textContent = 'Thank you for your feedback!';
        document.getElementById('feedback-form').reset();
    } else {
        document.getElementById('response-message').textContent = 'Please fill out all fields.';
        document.getElementById('response-message').style.color = 'red';
    }
});
