const toggleBtn = document.getElementById("toggleBtn");

// Check saved theme when page loads
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️ Light Mode";
}

// Toggle theme
toggleBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        toggleBtn.textContent = "☀️ Light Mode";

        localStorage.setItem("theme", "dark");

    } else {

        toggleBtn.textContent = "🌙 Dark Mode";

        localStorage.setItem("theme", "light");
    }
});