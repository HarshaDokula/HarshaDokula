// Google tag (gtag.js)
(function() {
    try {
        var script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-JGZL35DMP0';
        script.onerror = function(e){ console.warn('gtag script load failed', e); };
        if (document.head) {
            document.head.appendChild(script);
        } else {
            // Fallback: append to documentElement
            document.documentElement.appendChild(script);
        }
    } catch (err) {
        console.warn('Failed to load gtag script:', err);
    }
})();

window.dataLayer = window.dataLayer || [];
function gtag(){
    dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-JGZL35DMP0');
