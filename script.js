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

function updateHorsePositions(data) {
  data.forEach(({ name, points }) => {
    const lane = document.getElementById(name.toLowerCase());
    if (lane) {
      const horse = lane.querySelector('.horse');
      if (horse) {
        const maxPoints = 1000;
        const cappedPoints = Math.min(points, maxPoints);
        const startOffsetVW = 5; // Horse start at 10vw
        const trackLengthVW = 80; // Move within 80vw total

        const positionVW = startOffsetVW + (cappedPoints / maxPoints) * trackLengthVW;
        horse.style.left = `calc(${positionVW}vw + 5vw)`; // 5vw = offset from far-left
      }
    }
  });
}

async function updateLoop() {
  const data = await fetchSheetData();
  updateHorsePositions(data);
}

updateLoop(); // run once immediately
setInterval(updateLoop, 15000);
