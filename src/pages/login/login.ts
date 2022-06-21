import Block from '../../core/Block';
import {ValidationRules} from "../../helpers/validators";
import {CheckSubmit} from "../../helpers/checkSubmit";

interface LoginProps {

}

export class Login extends Block {
  constructor(props: LoginProps) {

    super({
        ...props,
        onClickButton: (e: FocusEvent) => {
          e.preventDefault();
          let values = (this.element?.querySelectorAll('input')) as HTMLInputElement[] | undefined;
          if (values) {
            values.forEach(item => console.log(item.name, item.value));
          }
          CheckSubmit("login", ValidationRules.Login);
          CheckSubmit("password", ValidationRules.Password);
        },
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
                        <h1 class="title login__title">Логин</h1>
                        <div class="form">
                            <form>
                                {{{ControlledInput labelClass="form__label js-login" type="text"
                                                   formTitle="Логин"
                                                   name="login"
                                                   ref="logininput"
                                                   validationRules="${ValidationRules.Login}"
                                }}}
                                {{{ControlledInput labelClass="form__label js-password" type="password"
                                                   formTitle="Пароль" name="password"
                                                   className="form__input" ref="passwordinput"
                                                   validationRules="${ValidationRules.Password}"
                                }}}
                                <div class="form__submit-wrapper">
                                    {{{Button className="form__submit" type="submit" text="Вход" onClick=onClickButton }}}
                                </div>
                                <p class="form__register-tip">Нужна авторизация? <a href="#" class="form__link">Зарегистрироваться</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `
  }
}
