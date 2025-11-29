

export async function getEmailPreview(data) {
  const res = await fetch("http://localhost:5000/preview", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function sendEmail(data) {
  const res = await fetch("http://localhost:5000/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return await res.json();
}
