
document.addEventListener('DOMContentLoaded', () => {
  const lines = [
    "Matt’s got his hat in the game!",
    "Dan’s cooking up a win!",
    "Danny’s hammering the lead!",
    "Ryan’s flying like Maverick!"
  ];

  setInterval(() => {
    const oneLiner = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('one-liner').textContent = oneLiner;
  }, 4000);
});
