
function moveHorse(horseNum) {
    const input = document.getElementById('input' + horseNum);
    const value = Math.min(Math.max(parseInt(input.value) || 0, 0), 100);
    const horse = document.getElementById('horse' + horseNum);
    horse.style.left = value + '%';
}
