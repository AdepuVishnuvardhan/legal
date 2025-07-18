import React from 'react';
import '../styles/home.css'; // Your CSS file for home page

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <img src="/assets/hero-image.jpg" alt="Hero" className="hero-image" />
        <h1>Welcome to the AI-Powered Legal Assistant</h1>
        <p>Streamline legal tasks with AI to enhance productivity and accuracy.</p>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img
              src="/assets/summarizer-icon.png"
              alt="Document Summarizer"
              className="feature-icon"
            />
            <h3>Document Summarizer</h3>
            <p>Effortlessly summarize lengthy legal documents for quick insights.</p>
          </div>

          <div className="feature-card">
            <img
              src="/assets/search-icon.png"
              alt="Case Search"
              className="feature-icon"
            />
            <h3>Case Search</h3>
            <p>Find relevant case laws and precedents based on keywords.</p>
          </div>

          <div className="feature-card">
            <img
              src="/assets/voice-icon.png"
              alt="Text to Voice"
              className="feature-icon"
            />
            <h3>Text to Voice</h3>
            <p>Convert legal text into speech to make documents accessible.</p>
          </div>

          <div className="feature-card">
            <img
              src="/assets/document-detection-icon.png"
              alt="Document Detection"
              className="feature-icon"
            />
            <h3>Document Detection</h3>
            <p>Detect legal document types and categorize them automatically.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
