'use strict';

main();

function main() {
  let title = document.querySelector('h1').textContent;
  document.title = title + ' | Сайт Озёрского Любительского Искусства';

  addEventListeners();
  setTheme();
}

function addEventListeners() {
  const settingsButtons = document.querySelectorAll('.js-button__settings');
  settingsButtons.forEach((button) =>
    button.addEventListener('click', showSettings)
  );

  const headerNavbarButton = document.querySelector(
    '#js-button__header-navbar'
  );
  headerNavbarButton.addEventListener('click', showHeaderNavbar);

  const osDefaultThemeButton = document.querySelector(
    '#js-button__select-osdefault-theme'
  );
  osDefaultThemeButton.addEventListener(
    'click',
    setTheme.bind(null, 'osdefault')
  );

  const lightThemeButton = document.querySelector(
    '#js-button__select-light-theme'
  );
  lightThemeButton.addEventListener('click', setTheme.bind(null, 'light'));

  const darkThemeButton = document.querySelector(
    '#js-button__select-dark-theme'
  );
  darkThemeButton.addEventListener('click', setTheme.bind(null, 'dark'));

  const icyThemeButton = document.querySelector('#js-button__select-icy-theme');
  icyThemeButton.addEventListener('click', setTheme.bind(null, 'icy'));
}

/**
 * Gives the element <html> a class consisting of the theme name and the prefix 't-'.
 *
 * @param {string} themeName The name of a desired theme.
 */
function setTheme(themeName = window.localStorage.getItem('storedTheme')) {
  const THEMES = ['osdefault', 'light', 'dark', 'icy'];
  if (!THEMES.includes(themeName)) {
    themeName = 'osdefault';
  }

  document.documentElement.classList.add('t-' + themeName);

  let otherThemes = THEMES.filter((theme) => theme != themeName);

  otherThemes.forEach((theme) => {
    document.documentElement.classList.remove('t-' + theme);
    let themeButton = document.querySelector(
      '#js-button__select-' + theme + '-theme'
    );
    themeButton.classList.remove('--enabled');
  });

  let thisThemeButton = document.querySelector(
    '#js-button__select-' + themeName + '-theme'
  );
  thisThemeButton.classList.add('--enabled');

  window.localStorage.setItem('storedTheme', themeName);
}

function showSettings() {
  const settings = document.querySelector('.settings');
  settings.classList.toggle('--open');

  const settingsButton = document.querySelector('.js-button__settings');
  settingsButton.classList.toggle('--open');

  document.body.classList.toggle('--lock');
}

function showHeaderNavbar() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('--open');

  const hamburgerButtonLines = document.querySelectorAll(
    '.hamburger-button span'
  );
  hamburgerButtonLines.forEach((line) => line.classList.toggle('--open'));
}
