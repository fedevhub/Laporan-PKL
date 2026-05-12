// 1. Identify the toggle button and the root element
const btn = document.getElementById("theme-toggle");
const root = document.documentElement; // This targets the <html> tag

// 2. On load, check localStorage or system settings
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  root.classList.add("dark-mode");
} else if (currentTheme === "light") {
  root.classList.remove("dark-mode");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  // If no save, follow the user's OS theme
  root.classList.add("dark-mode");
}

// 3. Handle the click event
btn.addEventListener("click", () => {
  root.classList.toggle("dark-mode");

  // Save the choice
  let theme = "light";
  if (root.classList.contains("dark-mode")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});
