import Block from '../../core/Block';
import {ValidationRules} from "../../helpers/validators";
import {CheckSubmit} from "../../helpers/checkSubmit";

interface RegisterProps {

}


export class Register extends Block {
  constructor(props: RegisterProps) {
    super({
        ...props,
        onClickButton: () => {
          let values = (this.element?.querySelectorAll('input')) as HTMLInputElement[] | undefined;

          if (values) {
            values.forEach(item => console.log(item.name, item.value))
          }
          CheckSubmit("first_name", ValidationRules.FirstName);
          CheckSubmit("second_name", ValidationRules.FirstName);
          CheckSubmit("login", ValidationRules.Login);
          CheckSubmit("email", ValidationRules.Email);
          CheckSubmit("password", ValidationRules.Password);
          CheckSubmit("phone", ValidationRules.Phone);
        }
      }
    );
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="outer-wrapper">
                <section class="popup login">
                    <div class="login__wrapper">
                        <h1 class="title login__title">Регистрация</h1>
                        <div class="form">
                            <form>
                                {{{ControlledInput labelClass="form__label js-first_name"
                                                   formTitle="Имя" name="first_name"
                                                   className="form__input"
                                                   validationRules="${ValidationRules.FirstName}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-second_name"
                                                   formTitle="Фамилия" name="second_name"
                                                   className="form__input"
                                                   validationRules="${ValidationRules.FirstName}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-login"
                                                   formTitle="Логин" name="login"
                                                   className="form__input"
                                                   validationRules="${ValidationRules.Login}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-email" 
                                                   formTitle="Электронная почта" name="email"
                                                   className="form__input"
                                                   validationRules="${ValidationRules.Email}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-password" type="password" 
                                                   formTitle="Пароль" name="password" 
                                                   className="form__input"
                                                   validationRules="${ValidationRules.Password}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-phone" 
                                                   formTitle="Телефон" name="phone"
                                                   className="form__input"
                                                   validationRules="${ValidationRules.Phone}"
                                }}}
                                <div class="form__submit-wrapper">
                                    {{{Button className="form__submit" text="Регистрация" onClick=onClickButton}}}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `
  }
}
