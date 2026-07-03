/**
 * Ghibli Night Portfolio - Theme Toggle Logic
 * Handles switching between Dark (Night) and Light (Day) modes.
 */

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
const savedTheme = localStorage.getItem('theme');

// If a theme was previously saved, apply it
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Toggle Theme Event Listener
themeToggle.addEventListener('click', () => {
    // Get current theme state
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Switch logic
    if (currentTheme === 'light') {
        // Switch to Dark Mode
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        console.log('Switched to Dark Mode (Ghibli Night)');
    } else {
        // Switch to Light Mode
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        console.log('Switched to Light Mode (Ghibli Day)');
    }
});

// Optional: Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    }
});
