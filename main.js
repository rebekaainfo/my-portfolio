/* ===========================
   BACK TO TOP BUTTON
=========================== */
const topBtn = document.getElementById("topBtn");

// Show/Hide button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});

// Smooth scroll to top when clicked
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ===========================
   SMOOTH SCROLLING FOR NAV
=========================== */
// Note: Since you already have 'scroll-behavior: smooth' 
// in your CSS, this is handled automatically. 
// However, you can add this if you want to close 
// mobile menus when a link is clicked.

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // If you add a mobile menu later, add logic here 
        // to remove the 'active' class from your menu.
    });
});