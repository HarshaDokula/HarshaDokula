window.addEventListener("load", function() {
    const images = document.querySelectorAll(".cert-image");
    images.forEach(function(img) {
        img.onerror = function() {
            // Hide the entire parent container of the image if it fails to load
            img.parentElement.style.display = "none";
        };
    });
});

