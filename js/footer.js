import {GenerateHtml} from './main.js';

document.addEventListener('DOMContentLoaded', () => {
  const footer = new GenerateHtml(`
    <footer class="footer" id="footer">
      <div class="wrapper">
        <h2 class="contact-head">Contact me</h2>
        <ul class="contact-list">
          <li class="contact-icon">
            <a href="mailto:derherrmannelig@gmail.com" target="_blank"><span id="email"></span><span class="contact-item">derherrmannelig@gmail.com</span></a>
          </li>
          <li class="contact-icon">
            <a href="https://github.com/derHerrMannelig" target="_blank"><span id="github"></span><span class="contact-item">github.com/derHerrMannelig</span></a>
          </li>
          <li class="contact-icon">
            <a href="https://www.linkedin.com/in/derherrmannelig/" target="_blank"><span id="linkedin"></span><span class="contact-item">linkedin.com/in/derherrmannelig/</span></a>
          </li>
          <li class="contact-icon">
            <a href="https://t.me/derherrmannelig" target="_blank"><span id="telegram"></span><span class="contact-item">@derherrmannelig</span></a>
          </li>
        </ul>
      </div>
    </footer>
  `)

  footer.appendHtml(document.body);
});