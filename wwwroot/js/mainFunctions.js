// On page load, read dark mode preference from localStorage
document.addEventListener('DOMContentLoaded', function () {
    const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
    const icon = toggleDarkModeBtn.querySelector('i');

    // Check if user previously set dark mode
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(isDarkMode);

    // Toggle event
    toggleDarkModeBtn.addEventListener('click', function () {
        const currentlyDark = document.body.classList.contains('dark-mode');
        isDarkMode = !currentlyDark;
        applyDarkMode(isDarkMode);
    });

    function applyDarkMode(enable) {
        document.body.classList.toggle('dark-mode', enable);
        if (enable) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        localStorage.setItem('darkMode', enable.toString());
    }
});

