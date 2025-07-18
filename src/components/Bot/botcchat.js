import React, { useState } from 'react';

const ipcKnowledgeBase = {
  "murder": "Section 302 of the Indian Penal Code – Punishment for murder.",
  "theft": "Section 378 of the IPC – Theft is defined, and Section 379 – Punishment for theft.",
  "rape": "Section 375 defines rape and Section 376 – Punishment for rape.",
  "kidnapping": "Section 359 – Kidnapping, Section 363 – Punishment for kidnapping.",
  "cyber crime": "Section 66C and 66D of the IT Act deal with identity theft and cheating by impersonation.",
  "domestic violence": "Protection of Women from Domestic Violence Act, 2005.",
  "dowry": "Dowry Prohibition Act, 1961 and Section 498A of IPC.",
  "cheating": "Section 415 defines cheating and Section 420 – Punishment for cheating.",
  "assault": "Section 351 defines assault, and Section 352 – Punishment for assault.",
  "trespassing": "Section 441 defines criminal trespass, Section 447 – Punishment for criminal trespass."
};

const BotChat = ({ onSend }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything legal." },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setMessages(prev => [...prev, { sender: "user", text: trimmedInput }]);

    // Check if the input matches any predefined IPC knowledge
    const matchedKey = Object.keys(ipcKnowledgeBase).find(key =>
      trimmedInput.toLowerCase().includes(key)
    );

    if (matchedKey) {
      const predefinedAnswer = ipcKnowledgeBase[matchedKey];
      setMessages(prev => [...prev, { sender: "bot", text: predefinedAnswer }]);
    } else {
      fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: trimmedInput })
      })
        .then(res => res.json())
        .then(data => {
          setMessages(prev => [...prev, { sender: "bot", text: data.answer }]);
        })
        .catch(() => {
          setMessages(prev => [...prev, { sender: "bot", text: "Something went wrong." }]);
        });
    }

    setInput("");
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <div style={{
        border: "1px solid #ccc", padding: 10,
        minHeight: 300, overflowY: "auto", marginBottom: 10
      }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{
            textAlign: msg.sender === "user" ? "right" : "left",
            whiteSpace: "pre-line"
          }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        style={{ width: "80%", padding: 10 }}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your legal question..."
        onKeyDown={e => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend} style={{ padding: 10, marginLeft: 10 }}>Send</button>
    </div>
  );
};

export default BotChat;
