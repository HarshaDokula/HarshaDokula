// Hide certification images that fail to load
window.addEventListener("load", function () {
    const images = document.querySelectorAll(".cert-image");
    images.forEach(function (img) {
        img.onerror = function () {
            img.parentElement.style.display = "none";
        };
    });
});
