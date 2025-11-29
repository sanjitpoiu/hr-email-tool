module.exports = {
  selected: (name, position) => `
Dear ${name},

We are pleased to inform you that you have been selected for the position of ${position}.

Best regards,
HR Team
`,

  rejected: (name, position) => `
Dear ${name},

Thank you for applying for the position of ${position}.
We regret to inform you that you are not selected.

Best regards,
HR Team
`
};
