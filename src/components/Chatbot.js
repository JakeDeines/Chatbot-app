import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
    key: process.env.REACT_APP_OPENAI_API_KEY,
});

function Chatbot() {
    //Component logic will go here
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    async function sendMessage() {
        // code to send messages to the chatbot will go here

    }
}//jsx for rendering the chat interface will go here

return (
    <div>
        {/* jsx for chat interface */}
    </div>
)

export default Chatbot;