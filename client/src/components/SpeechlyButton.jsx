import React, { useState, useEffect } from 'react';
import speechly from 'speechly';

const Conversation = () => {
  // Initialize the Speechly client
  const client = speechly.Client();

  // Start listening for speech when the button is pressed
  const handleListen = () => {
    // Wait for the user to say something
    const speech = client.listen();

    // Print out the transcribed text
    console.log(speech.text);

    // Respond to the user's input
    const response = "I heard you say: " + speech.text;
    client.speak(response);
  }

  return (
    <div>
      <button onClick={handleListen}>Listen</button>
    </div>
  );
}