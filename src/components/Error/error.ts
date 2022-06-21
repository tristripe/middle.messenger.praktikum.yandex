import {Block} from "../../core";

interface ErrorProps {
  text: string;
}

export class Error extends Block {
  protected render(): string {
    //language=hbs
    return `
      <div class="error-value">{{text}}</div>
    `
  }
}
