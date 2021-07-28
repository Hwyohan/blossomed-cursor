let circle = document.getElementById("LargeCursor");
let dot = document.getElementById("Dot");

const handleMouseMovement = (event) => {
  let x = event.clientX;
  let y = event.clientY;
  // Moves the circle
  circle.style.transform = `translate(${x - 15 + 2.5}px, ${y - 15 + 2.5}px)`;
  dot.style.transform = `translate(${x}px, ${y}px)`;
};
window.addEventListener("mousemove", handleMouseMovement);