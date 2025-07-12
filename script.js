
document.addEventListener('DOMContentLoaded', () => {
  const comments = [
    "Matt’s off to a flyer!",
    "Dan is galloping through the ranks!",
    "Danny's gaining ground!",
    "Ryan's kicking into gear!"
  ];
  let index = 0;
  setInterval(() => {
    document.getElementById('bookie-comment').innerText = comments[index];
    index = (index + 1) % comments.length;
  }, 3000);
});
