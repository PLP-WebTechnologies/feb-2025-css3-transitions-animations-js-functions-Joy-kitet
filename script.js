const button = document.getElementById("shopBtn");

// Store user preference (e.g., they clicked the button)
button.addEventListener("click", () => {
  // Save click state
  localStorage.setItem("shopClicked", "true");

  // Trigger animation
  button.classList.add("animate");

  // Remove animation class after it finishes
  setTimeout(() => {
    button.classList.remove("animate");
  }, 600);
});

// On page load, check if user has already clicked
window.addEventListener("DOMContentLoaded", () => {
  const wasClicked = localStorage.getItem("shopClicked");

  if (wasClicked === "true") {
    button.textContent = "Welcome Back!";
  }
});
