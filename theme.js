const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const storedTheme = localStorage.getItem('theme');
const defaultTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
root.dataset.theme = defaultTheme;

function updateThemeButton(theme) {
  if (!themeToggle) return;
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

updateThemeButton(defaultTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    updateThemeButton(nextTheme);
  });
}
