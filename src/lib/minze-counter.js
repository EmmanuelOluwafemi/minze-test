import { MinzeElement } from 'minze'

export class MinzeCounter extends MinzeElement {

  html = () => `
    <minze-button size="large">
      Large Button
    </minze-button>
    <minze-button size="small">
      Small Button
    </minze-button>
    <minze-button size="medium" outline=true>
      Medium Outline Button
    </minze-button>
    <minze-button size="medium" disabled=true>
      Medium Disabled Button
    </minze-button>
  `

  css = () => `
    :host {
      width: 100%;
      min-height: calc(100vh - 2rem);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.5rem;
      padding: 40px;
    }
  `
}
