export class MyFrame extends HTMLElement {
  value = this.textContent
  margin = this.getAttribute('margin')
  height = this.getAttribute('height')

  connectedCallback() {
    this.innerHTML =
      `<div class='frame'>
                    <div class='frame-container' style='height: ${this.height}'>
                        <p class='paragraph' 
                        style='
                            margin: ${this.margin}'>
                            ${this.value}
                        </p>
                    </div>
            </div>`
  }

}

customElements.define('my-frame', MyFrame)
