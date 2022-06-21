import {InputProps} from "../Input/input";
import {Block} from "../../core";
import {validateValue, ValidationRules} from "../../helpers/validators";

interface ControlledInputProps extends InputProps {
  label: string;
  validationRules: ValidationRules;
}

export class ControlledInput extends Block {
  constructor({label, labelClass, className, validationRules, ...props}: ControlledInputProps) {
    super({
      ...props,
      label,
      className,
      labelClass,
      checkForm: (e: FocusEvent) => {
        const input = e.target as HTMLInputElement;
        const value = input.value;

        if (validationRules) {
          const errorText = validateValue(validationRules, value);
          console.log(errorText);
          this.refs.error.setProps({text: errorText});
        }
      },
    });
  }

  protected render(): string {
    //language=hbs
    return `
        <label class="input {{labelClass}}">
            <span class="form__title">{{formTitle}}</span>
            {{{Input type=type name=name placeholder=placeholder onFocus=checkForm onBlur=checkForm className=className value=value}}}
            {{{Error ref="error"}}}
        </label>
    `
  }
}
