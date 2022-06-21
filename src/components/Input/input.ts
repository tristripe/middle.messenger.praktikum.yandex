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
                text,
                className,
                placeholder,
                search,
                labelClass,
                formTitle,
                name,
                forgotText,
                forgotLink,
                value,
                onInput,
                onFocus,
                onBlur,
              }: InputProps) {
    super({
      type, text, className, placeholder, search, labelClass, formTitle, name, forgotText, forgotLink, value,
      events: {
        blur: onBlur,
        focus: onFocus,
        input: onInput
      }
    });
  }

  protected render(): string {
    //language = hbs
    return `
        <input class="input__value {{{className}}}" name="{{name}}" placeholder="{{placeholder}}" value="{{{value}}}" type="text" />
    `
  }
}
