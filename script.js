// Get the necessary DOM elements
const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to add a message to the chat
function addMessage(message, isUser = false) {
    const messageClass = isUser ? 'user-message' : 'bot-message';
    const messageElement = `<div class="message ${messageClass}">${message}</div>`;
    chatBody.innerHTML += messageElement;
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
    const message = userInput.value.trim();
    userInput.value = '';

    if (message !== '') {
        addMessage(message, true);
        // Call your chatbot AI API or add your custom logic here
        // For this example, we'll use a simple rule-based approach
        const botResponse = getBotResponse(message);
        addMessage(botResponse);
    }
}

// Function to get the bot's response based on user input
function getBotResponse(userInput) {
    // Add your custom logic here to generate the bot's response
    // This is a simple rule-based example
    if (userInput.toLowerCase().includes('hello')  || userInput.toLowerCase().includes('hi') || userInput.toLowerCase().includes('hai')) {
        return 'Hello! Welcome to  schoolname.  I am ai, your Admission Assistant. How can I assist you today?';
                 
   

    } else if (userInput.toLowerCase().includes('how are you')) {
        return "I'm a chatbot. I don't have feelings, but thanks for asking!";
    } 
    else if (userInput.toLowerCase().includes('dashboard')) {
        // Handle dashboard option
        return'click here <a href="#">dashboard</a>';
    }
    else if (userInput.toLowerCase().includes('branch')) {
        // Handle branch option
        return'click here <a href="#">branch</a>';
    } else if (userInput.toLowerCase().includes('frontend')) {
        // Handle frontend option
        return'click here <a href="#">frontend</a>';

    } else if (userInput.toLowerCase().includes('reception')) {
        // Handle reception option
        return'click here <a href="#">reception</a>';

    } else if (userInput.toLowerCase().includes('admission')) {
        // Handle admission option
        return'click here <a href="#">admission</a>';

    } else if (userInput.toLowerCase().includes('student details')) {
        // Handle student details option
        return'click here <a href="#">student details</a>';

    } else if (userInput.toLowerCase().includes('parents')) {
        // Handle parents option
        return'click here <a href="#">parents</a>';

    } else if (userInput.toLowerCase().includes('employee')) {
        // Handle employee option
        return'click here <a href="#">employee</a>';

    } else if (userInput.toLowerCase().includes('card management')) {
        // Handle card management option
        return'click here <a href="#">card management</a>';

    } else if (userInput.toLowerCase().includes('certificate')) {
        // Handle certificate option
        return'click here <a href="#">certificate</a>';

    } else if (userInput.toLowerCase().includes('human resource')) {
        // Handle human resource option
        return'click here <a href="#">human resource</a>';

    } else if (userInput.toLowerCase().includes('academic')) {
        // Handle academic option
        return'click here <a href="#">academic</a>';

    } else if (userInput.toLowerCase().includes('live class rooms')) {
        // Handle live class rooms option
        return'click here <a href="#">live class rooms</a>';

    } else if (userInput.toLowerCase().includes('attachments book')) {
        // Handle attachments book option
        return'click here <a href="#">attachments book</a>';

    } else if (userInput.toLowerCase().includes('homework')) {
        // Handle homework option
        return'click here <a href="http://localhost/d/branch">homework</a>';

    } else if (userInput.toLowerCase().includes('exam master')) {
        // Handle exam master option
        return'click here <a href="http://localhost/d/branch">exam master</a>';

    } else if (userInput.toLowerCase().includes('online exam')) {
        // Handle online exam option
        return'click here <a href="http://localhost/d/branch">online exam</a>';

    } else if (userInput.toLowerCase().includes('supervision')) {

        return'click here <a href="http://localhost/d/branch">supervision</a>';

        // Handle supervision option
    } else if (userInput.toLowerCase().includes('attendance')) {
        // Handle attendance option
        return'click here <a href="http://localhost/d/branch">branch</a>';

    } else if (userInput.toLowerCase().includes('library')) {
        // Handle library option
        return'click here <a href="http://localhost/d/branch">attendance</a>';

    } else if (userInput.toLowerCase().includes('events')) {
        // Handle events option
        return'click here <a href="http://localhost/d/branch">branch</a>';

    } else if (userInput.toLowerCase().includes('bulk sms and email')) {
        // Handle bulk sms and email option
        return'click here <a href="http://localhost/d/branch">events</a>';

    } else if (userInput.toLowerCase().includes('student accounting')) {
        return'click here <a href="http://localhost/d/branch">student accounting</a>';

        // Handle student accounting option
    } else if (userInput.toLowerCase().includes('office accounting')) {
        // Handle office accounting option
        return'click here <a href="http://localhost/d/branch">office accounting</a>';

    } else if (userInput.toLowerCase().includes('message')) {
        // Handle message option
        return'click here <a href="http://localhost/d/branch">message</a>';

    } else if (userInput.toLowerCase().includes('reports')) {
        // Handle reports option
        return'click here <a href="http://localhost/d/branch">reports</a>';

    } else if (userInput.toLowerCase().includes('settings')) {
        // Handle settings option
        return'click here <a href="http://localhost/d/branch">settings</a>';

    } 
    else if (userInput.toLowerCase().includes('thanks')) {
        // Handle settings option
        return'You are welcome! If you have any more questions, feel free to ask. I m here to help!';

    } 

else if (userInput.toLowerCase().includes('student admission')) {
    // Handle settings option
    return'click here <a href="http://localhost/d/branch">student admission</a>';

} 


else if (userInput.toLowerCase().includes('about')) {
    // Handle settings option
    return'click here <a href="http://localhost/d/branch">about</a>';

} 


else if (userInput.toLowerCase().includes('helpline') || userInput.toLowerCase().includes('contact') ) {
    // Handle settings option
    return'click here <a href="http://localhost/d/branch">about</a>';

} 


    else {
        return "I'm sorry, I didn't understand that.";
    }
}

// Event listeners
sendButton.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
