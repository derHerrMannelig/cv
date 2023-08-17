import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = new GenerateHtml(`
    <header class="header">
      <div class="wrapper">
        <a href="#" class="logo">Ilya Tyupo</a>
        <nav class="navbar">
          <ul class="navlist">
            <li id="nav1">Main page</li>
            <li id="nav2">About me</li>
            <li id="nav3">Contact me</li>
          </ul>
        </nav>
      </div>
    </header>
  `)

  header.appendHtml(document.body);
});