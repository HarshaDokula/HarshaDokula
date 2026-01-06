// Load and inject header, nav, and footer templates
async function loadTemplates() {
    try {
        // Determine the path to templates based on current location
        const isInPages = window.location.pathname.includes('/pages/');
        const templatesPath = isInPages ? '../templates' : 'templates';

        // Load header
        const headerResponse = await fetch(`${templatesPath}/header.html`);
        const headerContent = await headerResponse.text();
        const headerElement = document.querySelector("header");
        if (headerElement) {
            headerElement.replaceWith(
                new DOMParser().parseFromString(headerContent, "text/html").body.firstElementChild
            );
        }

        // Load nav
        const navResponse = await fetch(`${templatesPath}/nav.html`);
        const navContent = await navResponse.text();
        const navElement = document.querySelector("nav");
        if (navElement) {
            navElement.replaceWith(
                new DOMParser().parseFromString(navContent, "text/html").body.firstElementChild
            );
        }

        // Load footer
        const footerResponse = await fetch(`${templatesPath}/footer.html`);
        const footerContent = await footerResponse.text();
        const footerElement = document.querySelector("footer");
        if (footerElement) {
            footerElement.replaceWith(
                new DOMParser().parseFromString(footerContent, "text/html").body.firstElementChild
            );
        }
    } catch (error) {
        console.warn("Template loading failed:", error);
    }
}

window.addEventListener("load", function () {
    loadTemplates();

    const images = document.querySelectorAll(".cert-image");
    images.forEach(function (img) {
        img.onerror = function () {
            // Hide the entire parent container of the image if it fails to load
            img.parentElement.style.display = "none";
        };
    });
});
