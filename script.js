const socket = io();

// DOM elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messagesDiv = document.getElementById('messages');

// Send message when the send button is clicked
sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        socket.send(message);  // Send message to the server
        messageInput.value = '';  // Clear the input field
    }
});

// Receive messages from the server
socket.on('message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;  // Auto-scroll to the latest message
});