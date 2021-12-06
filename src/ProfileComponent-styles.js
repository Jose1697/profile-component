/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.profile {
  display: flex;
}

.photo {
  margin-right: 12px;
}

.photo img {
  height: var(--height--profile--card, 100px);
  width: var(--width--profile--card, 100px);
  border-radius: 50%;
}

.data {
  display: flex;
}

.names {
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.names p {
  margin: 2px;
}

.username {
  font-weight: bold;
}

.name {
  color: rgba(var(--font, 142, 142, 142), 1);
}

.change {
  display: flex;
  align-items: center;
}

.change a {
  text-decoration: none;
}
`;