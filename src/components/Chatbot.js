import React, { useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
    key: process.env.REACT_APP_OPENAI_API_KEY,
});

function Chatbot() {
    //Component logic will go here
}

export default Chatbot;