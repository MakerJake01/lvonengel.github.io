// Add JavaScript code for your web site here

let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);

document.getElementById("electricalButton").addEventListener("click", function() {
    document.querySelector(".electrical").style.display = "block";
    document.querySelector(".software").style.display = "none";
});

document.getElementById("softwareButton").addEventListener("click", function() {
    document.querySelector(".software").style.display = "block";
    document.querySelector(".electrical").style.display = "none";
});
