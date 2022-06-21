import {Block} from "../../core";


export interface InputProps {
  text: string;
  onChange: () => void;
  className?: string;
  placeholder?: string;
  labelClass?: string;
  formTitle?: string;
  search?: boolean;
  name: string;
  type?: 'text' | 'password' | 'email' | 'search';
  forgotLink?: string;
  forgotText?: string;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onInput?: () => void;
}

export class Input extends Block {
  constructor({
                type = 'text',
                className,
                placeholder,
                name,
                value,
                onInput,
                onFocus,
                onBlur,
              }: InputProps) {
    super({
      type, className, placeholder, name, value,
      events: {
        blur: onBlur,
        focus: onFocus,
        input: onInput
      },
    });
  }

  protected render(): string {
    //language = hbs
    return `
        <input class="input__value {{{className}}}" name="{{name}}" placeholder="{{placeholder}}" value="{{{value}}}" type="text" />
    `
  }
}
