import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainPage = new GenerateHtml(`
    <section class="about-me">
      <div class="wrapper">
        <h2 class="category">Education</h2>
        <ul class="category-list">
          <li class="category-item">
            <div class="item-img">
              <img src="./img/logo2.png" alt="SUITT-logo">
            </div>
            <div class="item-desc">
              <h4>State University of Intellectual Technologies and Communications</h4>
              <p class="item-minidesc">Odessa, Ukraine</p>
              <p class="item-main">6 grade, Master's degree, 125 Cybersecurity, 2017 - 2022</p>
            </div>
          </li>
        </ul>
        <h2 class="category">Certifications</h2>
        <ul class="category-list">
          <li class="category-item">
            <div class="item-img">
              <img src="./img/logo1.png" alt="Cambridge-logo">
            </div>
            <div class="item-desc">
              <h4>Cambridge English: B2 First (FCE) paper based</h4>
              <p class="item-minidesc">ID 196UA0150584, issued in 2019</p>
              <p class="item-main">
                <a href="https://drive.google.com/file/d/1GZyU9eudT2fOXC7H6eXlrPhAnck5RpUJ/view" target="_blank" class="item-link">Show credential</a>
              </p>
            </div>
          </li>
        </ul>
        <h2 class="category">Projects</h2>
        <ul class="category-list">
          <li class="category-item">
            <div class="item-img">
              <img src="./img/proj1.png" alt="minesweeper">
            </div>
            <div class="item-desc">
              <h4>JS Minesweeper</h4>
              <p class="item-minidesc">Classic Minesweeper game. Skills demonstrated: HTML, CSS, JS.</p>
              <p class="item-main">
                <a href="https://github.com/derHerrMannelig/rss-projects/tree/minesweeper" target="_blank" class="item-link">Show repository/deploy</a>
              </p>
            </div>
          </li>
          <li class="category-item">
            <div class="item-img">
              <img src="./img/proj2.png" alt="shelter">
            </div>
            <div class="item-desc">
              <h4>Cozy House Shelter</h4>
              <p class="item-minidesc">Pet shelter webpage. Skills demonstrated: HTML, CSS, JS, responsive design.</p>
              <p class="item-main">
                <a href="https://github.com/derHerrMannelig/rss-projects/tree/shelter" target="_blank" class="item-link">Show repository/deploy</a>
              </p>
            </div>
          </li>
          <li class="category-item">
            <div class="item-img">
              <img src="./img/proj3.png" alt="news-api">
            </div>
            <div class="item-desc">
              <h4>News API</h4>
              <p class="item-minidesc">App migration from JS to TS. Skills demonstrated: TS, Webpack, work on other developer's code.</p>
              <p class="item-main">
                <a href="https://github.com/derHerrMannelig/rss-projects/tree/news-api" target="_blank" class="item-link">Show repository/deploy</a>
              </p>
            </div>
          </li>
          <li class="category-item">
            <div class="item-img">
              <img src="./img/proj4.png" alt="kotan-bot">
            </div>
            <div class="item-desc">
              <h4>Kotan Discord Bot</h4>
              <p class="item-minidesc">Simple discord.py bot for moderation and entertainment. Skills demonstrated: Python.</p>
              <p class="item-main">
                <a href="https://github.com/derHerrMannelig/Kotan-Discord-Bot" target="_blank" class="item-link">Show repository/deploy</a>
              </p>
            </div>
          </li>
          <li class="category-item">
            <div class="item-img">
              <img src="./img/proj5.png" alt="cv">
            </div>
            <div class="item-desc">
              <h4>This CV Webpage</h4>
              <p class="item-minidesc">Because why not? Skills demonstrated: HTML, CSS, JS, responsive design.</p>
              <p class="item-main">
                <a href="https://github.com/derHerrMannelig/cv" target="_blank" class="item-link">Show repository/deploy</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `)

  mainPage.appendHtml(document.body);
});