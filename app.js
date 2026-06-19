console.log("paw-quest loaded");

let steps = 0;
let active = false;

window.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  const output = document.getElementById("output");

  const start = document.getElementById("start");
  const step = document.getElementById("step");
  const end = document.getElementById("end");

  function render() {
    if (!status || !output) return;

    status.textContent = active ? "Walking 🐾" : "Idle";
    output.textContent = "Steps: " + steps;
  }

  start?.addEventListener("click", () => {
    active = true;
    render();
  });

  step?.addEventListener("click", () => {
    if (!active) return;
    steps++;
    render();
  });

  end?.addEventListener("click", () => {
    active = false;
    steps = 0;
    render();
  });

  render();
});
