const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8FEi4MbzxmOEoM5gRXWzTQG5MAndLenVyXvYPrbu9He98I4VK0zpW57pQuA8OHWkuztR3dEVU8OvB/pub?output=csv";

async function fetchSheetData() {
  const response = await fetch(SHEET_URL);
  const text = await response.text();
  const rows = text.trim().split("\n").slice(1); // skip header
  const data = rows.map(row => {
    const cols = row.split(",");
    return { name: cols[0], points: parseInt(cols[1]) || 0 };
  });
  return data;
}

const MAX_POINTS = 1000;
const MAX_LEFT = 90; // in vw

function updateHorsePositions(data) {
  data.forEach(({ name, points }) => {
    const lane = document.getElementById(name.toLowerCase());
    if (lane) {
      const horse = lane.querySelector('.horse');
      if (horse) {
        const percentage = Math.min(points / MAX_POINTS, 1);
        const positionVW = percentage * MAX_LEFT;
        horse.style.left = `${positionVW}vw`;
      }
    }
  });
}

async function updateLoop() {
  const data = await fetchSheetData();
  updateHorsePositions(data);
}

updateLoop(); // run once immediately
setInterval(updateLoop, 15000); // run every 15 seconds
