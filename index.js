// Add JavaScript code for your web site here

let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => {
    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);

// when electrical button is clicked
document.getElementById("electricalButton").addEventListener("click", function() {
    document.querySelector(".electrical").style.display = "block";
    document.querySelector(".software").style.display = "none";
    document.querySelector(".result").style.display = "none";
});

// when software button is clicked
document.getElementById("softwareButton").addEventListener("click", function() {
    document.querySelector(".electrical").style.display = "none";
    document.querySelector(".software").style.display = "block";
    document.querySelector(".result").style.display = "none";
});

// when result button is clicked
document.getElementById("resultButton").addEventListener("click", function() {
    document.querySelector(".software").style.display = "none";
    document.querySelector(".electrical").style.display = "none";
    document.querySelector(".result").style.display = "block";
});
