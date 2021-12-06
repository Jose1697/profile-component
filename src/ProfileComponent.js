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
      username: { type: String },
      name: { type: String },
      photo: { type: String },
      link: { type: String },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.username = '16joseartica';
    this.name= 'Jose Luis Artica Villarroel';
    this.photo= 'https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg';
    this.link= '';
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
          <img src="${this.photo}" alt="MDN">
        </div>
        <div class="data">
          <div class="names">
            <div class="username">
              <p>${this.username}</p>
            </div>
            <div class="name">
              <p>${this.name}</p>
            </div>
          </div>
          <div class="change">
            <a href="#">${this.link}</a>
          </div>
        </div>
        
      </div>
    `;
  }
}
