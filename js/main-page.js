import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const mainPage = new GenerateHtml(`
    <section class="main-page">
      <div class="wrapper">
        <div class="main-portrait">
          <img src="./img/portrait.jpg" alt="my-portrait">
        </div>
        <div class="main-content">
          <h1 class="intro">Hello, my name is Ilya Tyupo</h1>
          <p class="who">Cybersecurity graduate (Master's degree)</p>
          <p class="desc">
            I am a fast learning junior programmer. Currently I've been studying web frontend, but I'm always open for something new.
          </p>
          <b><a href="#">Check out my projects and skills!</a></b></br>
          <button class="button-primary">Get in touch</button>
        </div>
      </div>
    </section>
  `)

  mainPage.appendHtml(document.body);
});