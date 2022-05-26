'use strict';

class Fragment {
  constructor(fragmentName) {
    let fragments = new Map();
    fragments.set(
      'document_header',
      `
      <div id="document__header">
        <!-- Основная шапка -->
        <header class="header">
          <div class="container header__container">
            <a class="header__logo logo" href="./index.html">
              <div class="logo__image">
                <i class="svg-icon"></i>
                <img src="./img/logo.svg" alt="" />
              </div>
              <div class="logo__text">
                <p class="logo__title">Соликом</p>
                <p class="logo__subtitle">Версия 0.8</p>
              </div>
            </a>
            <div class="header__buttons">
              <button type="button" class="icon-button js-button__settings">
                <i class="svg-icon"></i>
                <img
                  class="button__icon"
                  src="./img/icons/gear-solid.svg"
                  alt="Настройки"
                />
              </button>
              <!-- <button id="js-button__header-navbar" class="icon-button">
                <img class="button__icon" src="./img/icons/bars-solid.svg" alt="Меню" />
              </button> -->
              <button
                type="button"
                id="js-button__header-navbar"
                class="icon-button hamburger-button"
              >
                <span class="button__icon"></span>
                <span class="button__icon"></span>
                <span class="button__icon"></span>
              </button>
            </div>

            <nav class="header__navbar navbar">
              <ul class="navbar__list">
                <li class="navbar__list-item">
                  <a class="navbar__link" href="./catalogue.html">Каталог</a>
                </li>
                <li class="navbar__list-item">
                  <a class="navbar__link" href="./join.html">Вступить</a>
                </li>
                <li class="navbar__list-item">
                  <a class="navbar__link" href="./about.html">О нас</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <!-- Путь -->
        <div class="breadcrumb">
          <div class="container breadcrumb__container">
            <button
              type="button"
              class="icon-button--alternative js-button__catalogue-navbar"
            >
              <i class="svg-icon"></i>
              <img
                class="button__icon"
                src="./img/icons/sidebar.svg"
                alt="Каталог"
              />
            </button>
            <div class="breadcrumb__path">
              <a class="breadcrumb__location" href="./catalogue.html"
                >Каталог работ</a
              >
              > <span class="breadcrumb__location--current">Главная</span>
            </div>
          </div>
        </div>
      </div>
      `
    );
    fragments.set(
      'document_settings',
      `
      <div id="document__settings" class="settings">
        <div class="container settings__container">
          <header class="settings__header">
            Настройки
            <button
              type="button"
              class="icon-button--alternative js-button__settings"
            >
              <i class="svg-icon"></i>
              <img
                class="button__icon"
                src="./img/icons/xmark-solid.svg"
                alt="X"
              />
            </button>
          </header>
          <div class="settings__body">
            <details class="settings__group">
              <summary class="settings__group-title">Темы</summary>
              <details class="settings__subgroup">
                <summary class="settings__subgroup-title">
                  Классические темы
                </summary>
                <p class="settings__description">Без излишков.</p>
                <ul class="settings__select">
                  <li>
                    <button
                      type="button"
                      id="js-button__select-osdefault-theme"
                      class="button--alternative --enabled"
                    >
                      <img
                        class="button__icon"
                        src="./img/icons/circle-half-stroke-solid.svg"
                        alt=""
                      />
                      <span class="button__text">Системная</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="js-button__select-light-theme"
                      class="button--alternative"
                    >
                      <img
                        class="button__icon"
                        src="./img/icons/sun-solid.svg"
                        alt=""
                      />
                      <span class="button__text">Светлая</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      id="js-button__select-dark-theme"
                      class="button--alternative"
                    >
                      <img
                        class="button__icon"
                        src="./img/icons/moon-solid.svg"
                        alt=""
                      />
                      <span class="button__text">Тёмная</span>
                    </button>
                  </li>
                </ul>
              </details>
              <details class="settings__subgroup">
                <summary class="settings__subgroup-title">Цветные темы</summary>
                <p class="settings__description">Добавь ярких красок!</p>
                <ul class="settings__select">
                  <li>
                    <button
                      type="button"
                      id="js-button__select-icy-theme"
                      class="button--alternative"
                    >
                      <img
                        class="button__icon"
                        src="./img/icons/icicles.svg"
                        alt=""
                      />
                      <span class="button__text">Ледяная</span>
                    </button>
                  </li>
                </ul>
              </details>
            </details>
          </div>
        </div>
      </div>
      `
    );
    fragments.set(
      'document_footer',
      `
      <footer id="document__footer">
        <div class="container">
          <div class="footer">
            <p class="footer__info">
              Сайт Озёрского Любительского Искусства (СОЛИ)
            </p>
            <p class="footer__copyright">
              &copy; 2022 Андрей Шаат. Все права защищены
            </p>
          </div>
        </div>
      </footer>
      `
    );
    fragments.set(
      'main_catalogue',
      `
        <!-- Каталог -->
        <nav class="catalogue">
          <button type="button" class="icon-button js-button__catalogue-navbar">
            <i class="svg-icon"></i>
            <img
              class="button__icon"
              src="./img/icons/xmark-solid.svg"
              alt="X"
            />
          </button>
          <!-- поиск по каталогу -->
          <input
            type="search"
            id="js-catalogue__searchbar"
            placeholder="Поиск по авторам…"
            autocomplete="off"
          />
          <!-- Егор Андреев -->
          <details class="catalogue__author-block">
            <summary class="catalogue__author-block-name">
              Андреев, Егор <span>Александрович</span>
            </summary>
            <!-- комиксы -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Комиксы</summary>
              <a class="catalogue__title" href="./comics__fly.html">FLY</a>
              <a class="catalogue__title" href="./comics__headache.html">Headache</a>
              <a class="catalogue__title" href="./comics__vlastiteli_luny.html">Властители Луны</a>
              <a class="catalogue__title" href="./comics__zashchitniki.html">Защитники</a>
              <a class="catalogue__title" href="#">Карабаш</a>
              <a class="catalogue__title" href="#">Мистер Иф</a>
              <a class="catalogue__title" href="#">Ратай</a>
              <a class="catalogue__title" href="#">Царство пыли</a>
            </details>
            <!-- рисунки -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Рисунки</summary>
              <a class="catalogue__title" href="#">Опубликованные</a>
              <a class="catalogue__title" href="#">Неопубликованные</a>
            </details>
          </details>
          <!-- Артём Ившин -->
          <details class="catalogue__author-block">
            <summary class="catalogue__author-block-name">
              Ившин, Артемий <span>Андреевич</span>
            </summary>
            <!-- рисунки -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Рисунки</summary>
              <a class="catalogue__title" href="#">Опубликованные</a>
              <a class="catalogue__title" href="#">Неопубликованные</a>
            </details>
          </details>
          <!-- Андрей Жаров -->
          <details class="catalogue__author-block">
            <summary class="catalogue__author-block-name">
              Жаров, Андрей <span>Вячеславович</span>
            </summary>
            <!-- комиксы -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Комиксы</summary>
              <a class="catalogue__title" href="./comics__headache.html">Headache</a>
              <a class="catalogue__title" href="./comics__zashchitniki.html">Защитники</a>
            </details>
            <!-- музыка -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Музыка</summary>
              <a class="catalogue__title" href="./music__timeguy.html">timeguy</a>
            </details>
          </details>
          <!-- Андрей Шаат -->
          <details class="catalogue__author-block">
            <summary class="catalogue__author-block-name">
              Шаат, Андрей <span>Денисович</span>
            </summary>
            <!-- комиксы -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Комиксы</summary>
              <a class="catalogue__title" href="./comics__radioaktivnye_lyudi.html">Радиоактивные люди</a>
            </details>
            <!-- рисунки -->
            <details class="catalogue__art-block">
              <summary class="catalogue__art-block-name">Рисунки</summary>
              <a class="catalogue__title" href="#">Опубликованные</a>
              <a class="catalogue__title" href="#">Неопубликованные</a>
            </details>
          </details>
        </nav>
      `
    );

    this.fragment = fragments.get(fragmentName);
  }

  insert() {
    let documentFragment = document.createDocumentFragment();
    let tempContainer = document.createElement('div');
    tempContainer.innerHTML = this.fragment;

    while (tempContainer.firstChild) {
      documentFragment.appendChild(tempContainer.firstChild);
    }

    return documentFragment;
  }
}

insertFragments();

function insertFragments(parentNode = false) {
  let funcComments = getFunctionalComments(parentNode);
  for (let comment of funcComments) {
    let fragmentName = getFunctionalCommentValue(comment);
    let newFragment = new Fragment(fragmentName).insert();
    comment.replaceWith(newFragment);
  }
}

function getFunctionalComments(parentNode) {
  if (!parentNode) parentNode = document.documentElement;

  let funcComments = [];
  for (let node of parentNode.childNodes) {
    if (isFunctionalComment(node)) {
      funcComments.push(node);
    } else if (node.hasChildNodes()) {
      let childNodesComments = getFunctionalComments(node);
      for (let comment of childNodesComments) {
        funcComments.push(comment);
      }
    }
  }

  return funcComments;
}

function isFunctionalComment(node) {
  if (node.nodeType === 8 && node.data.includes('$include')) {
    return true;
  }
}

function getFunctionalCommentValue(funcComment) {
  let commentValue = funcComment.data;
  commentValue = commentValue.replace('$include', '').trim();
  return commentValue;
}
