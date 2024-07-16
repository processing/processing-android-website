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