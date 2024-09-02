window.addEventListener("load", function() {
    const images = document.querySelectorAll(".cert-image");
    images.forEach(function(img) {
        img.onerror = function() {
            img.style.display = "none";  // Hide the image if it doesn't load
        };
    });
});