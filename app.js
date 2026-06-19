console.log("paw-quest loaded");

let steps = 0;
let active = false;

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const out = document.getElementById("out");

  const start = document.getElementById("start");
  const step = document.getElementById("step");
  const end = document.getElementById("end");

  function render() {
    status.textContent = active ? "Walking 🐾" : "Idle";
    out.textContent = "Steps: " + steps;
  }

  start.onclick = () => {
    active = true;
    render();
  };

  step.onclick = () => {
    if (!active) return;
    steps++;
    render();
  };

  end.onclick = () => {
    active = false;
    steps = 0;
    render();
  };

  render();
});
