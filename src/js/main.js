// ============= NAVIGATION BUTTON ===============
const navButton = document.querySelector(".nav-btn");
const navList = document.querySelector(".nav-list");
const navOverlay = document.querySelector(".nav-overlay");
const navItem = document.querySelectorAll(".nav-item");


let showMenu = false;
navButton.addEventListener("click", openMenu);
// navButton.addEventListener("click", console.log("you clicked"));
navOverlay.addEventListener("click", openMenu);
// navItem.forEach(item => {
//     item.addEventListener("click", openMenu)
// })

function openMenu () {
    if(!showMenu) {
        navButton.classList.add("close");
        navList.classList.add("show");
        navOverlay.classList.add("show");
        navItem.forEach(item => {
            item.classList.add("show");
        });
        // document.body.classList.add("no-scroll");
        showMenu = true;
    }else {
        navButton.classList.remove("close");
        navList.classList.remove("show");
        navButton.classList.remove("show");
        navOverlay.classList.remove("show");
        navItem.forEach(item => {
            item.classList.remove("show");
        });
        // document.body.classList.remove("no-scroll");
        showMenu = false;
    }
}










// Dark Mode Toggler 

// =========== THEME TOGGLE ===============
const themeToggle = document.querySelector("#switch");
// const logo = document.querySelector(".logo");
let darkMode = localStorage.getItem("darkMode");


function enableDarkMode() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    // logo.src = "/assets/images/logo-dark.png";
    // logo.src = "/assets/images/logo-light.png";
    // themeToggle.checked = false;
    localStorage.setItem("darkMode", "enabled");
}
function enableLightMode() {
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    // logo.src = "/assets/images/logo-light.png";
    // logo.src = "/assets/images/logo-dark.png";
    // themeToggle.checked = true;
    localStorage.setItem("darkMode", null);
}


if (darkMode === "enabled") {
    enableDarkMode();
}



// Adding event listener to listen for "checking on the input" and changing theme
themeToggle.addEventListener('change', () => {
    // document.body.classList.contains("dark-theme") ? enableLightMode() : enableDarkMode();
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== "enabled") {
        enableDarkMode();
        console.log(darkMode);
    }else {
        enableLightMode();
        console.log(darkMode);
    }
})