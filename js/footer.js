import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const footer = new GenerateHtml(`
    <footer>
      <div class="wrapper">
        <h2 class="contact-head">Contact me</h2>
        <ul class="contact-list">
          <li class="contact-icon">
            <a><span id="email"></span></a>
          </li>
          <li class="contact-icon">
            <a><span id="github"></span></a>
          </li>
          <li class="contact-icon">
            <a><span id="linkedin"></span></a>
          </li>
          <li class="contact-icon">
            <a><span id="telegram"></span></a>
          </li>
        </ul>
      </div>
    </footer>
  `)

  footer.appendHtml(document.body);
});