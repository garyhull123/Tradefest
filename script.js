
function moveHorse(name) {
  let input = document.getElementById(name + "Input").value;
  let lane = document.getElementById(name + "-lane").querySelector("img");
  let distance = parseInt(input || "0") * 10;
  lane.style.transform = `translateX(${distance}px)`;
}
