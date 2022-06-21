export enum ValidationRules {
  FirstName = 'first_name',
  Login = 'login',
  Email = 'email',
  Password = 'password',
  Phone = 'phone',
  Message = 'message'
}


export function validateValue(rule: string, value: string) {
  switch (rule) {
    case ValidationRules.FirstName:
      let namePattern = /^[A-ZА-ЯЁ\-]+$/i;
      if (!(namePattern.test(value) && (value.charAt(0) === value.charAt(0).toUpperCase()))) {
        return 'Допустима кириллица или латиница, первая буква заглавная, без пробелов и цифр, без спецсимволов (кроме дефиса)';
      }
      break;
    case ValidationRules.Login:
      let loginPattern = /(?=.*[A-Za-z\-_])/;
      let noSpacePattern = /^[^\s]*$/
      if (value.length < 3 || value.length > 20) {
        return 'Логин должен быть от 3 до 20 символов'
      } else if (!loginPattern.test(value) || (!noSpacePattern.test(value))) {
        return "Латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)";
      }
      break;
    case ValidationRules.Email:
      let emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
      if (!emailPattern.test(value)) {
        return 'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буква'
      }
      break;
    case ValidationRules.Password:
      let passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordPattern.test(value)) {
        return 'Пароль должен быть не менее восьми символов, хотя бы одна заглавная буква и цифра'
      } else if (value.length > 20) {
        return 'Пароль не должен быть более 20 символов'
      }
      break;
    case ValidationRules.Phone:
      let phonePattern = /^(([\d]|\+)?)[\d]{10,14}$/;
      if (!phonePattern.test(value)) {
        return 'от 10 до 15 символов, состоит из цифр, может начинается с плюса'
      }
      break;
    case ValidationRules.Message: {
      if (value.length === 0) {
        return 'Сообщение не должно быть пустым'
      }
    }
    break;
    default:
      return '';
  }
}
