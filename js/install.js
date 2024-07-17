document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('btn_tooltip');
    const openInProcessing = document.getElementById('openInProcessing');

    if (openInProcessing) {
        openInProcessing.addEventListener('click', function (event) {
            event.preventDefault();
            tooltip.classList.add('show');
            window.location.href = 'pde://github.com/processing/processing-android/releases/download/latest/AndroidMode.pdex';
        });
    }

    // Remove tooltip when clicking anywhere outside the button
    document.addEventListener('click', function (event) {
        if (!tooltip.contains(event.target) && tooltip.classList.contains('show')) {
            tooltip.classList.remove('show');
        }
    });
});


/**
 * Function to detect if the device is mobile (not 100% accurate)
 * @returns {boolean} - True if the device is mobile, false otherwise
 */
function isMobile() {
    // Some browsers support the navigator.userAgent property, which returns true if the device is mobile
    if (navigator.userAgentData && navigator.userAgentData.mobile !== undefined) {
        return navigator.userAgentData.mobile;
    }

    // Fallback: Use regular expression to test the user agent string for common mobile device identifiers
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}