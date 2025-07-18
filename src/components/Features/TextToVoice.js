import React, { useState } from 'react';
import "./TextToVoice.css";
const TextToVoice = () => {
  const [text, setText] = useState('');
  
  // Function to handle text-to-speech
  const handleTextToVoice = () => {
    const speech = new SpeechSynthesisUtterance(text);
    
    // Set speech properties (Optional)
    speech.volume = 1; // Volume (0 to 1)
    speech.rate = 1; // Rate (0.1 to 10)
    speech.pitch = 1; // Pitch (0 to 2)

    // Speak the text
    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="text-to-voice-container">
      <h2>Text to Voice</h2>
      <textarea
        placeholder="Type your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleTextToVoice} disabled={!text}>
        Play Text
      </button>
    </div>
  );
};

export default TextToVoice;
