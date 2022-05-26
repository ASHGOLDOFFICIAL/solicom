'use strict';

main();

function main() {
  addEventListeners();
}

function addEventListeners() {
  const catalogueNavbarButtons = document.querySelectorAll(
    '.js-button__catalogue-navbar'
  );
  catalogueNavbarButtons.forEach((button) =>
    button.addEventListener('click', showCatalogueNavbar)
  );

  const catalogueSearchbar = document.querySelector('#js-catalogue__searchbar');
  catalogueSearchbar.addEventListener('change', searchCatalogue);
}

function showCatalogueNavbar() {
  const catalogue = document.querySelector('.catalogue');
  catalogue.classList.toggle('--open');

  document.body.classList.toggle('--mobile-lock');
}

function searchCatalogue() {
  const inputField = document.querySelector('#js-catalogue__searchbar');
  let inputValue = inputField.value.toLowerCase();

  const authors = document.querySelectorAll('.catalogue__author-block-name');
  authors.forEach((author) => {
    let authorName = author.textContent.toLowerCase();
    if (authorName.includes(inputValue)) {
      author.parentNode.style.display = 'block';
    } else {
      author.parentNode.style.display = 'none';
    }
  });
}
