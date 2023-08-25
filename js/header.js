import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = new GenerateHtml(`
    <header class="header">
      <div class="wrapper">
        <a href="./index.html" class="logo">Ilya Tyupo</a>
        <nav class="navbar">
          <ul class="navlist">
            <li id="nav1" onclick="location.href='./index.html'">Main page</li>
            <li id="nav2" onclick="location.href='./skills.html'">About me</li>
            <li id="nav3" onclick="location.href='#footer'">Contact me</li>
          </ul>
        </nav>
      </div>
    </header>
  `)

  header.appendHtml(document.body);
});