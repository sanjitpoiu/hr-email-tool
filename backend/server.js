const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const templates = require("./emailTemplates");

const app = express();
app.use(express.json());
app.use(cors());

// preview email
app.post("/preview", (req, res) => {
  const { name, position, status } = req.body;
  const previewText = templates[status](name, position);
  res.json({ preview: previewText });
});

// Send email
app.post("/send-email", async (req, res) => {
  const { name, email, position, status } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "",    // email
      pass: ""      //password        
    }
  });

  const mailOptions = {
    from: "",
    to: email,
    subject: status === "selected" ? "Selection Update" : "Application Status",
    text: templates[status](name, position)
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    res.json({ message: "Error: " + err.message });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));
