import React from 'react';
import DocumentSummarizer from '../components/Features/DocumentSummarizer';
import CaseSearch from '../components/Features/CaseSearch';
import TextToVoice from '../components/Features/TextToVoice';
import DocumentDetection from '../components/Features/DocumentDetection';
import BotChat from '../components/Bot/BotChat';

const Features = () => {
  return (
    <div className="features-container p-6 max-w-5xl mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Key Features of the Legal Assistant</h1>

      <section className="feature-section bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">🧾 Document Summarizer</h2>
        <p>
          Quickly understand the core of lengthy legal documents using the built-in summarizer.
        </p>
        <DocumentSummarizer />
      </section>

      <section className="feature-section bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">🔍 Case Search</h2>
        <p>
          Search for relevant case laws and precedents using keywords or topics to save research time.
        </p>
        <CaseSearch />
      </section>

      <section className="feature-section bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">🔊 Text-to-Voice Translation</h2>
        <p>
          Convert written legal texts into audio for better accessibility and comprehension.
        </p>
        <TextToVoice />
      </section>

      <section className="feature-section bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">📄 Document Detection</h2>
        <p>
          Seamlessly detect and manage various legal documents to organize and prioritize cases effectively.
        </p>
        <DocumentDetection />
      </section>

      <section className="feature-section bg-white rounded-xl shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">🤖 AI Legal Bot Assistant</h2>
        <p>
          Chat with the bot to get answers for basic legal questions, contract help, and more.
        </p>
        <BotChat />
      </section>
    </div>
  );
};

export default Features;
