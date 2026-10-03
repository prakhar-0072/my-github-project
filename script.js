// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================

// Welcome message
window.addEventListener("load", function () {
    alert("👋 Welcome to Prakhar's Portfolio!");
});


// ==========================================
// DARK / LIGHT MODE
// ==========================================
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

window.addEventListener("load", function () {
    const themeButton = document.getElementById("themeButton");

    if (themeButton) {
        themeButton.addEventListener("click", toggleDarkMode);
    }
});

// ==========================================
// SHOW / HIDE PROJECTS
// ==========================================

function toggleProjects() {
    const projects = document.getElementById("projectsContent");
    const button = document.getElementById("projectButton");

    if (projects.style.display === "none") {
        projects.style.display = "block";
        button.innerHTML = "📂 Hide Projects";
    } else {
        projects.style.display = "none";
        button.innerHTML = "📂 Show Projects";
    }
}


// ==========================================
// CURRENT DATE AND TIME
// ==========================================

function updateDateTime() {
    const dateElement = document.getElementById("dateTime");

    if (dateElement) {
        const now = new Date();

        dateElement.innerHTML =
            "🕒 Current Time: " + now.toLocaleString();
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();
