function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    var mainContent = document.querySelector(".main-content");
    var hamburgerIcon = document.querySelector(".hamburger-icon");

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        sideNav.classList.remove("open"); // Remove the 'open' class
        mainContent.style.marginLeft = "0";
        mainContent.classList.remove("open"); // Remove the 'open' class

        hamburgerIcon.style.left = "15px";
        hamburgerIcon.style.top = "15px";
    } else {
        sideNav.style.width = "250px";
        sideNav.classList.add("open"); // Add the 'open' class
        mainContent.style.marginLeft = "250px";
        mainContent.classList.add("open"); // Add the 'open' class

        hamburgerIcon.style.left = "200px";
        hamburgerIcon.style.top = "15px";
    }
}
