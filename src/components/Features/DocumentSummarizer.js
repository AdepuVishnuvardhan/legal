import React, { useState } from "react";
import "./DocumentSummarizer.css";
const DocumentSummarizer = () => {
  const [document, setDocument] = useState("");
  const [summary, setSummary] = useState("");

  const handleSummarize = () => {
    if (document.trim() === "") {
      alert("Please paste a document to summarize.");
      return;
    }
    // Mock summary logic
    setSummary("This is a brief summary of the provided document.");
  };

  return (
    <div className="summarizer-container">
      <h2>Document Summarizer</h2>
      <textarea
        placeholder="Paste your document here..."
        value={document}
        onChange={(e) => setDocument(e.target.value)}
      ></textarea>
      <button onClick={handleSummarize}>Summarize</button>
      {summary && <p>Summary: {summary}</p>}
    </div>
  );
};

export default DocumentSummarizer;
