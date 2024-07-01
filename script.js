// Get the Send Message button
const sendMessageButton = document.querySelector('input[type="submit"][value="Send Message"]');

// Add an event listener to the button
sendMessageButton.addEventListener("click", function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Display an alert box
  alert("Message sent successfully!");
});