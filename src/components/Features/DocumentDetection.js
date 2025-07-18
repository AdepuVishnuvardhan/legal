import React, { useState } from 'react';
import "./DocumentDetection.css";

const DocumentDetection = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleDetect = () => {
        if (file) {
            // Placeholder for document detection logic
            alert(`Detecting contents in the file: ${file.name}`);
        } else {
            alert('Please upload a document first!');
        }
    };

    return (
        <div>
            <h2>Document Detection</h2>
            <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} />
            <button onClick={handleDetect}>Detect Document</button>
        </div>
    );
};

export default DocumentDetection;
