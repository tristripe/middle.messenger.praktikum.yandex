import {Block} from "../../core";


interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
  type: string;
}

export class Button extends Block {
  constructor({text, className, onClick, type = "button"}: ButtonProps) {
    super({text, className, type, events: {click: onClick}});
  }

  protected render(): string {
    //language = hbs
    return `
        <button type="{{type}}" class="{{className}}">
            {{text}}
        </button>
    `
  }
}
