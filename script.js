
function moveHorse(num) {
  const val = Math.min(Math.max(parseInt(document.getElementById('input' + num).value || 0), 0), 100);
  const horse = document.getElementById('horse' + num);
  horse.style.left = val + '%';
  updateBookie();
}

function updateBookie() {
  const positions = [1, 2, 3, 4].map(i => ({
    name: ['Matt', 'Dan', 'Danny', 'Ryan'][i-1],
    val: parseInt(document.getElementById('horse' + i).style.left || '0')
  }));
  positions.sort((a, b) => b.val - a.val);
  const lead = positions[0].name;
  const lines = {
    'Matt': "Matt's out in front – he's not hatin’ the game!",
    'Dan': "Dan’s charging – must be closing a kitchen!",
    'Danny': "Danny’s hammering the pack!",
    'Ryan': "Ryan’s got Maverick speed today!"
  };
  document.getElementById('bookie-text').innerText = lines[lead];
}
