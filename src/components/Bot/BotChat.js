import React, { useState } from 'react';

const BotChat = ({ onSend }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Ask me anything legal." },
  ]);

  const [input, setInput] = useState("");

  // Predefined questions and their answers
  const predefinedQA = {
    "What is IPC Section 420?": "It deals with cheating and dishonestly inducing delivery of property under Indian Penal Code.",
    "What is FIR?": "First Information Report — the initial step to report a cognizable offense.",
    "Is dowry a punishable offense?": "Yes, under IPC Section 498A and Dowry Prohibition Act, 1961.",
    "What is bail?": "Bail is the temporary release of an accused person awaiting trial.",
    "What is IPC Section 376?": "It deals with the punishment for rape under Indian law.",
    "What is a non-cognizable offense?": "An offense where police need permission from the magistrate to start an investigation.",
    "Can a minor be arrested?": "No. As per the Juvenile Justice Act, special procedures apply.",
    "What is the legal marriage age in India?": "21 years for males and 18 years for females under the Prohibition of Child Marriage Act, 2006.",
    "What does 'beyond reasonable doubt' mean?": "It's the level of proof required to convict someone in criminal cases.",
    "What are my rights during a police arrest?": "Right to remain silent, right to a lawyer, and right to be informed of charges (Article 22 of Constitution).",
    "Section 302?": "Punishment for murder.",
    "Section 307?": "Attempt to murder.",
    "Section 376?": "Punishment for rape.",
    "Section 420?": "Cheating and dishonestly inducing delivery of property.",
    "Section 406?": "Criminal breach of trust.",
    "Section 498A?": "Cruelty by husband or relatives of husband.",
    "Section 324?": "Voluntarily causing hurt by dangerous weapons or means.",
    "Section 323?": "Punishment for voluntarily causing hurt.",
    "Section 341?": "Punishment for wrongful restraint.",
    "Section 342?": "Punishment for wrongful confinement.",
    "Section 354?": "Assault or criminal force to woman with intent to outrage her modesty.",
    "Section 509?": "Word, gesture or act intended to insult the modesty of a woman.",
    "section 338":"Causing grievous hurt by act endangering life or personal safety of others",
    "section 184":"Punishment for causing fear or alarm to the public, or to the people in any public place",
    "Section 295A?": "Deliberate and malicious acts to outrage religious feelings.",
    "Section 153A?": "Promoting enmity between different groups on grounds of religion, race, etc.",
    "Section 124A?": "Sedition.",
    "Section 120B?": "Criminal conspiracy.",
    "Section 121?": "Waging war against the Government of India.",
    "Section 363?": "Punishment for kidnapping.",
    "Section 364A?": "Kidnapping for ransom.",
    "Section 379?": "Punishment for theft.",
    "Section 380?": "Theft in dwelling house.",
    "Section 392?": "Punishment for robbery.",
    "Section 395?": "Punishment for dacoity.",
    "Section 397?": "Robbery or dacoity, with attempt to cause death or grievous hurt.",
    "Section 411?": "Dishonestly receiving stolen property.",
    "Section 447?": "Punishment for criminal trespass.",
    "Section 448?": "House trespass.",
    "Section 457?": "Lurking house trespass or house-breaking by night.",
    "Section 471?": "Using as genuine a forged document.",
    "Section 468?": "Forgery for the purpose of cheating.",
    "Section 471?": "Using as genuine a forged document or electronic record.",
    "Section 191?": "Giving false evidence.",
    "Section 193?": "Punishment for false evidence.",
    "Section 197?": "Issuing or signing false certificate.",
    "Section 201?": "Causing disappearance of evidence of offence.",
    "Section 211?": "False charge of offence made with intent to injure.",
    "Section 228A?": "Disclosure of identity of the victim of certain offences.",
    "Section 304B?": "Dowry death.",
    "Section 377?": "Unnatural offences (historically related, repealed in parts).",
    "Section 511?": "Punishment for attempting to commit offences punishable with life or other imprisonment.",
    "section 509?": "Insulting the modesty of a woman.",
    "What is IPC Section 504?": "Intentional insult with intent to provoke breach of the peace.",
    "What is IPC Section 505?": "Statements conducing to public mischief.",
    "What is IPC Section 285?": "Negligent conduct with respect to fire or combustible matter.",
    "What is IPC Section 269?": "Negligent act likely to spread infection of disease.",
    "section 270?": "Malignant act likely to spread infection.",
    "Section 278": "Making atmosphere noxious to health.",
    "Section 143": "Unlawful assembly.",
    "Section 147": "Rioting.",
    "Section 148": "Rioting, armed with deadly weapon.",
    "bike registration": "Visit your local RTO with sales invoice, Form 20, insurance, and address proof for registration.",
  "vehicle ownership transfer?": "RC, Form 29 & 30, insurance, PUC, and ID/address proof are required.",
  "Is it mandatory to have insurance for my vehicle?": "Yes, under the Motor Vehicles Act, 1988, at least third-party insurance is mandatory.",
  "What is the punishment for drunk driving under Indian law?": "Fine up to ₹10,000 and/or imprisonment up to 6 months under Section 185 of Motor Vehicles Act.",
  "How can I get a duplicate driving license if I lose mine?": "Apply at RTO with FIR copy, Form LLD, and address proof.",
  "How to check if land is legally registered in my name?": "Visit your state’s land record portal or local revenue office with your property documents.",
  "What is the process of property mutation in India?": "Submit sale deed, ID proof, and application to the municipal body for updating land records.",
  "Can agricultural land be converted into residential land?": "Yes, through land conversion application to the local revenue department with required fees.",
  "land registration?": "Get the deed drafted, pay stamp duty, and register at the Sub-Registrar's office.",
  "What is the meaning of encumbrance certificate and how to obtain it?": "It certifies a property is free from legal dues; apply at sub-registrar office or online.",
  "How can I file for divorce in India?": "You can file a mutual or contested divorce petition in family court under relevant marriage laws.",
  "What is the procedure for legal adoption in India?": "Adoption must follow CARA guidelines and Juvenile Justice Act via court approval.",
  "How is property divided among legal heirs?": "Based on succession laws; Hindus follow Hindu Succession Act, Muslims follow personal law.",
  "What is the maintenance law for senior citizens?": "Maintenance and Welfare of Parents and Senior Citizens Act, 2007 mandates children to care for elders.",
  "Can a Hindu marry under Special Marriage Act?": "Yes, it allows inter-caste/inter-religion marriages with civil registration.",
  "How do I apply for a caste certificate legally?": "Apply via state portal or Tahsildar office with documents like birth certificate, ration card.",
  "Can I change my name legally in India? What is the process?": "Yes. Publish in gazette, notify in newspaper, and update official records.",
  "What is the legal process for correcting errors in Aadhar card or PAN card?": "Use UIDAI portal for Aadhar and NSDL portal for PAN with valid proofs.",
  "What should I do if my passport is lost or stolen?": "File an FIR and apply for a reissue with FIR copy and ID proof.",
  "RTI application?": "Submit request with fee to Public Information Officer of the concerned department, either online or offline.",
  "Section 1": "It gives the title and extent of operation of the Indian Penal Code.",
  "Section 2": "Punishment of offences committed within India.",
  "Section 3": "Punishment of offences committed beyond India but by an Indian.",
  "Section 4": "Extension of IPC to extraterritorial offences committed by Indian citizens or on Indian-registered ships or aircraft.",
  "Section 5": "Certain laws not affected by IPC, such as military or special laws.",
  "Section 6": "Definitions to be understood subject to exceptions.",
  "Section 7": "Sense of expression once explained — the expression shall be understood in the defined sense throughout the Code.",
  "Section 8": "Gender — 'He' and its derivatives are used of any person, male or female.",
  "Section 9": "Number — Words in the singular include the plural and vice versa.",
  "Section 10": "Man and woman — 'Man' denotes a male human being; 'Woman' denotes a female human being.",
  "Section 11": "'Person' includes any company or association or body of persons, whether incorporated or not.",
  "Section 12?": "Public — includes any class of the public or community.",
  "Section 13?": "Definition of 'Queen'. (Outdated – used when India was under British rule.)",
  "Section 14?": "Servant of Government — denotes anyone in the service or pay of the Government.",
  "Section 15?": "(Repealed)",
  "Section 16?": "'Government of India' — refers to the executive power of the Union.",
  "Section 17?": "'Government' includes Central and State governments.",
  "Section 18?": "'India' means the territory of India.",
  "Section 19?": "Judge — includes any person empowered by law to give judgment in legal proceedings.",
  "Section 20?": "'Court of Justice' — a judge or judges acting judicially.",
  "Section 21?": "Definition of 'Public Servant'.",
  "Section 22?": "'Moveable property' — includes corporeal property except land and things attached to the earth.",
  "Section 23?": "'Wrongful gain' and 'wrongful loss'.",
  "Section 24?": "Definition of 'Dishonestly'.",
  "Section 25?": "'Fraudulently' — a thing done with intent to defraud.",
  "Section 26?": "'Reason to believe' — grounds for believing exist which would make any prudent man believe.",
  "Section 27?": "Property in possession of wife, clerk or servant is deemed in possession of the owner.",
  "Section 28?": "Definition of 'Counterfeit'.",
  "Section 29?": "'Document' — any matter expressed or described on any substance with the intent to be used as evidence.",
  "Section 30?": "'Valuable security' — a document creating or extinguishing a legal right.",
  "Section 31?": "'A will' — the legal declaration of the intention of a testator.",
  "Section 32?": "Words referring to acts include illegal omissions.",
  "Section 33?": "'Act' includes a series of acts, 'Omission' includes a series of omissions.",
  "Section 34?": "Acts done by several persons in furtherance of common intention.",
  "Section 35?": "When an act is criminal due to knowledge or intention.",
  "Section 36?": "Effect caused partly by act and partly by omission.",
  "Section 37?": "Cooperation by doing one of several acts.",
  "Section 38?": "Different offences committed by different persons.",
  "Section 39?": "Voluntarily — a person is said to cause an effect voluntarily when he causes it by means intended to cause it.",
  "Section 40?": "Offence — as designated by this Code or by special or local law.",
  "What is IPC Section 41?": "'Special law' — a law applicable to a particular subject.",
  "What is IPC Section 42?": "'Local law' — a law applicable only to a particular part of India.",
  "What is IPC Section 43?": "'Illegal', 'Legally bound to do' — applies to everything forbidden or punishable by law.",
  "What is IPC Section 44?": "'Injury' — any harm illegally caused to a person in body, mind, reputation or property.",
  "What is IPC Section 45?": "'Life' — denotes the life of a human being.",
  "What is IPC Section 46?": "'Death' — denotes the death of a human being.",
  "What is IPC Section 47?": "'Animal' — denotes any living creature, other than a human being.",
  "What is IPC Section 48?": "'Vessel' — anything made for the conveyance by water.",
  "What is IPC Section 49?": "'Year' and 'Month' — according to the British calendar.",
  "What is IPC Section 50?": "'Section' — denotes a portion of this Code.",
  "What is IPC Section 51?": "'Oath' — includes solemn affirmation or declaration in lieu of oath.",
  "What is IPC Section 52?": "'Good faith' — nothing is said to be done or believed in good faith which is done without due care and attention.",
  "What is IPC Section 52A?": "'Harbour' — to shelter or protect someone knowingly.",
  "What is IPC Section 53?": "Punishments — includes death, imprisonment for life, fine, etc.",
  "What is IPC Section 53A?": "Construction of reference to transportation — deemed to mean imprisonment for life.",
  "What is IPC Section 54?": "Commutation of sentence of death.",
  "What is IPC Section 55?": "Commutation of sentence of imprisonment for life.",
  "What is IPC Section 55A?": "Appropriate Government — Central or State Government depending on the nature of crime.",
  "What is IPC Section 56?": "(Repealed)",
  "What is IPC Section 57?": "Fractions of terms of punishment — 20 years for life sentence when computing fractions.",
  "What is IPC Section 58?": "(Repealed)",
  "What is IPC Section 59?": "(Repealed)",
  "What is IPC Section 60?": "Sentence may be wholly or partly rigorous or simple.",
  "What is IPC Section 61?": "(Repealed)",
  "What is IPC Section 62?": "(Repealed)",
  "What is IPC Section 63?": "Amount of fine — no limit unless specified.",
  "What is IPC Section 64?": "Sentence of imprisonment for non-payment of fine.",
  "What is IPC Section 65?": "Limit to imprisonment for non-payment of fine.",
  "What is IPC Section 66?": "Description of imprisonment for non-payment of fine.",
  "What is IPC Section 67?": "Imprisonment for non-payment of fine when the offence is punishable with fine only.",
  "What is IPC Section 68?": "Imprisonment to terminate on payment of fine.",
  "What is IPC Section 69?": "Termination of imprisonment on payment of proportional part of fine.",
  "What is IPC Section 70?": "Fine to be levied within six years or during imprisonment.",
  "What is IPC Section 71?": "Limit of punishment for offences made up of several offences.",
  "What is IPC Section 72?": "Punishment of person guilty of one of several offences, judgment doubtful which.",
  "What is IPC Section 73?": "Solitary confinement — can be imposed for certain periods.",
  "What is IPC Section 74?": "Limit of solitary confinement — maximum of 14 days at a time.",
  "What is IPC Section 75?": "Enhanced punishment for certain offences after previous conviction.",
  "What is IPC Section 76?": "Act done by a person bound by law to do it — not an offence.",
  "What is IPC Section 77?": "Act of Judge when acting judicially — not an offence.",
  "What is IPC Section 78?": "Act done pursuant to judgment or order of Court — not an offence.",
  "What is IPC Section 79?": "Act done by a person justified by law or who believes himself justified.",
  "What is IPC Section 80?": "Accident in doing lawful act — not an offence.",
  "What is IPC Section 81?": "Act likely to cause harm but done without criminal intent to prevent other harm.",
  "What is IPC Section 82?": "Nothing is an offence which is done by a child under 7 years of age.",
  "What is IPC Section 83?": "Act of a child above 7 and under 12 who has not attained sufficient maturity.",
  "What is IPC Section 84?": "Act of a person of unsound mind — not an offence.",
  "What is IPC Section 85?": "Act done by a person involuntarily intoxicated — not an offence.",
  "What is IPC Section 86?": "Offence requiring a particular intent or knowledge committed by intoxicated person.",
  "What is IPC Section 87?": "Act not intended and not known to be likely to cause death or grievous hurt, done with consent.",
  "What is IPC Section 88?": "Act done in good faith for benefit of a person with consent.",
  "What is IPC Section 89?": "Act done in good faith for benefit of child or insane person by guardian.",
  "What is IPC Section 90?": "Consent given under fear of injury or misconception is not consent.",
  "What is IPC Section 91?": "Exclusion of acts not intended to cause death or grievous hurt.",
  "What is IPC Section 92?": "Act done in good faith for benefit without consent in case of emergency.",
  "What is IPC Section 93?": "Communication made in good faith is not an offence.",
  "What is IPC Section 94?": "Compulsion by threat — not an offence except for murder and offences against the State.",
  "What is IPC Section 95?": "Acts causing slight harm are not offences.",
  "What is IPC Section 96?": "Things done in private defence are not offences.",
  "What is IPC Section 97?": "Right of private defence of person and property.",
  "What is IPC Section 98?": "Right of private defence against the act of a person of unsound mind.",
  "What is IPC Section 99?": "Acts against which there is no right of private defence.",
  "What is IPC Section 100?": "When the right of private defence of the body extends to causing death."

};

  const handleSend = (customInput = null) => {
    const question = customInput !== null ? customInput : input.trim();
    if (!question) return;

    setMessages(prev => [...prev, { sender: "user", text: question }]);
    setInput("");

    if (predefinedQA[question]) {
      setMessages(prev => [...prev, { sender: "bot", text: predefinedQA[question] }]);
    } else {
      fetch("http://localhost:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question })
      })
        .then(res => res.json())
        .then(data => {
          setMessages(prev => [...prev, { sender: "bot", text: data.answer }]);
        })
        .catch(() => {
          setMessages(prev => [...prev, { sender: "bot", text: "Something went wrong." }]);
        });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <div style={{ border: "1px solid #ccc", padding: 10, minHeight: 300, overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left", whiteSpace: "pre-line" }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>

      <input
        style={{ width: "80%", padding: 10, marginTop: 10 }}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your legal question..."
      />
      <button onClick={() => handleSend()} style={{ padding: 10 }}>Send</button>
    </div>
  );
};

export default BotChat;
