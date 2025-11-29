import React, { useState } from "react";
import "./App.css";

import CandidateForm from "./components/CandidateForm";
import PreviewEmail from "./components/PreviewEmail";
import MessageBox from "./components/MessageBox";

import { getEmailPreview, sendEmail } from "./api/emailApi";

function App() {
  const [preview, setPreview] = useState("");
  const [emailData, setEmailData] = useState(null);
  const [message, setMessage] = useState("");

  // handle preview buttom
  const handlePreview = async (data) => {
    const res = await getEmailPreview(data);
    setPreview(res.preview);
    setEmailData(data);
  };

  // Handle email buttom
  const handleSendEmail = async () => {
    const res = await sendEmail(emailData);
    setMessage(res.message);
  };

  return (
    <div className="container">
      <h2>HR Email Response Tool</h2>

      <CandidateForm onPreview={handlePreview} />

      {preview && (
        <PreviewEmail preview={preview} onSend={handleSendEmail} />
      )}

      {message && <MessageBox msg={message} />}
    </div>
  );
}

export default App;
