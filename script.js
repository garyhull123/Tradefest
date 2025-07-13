function updateHorse(name) {
  const inputVal = document.getElementById(name + "Val").value;
  const horse = document.getElementById(name);
  horse.style.transform = "translateX(" + inputVal + "px)";
}
