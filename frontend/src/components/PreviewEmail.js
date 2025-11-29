function PreviewEmail({ preview, onSend }) {
  return (
    <div className="preview-box">
      <h3>Email Preview</h3>
      <pre>{preview}</pre>
      <button onClick={onSend}>Send Email</button>
    </div>
  );
}

export default PreviewEmail;
