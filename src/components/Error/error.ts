import {Block} from "../../core";

export class Error extends Block {
  protected render(): string {
    //language=hbs
    return `
      <div class="error-value">{{text}}</div>
    `
  }
}
