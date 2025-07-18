import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Analytics from "../components/Dashboard/Analytics";
import RecentCases from "../components/Dashboard/RecentCases";
import '../styles/Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const [topic, setTopic] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [generatedContent, setGeneratedContent] = useState(""); // Store generated content

  // Handle navigation to features
  const handleNavigation = (path) => {
    navigate(path);
  };

  // Handle note creation
  const handleCreateNote = () => {
    if (topic && noteContent) {
      const newNote = { topic, noteContent };
      setNotes([...notes, newNote]);
      setTopic("");
      setNoteContent("");
    } else {
      alert("Please provide both topic and content for the note.");
    }
  };

  // Mock content generation logic based on topic
  const generateDocumentContent = () => {
    if (topic) {
      // Example: Static content generation based on predefined topics
      const topicData = {
        "Contracts": "This document is intended to serve as a legal contract between the parties involved...",
        "Intellectual Property": "This section discusses the intellectual property rights related to the invention or work created...",
        "Criminal Law": "In criminal law, offenses are classified into felonies and misdemeanors, each carrying different penalties...",
        "Family Law": "This document covers various aspects of family law, including divorce, child custody, and spousal support...",
        "Business Agreement": "This document serves as a formal agreement between two or more parties involved in a business venture, detailing terms, responsibilities, and legal commitments...",
        "Bike Registration": "This document covers the process for registering a bike, including providing necessary ownership details, vehicle identification number (VIN), and legal compliance for operating on roads...",
        "Land Registration": "This document outlines the registration of land, specifying ownership details, legal rights, and compliance with government regulations to ensure the rightful possession of the property...",
        "Property Registration": "This document includes the necessary legal procedures for registering property, including transfer of ownership, verification of land titles, and ensuring accurate government record-keeping for real estate transactions...",
      };
  
      setGeneratedContent(topicData[topic] || "No information available for this topic.");
    } else {
      alert("Please enter a topic to generate content.");
    }
  };
  


  return (
    <div className="dashboard-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/features">Features</Link>
        <button onClick={() => (window.location.href = "/")}>Logout</button>
      </nav>

      {/* Welcome Section */}
      <h1>Welcome to your Dashboard!</h1>
      <p>
        Access all the features of your AI-Powered Legal Assistant here, including document summarization, case searches, analytics, and more.
      </p>

      {/* Action Cards */}
      <div className="dashboard-actions">
        <div className="action-card">
          <h3>Document Summarizer</h3>
          <p>Summarize lengthy legal documents effortlessly.</p>
          <button onClick={() => handleNavigation("/features")}>Go to Summarizer</button>
        </div>
        <div className="action-card">
          <h3>Case Search</h3>
          <p>Find case laws and precedents with ease.</p>
          <button onClick={() => handleNavigation("/features")}>Search Cases</button>
        </div>
        <div className="action-card">
          <h3>Legal Notes</h3>
          <p>Create, organize, and review your legal notes.</p>
          <button onClick={() => handleNavigation("/features")}>Create Notes</button>
        </div>
      </div>

      {/* Legal Notes Creation Section */}
      <h2>Create Legal Notes</h2>
      <div className="create-note-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Topic:</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter topic for document generation"
            />
          </div>

          <div>
            <label>Content:</label>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Enter your notes here"
            />
          </div>

          <button type="button" onClick={handleCreateNote}>
            Save Note
          </button>
        </form>
      </div>

      {/* Document Content Generation Section */}
      <h2>Generate Document Content</h2>
      <div className="generate-content-section">
        <button onClick={generateDocumentContent}>Generate Content for Topic</button>
        {generatedContent && (
          <div className="generated-content">
            <h3>Generated Content for Topic: {topic}</h3>
            <p>{generatedContent}</p>
          </div>
        )}
      </div>

      {/* Display Created Notes */}
      {notes.length > 0 && (
        <div className="notes-list">
          <h3>Your Notes</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>
                <h4>{note.topic}</h4>
                <p>{note.noteContent}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Analytics Section */}
      <h2>Analytics</h2>
      <Analytics />

      {/* Recent Cases Section */}
      <h2>Recent Cases</h2>
      <RecentCases />
    </div>
  );
};

export default Dashboard;
