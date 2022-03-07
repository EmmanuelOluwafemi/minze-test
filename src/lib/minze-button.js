import { MinzeElement } from 'minze'

export class MinzeButton extends MinzeElement {

  attrs = [
    ['size', 'small'],
    ['outline', false],
    ['disabled', false],
  ]

  html = () => `
    <button class="button">
      <slot></slot>
    </button>
  `

  css = () => `
    .button {
      background: ${this.outline ? 'none' : this.disabled ? 'var(--primary-disabled)' : 'var(--primary-default)'};
      color: ${this.outline ? 'var(--primary-default)' : 'var(--white)'};
      font-size: ${this.size === 'small' ? 'var(--font-size-sm)' : this.size === 'medium' ? 'var(--font-size-md)' : 'var(--font-size-lg)'};
      font-weight: 600;
      border: ${this.outline ? '2px solid var(--primary-default)' : 'none'};
      border-radius: var(--border-radius);
      padding: ${this.size === 'small' ? 'var(--padding-y-sm) var(--padding-x-sm)' : this.size === 'medium' ? 'var(--padding-y-md) var(--padding-x-md)' : 'var(--padding-y-lg) var(--padding-x-lg)'}; 
      cursor: pointer;
      transition: background 0.3s ease-in-out;
    }

    .button:hover {
      background: ${this.outline ? 'none' : this.disabled ? 'var(--primary-disabled)' : 'var(--primary-default)'};
      color: ${this.outline ? 'var(--primary-default)' : 'var(--white)'};
      boder-color: ${this.outline ? 'var(--primary-active)' : 'none'};
    }

    .button:active {
      background: var(--primary-active);
    }
  `
}
