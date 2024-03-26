function toggleNav() {
    var sideNav = document.getElementById("sideNav");
    var mainContent = document.querySelector(".main-content");
    var hamburgerIcon = document.querySelector(".hamburger-icon"); 

    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
        if (viewportWidth > 768) {
            mainContent.style.marginLeft = "0";
        }
        hamburgerIcon.style.left = "15px";
        hamburgerIcon.style.top = "15px";
    } else {
        sideNav.style.width = "250px";
        if (viewportWidth > 768) {
            mainContent.style.marginLeft = "250px";
        }
        hamburgerIcon.style.left = "200px";
        hamburgerIcon.style.top = "15px";
    }
}
