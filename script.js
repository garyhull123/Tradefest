
function moveHorse() {
  const who = document.getElementById('who').value;
  const distance = parseInt(document.getElementById('distance').value);
  const horse = document.querySelector(`#${who} .horse`);
  const currentLeft = parseInt(horse.style.left || 0);
  horse.style.left = (currentLeft + distance) + 'px';
}
