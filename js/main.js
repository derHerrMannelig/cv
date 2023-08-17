export class GenerateHtml {
  constructor(html) {
    const template = document.createElement('template');
    template.innerHTML = html.trim();
    this.element = template.content.firstElementChild;
  }

  appendHtml(element) {
    element.appendChild(this.element);
  }
}
