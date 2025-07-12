
function moveHorse() {
  const who = document.getElementById('who').value;
  const distance = parseInt(document.getElementById('distance').value);
  const horse = document.querySelector(`#${who} .horse`);
  const currentLeft = parseInt(horse.style.left || 0);
  horse.style.left = (currentLeft + distance) + 'px';

  updateOdds();
}

function updateOdds() {
  const horses = ['matt', 'dan', 'danny', 'ryan'];
  const nameMap = {
    matt: "Matt in the Hat",
    dan: "Dan Dan the Kitchen Man",
    danny: "Danny the Hammer",
    ryan: "Ryan \"Sam\" Maverick"
  };

  const positions = horses.map(h => ({
    name: h,
    pos: parseInt(document.querySelector(`#${h} .horse`).style.left || 0)
  }));
  positions.sort((a, b) => b.pos - a.pos);

  const oddsList = document.getElementById("odds-list");
  oddsList.innerHTML = "";
  positions.forEach((entry, i) => {
    oddsList.innerHTML += `<li>${nameMap[entry.name]} – ${2 + i}/1</li>`;
  });

  const comments = [
    `${nameMap[positions[0].name]} is flying down the track!`,
    `It's neck and neck out there!`,
    `Can anyone catch ${nameMap[positions[0].name]}?`
  ];
  document.getElementById("bookie-comment").innerText = comments[Math.floor(Math.random() * comments.length)];
}
