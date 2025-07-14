const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8FEi4MbzxmOEoM5gRXWzTQG5MAndLenVyXvYPrbu9He98I4VK0zpW57pQuA8OHWkuztR3dEVU8OvB/pub?output=csv";

async function fetchSheetData() {
  try {
    const response = await fetch(SHEET_URL);
    const text = await response.text();
    const rows = text.trim().split("\n").slice(1); // skip header
    const data = rows.map(row => {
      const cols = row.split(",");
      return {
        name: cols[0].trim(),       // Column A: Name
        points: parseInt(cols[12]) || 0  // Column M: TotalPoints (index 12)
      };
    });
    return data;
  } catch (err) {
    console.error("Error fetching sheet data:", err);
    return [];
  }
}

function updateHorsePositions(data) {
  data.forEach(({ name, points }) => {
    const lane = document.getElementById(name.toLowerCase());
    if (lane) {
      const horse = lane.querySelector('.horse');
      if (horse) {
        const maxPoints = 1000;
        const minVW = 14; // Start line
        const maxVW = 86; // Finish line

        const progress = Math.min(points / maxPoints, 1);
        const positionVW = minVW + (maxVW - minVW) * progress;

        horse.style.left = `${positionVW}vw`; // NO need to add 14vw again here
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
