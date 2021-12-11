import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ProfileComponent-styles.js';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<profile-component></profile-component>
```

##styling-doc

@customElement profile-component
*/
export class ProfileComponent extends LitElement {
  static get is() {
    return 'profile-component';
  }

  // Declare properties
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.item = {};
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('profile-component-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="profile">
        <div class="photo">
          <img src="${this.item.photo}" alt="MDN">
        </div>
        <div class="data">
          <div class="names">
            <div class="username">
              <p>${this.item.username}</p>
            </div>
            <div class="name">
              <p>${this.item.name}</p>
            </div>
          </div>
          <div class="change">
            <a href="#">${this.item.link}</a>
          </div>
        </div>
        
      </div>
    `;
  }
}
