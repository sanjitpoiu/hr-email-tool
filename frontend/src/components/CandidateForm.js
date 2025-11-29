import React, { useState } from "react";

function CandidateForm({ onPreview }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    status: "selected",
  });

  const changeValue = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    onPreview(formData);
  };

  return (
    <form onSubmit={submitForm}>
      <label>Candidate Name</label>
      <input type="text" name="name" required onChange={changeValue} />

      <label>Candidate Email</label>
      <input type="email" name="email" required onChange={changeValue} />

      <label>Position Applied</label>
      <input type="text" name="position" required onChange={changeValue} />

      <label>Status</label>
      <div className="status-box">
        <label>
          <input
            type="radio"
            name="status"
            value="selected"
            defaultChecked
            onChange={changeValue}
          />
          Selected
        </label>

        <label>
          <input
            type="radio"
            name="status"
            value="rejected"
            onChange={changeValue}
          />
          Rejected
        </label>
      </div>

      <button type="submit">Preview Email</button>
    </form>
  );
}

export default CandidateForm;
