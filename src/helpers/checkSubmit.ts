import {validateValue} from "./validators";


export function CheckSubmit(name: string, rule: string) {
  if (document.querySelector(`.js-${name} .error-value`)) {
    // @ts-ignore
    document.querySelector(`.js-${name} .error-value`).innerHTML = validateValue(rule, document.querySelector(`[name='${name}']`));
  }
}
