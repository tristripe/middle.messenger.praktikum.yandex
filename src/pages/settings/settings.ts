import Block from '../../core/Block';
import {ValidationRules} from "../../helpers/validators";
import {CheckSubmit} from "../../helpers/checkSubmit";

interface SettingsProps {
}

export class Settings extends Block {
  constructor(props: SettingsProps) {
    super({
        ...props,
        openModal: () => {
          let modal = document.querySelector('.popup-outer-wrapper') as HTMLElement;
          let modalTrigger = document.querySelector('.form__change-password') as HTMLElement;
          let close = document.querySelector('.popup__close') as HTMLElement;
          let cancel = document.querySelector('.form-button--cancel') as HTMLElement;
          modalTrigger.onclick = function () {
            modal.classList.add('popup-outer-wrapper--active');
          };
          close.onclick = function () {
            modal.classList.remove('popup-outer-wrapper--active');
          };

          cancel.onclick = function () {
            modal.classList.remove('popup-outer-wrapper--active');
          }
        },

        onClickButton: () => {
          let values = (this.element?.querySelectorAll('#settings input')) as HTMLInputElement[] | undefined;

          if (values) {
            values.forEach(item => console.log(item.name, item.value))
          }
          CheckSubmit("first_name", ValidationRules.FirstName);
          CheckSubmit("second_name", ValidationRules.FirstName);
          CheckSubmit("login", ValidationRules.Login);
          CheckSubmit("email", ValidationRules.Email);
          CheckSubmit("phone", ValidationRules.Phone);
        },
        checkPassword: () => {
          CheckSubmit("old_password", ValidationRules.Password);
          CheckSubmit("new_password", ValidationRules.Password);
        }
      }
    )
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="outer-wrapper">
                <section class="frame">
                    <div class="frame__wrapper">
                        <div class="frame__content settings">
                            {{{Button className="button-close" text="x"}}}
                            <div class="form">
                                <form id="settings"">
                                    <div class="form__settings">
                                        <div class="form__avatar-section">
                                            <label class="form__label form__label-avatar">
                                                <picture>

                                                </picture>
                                                <input type="file" name="avatar" id="avatar" class="form__avatar">
                                            </label>
                                        </div>
                                        <div class="form__section">
                                            <h3 class="form__settings-title">Вася Петров</h3>
                                            <div class="form__row">
                                                {{{ControlledInput labelClass="form__label js-first_name" className="form__input"
                                                                   formTitle="Имя" name="first_name" value="Вася"
                                                                   onFocus=onFocus onBlur=onBlur
                                                                   ref="firstnameinput"
                                                                   validationRules="${ValidationRules.FirstName}"
                                                }}}
                                                {{{ControlledInput labelClass="form__label js-second_name" className="form__input"
                                                                   formTitle="Фамилия" name="second_name"
                                                                   value="Петров"
                                                                   onFocus=onFocus onBlur=onBlur
                                                                   ref="secondnameinput"
                                                                   validationRules="${ValidationRules.FirstName}"
                                                }}}
                                            </div>
                                            <div class="form__row">
                                                {{{ControlledInput labelClass="form__label js-login" className="form__input"
                                                                   formTitle="Логин" name="login" value="IvanDrago"
                                                                   onFocus=onFocus onBlur=onBlur
                                                                   ref="logininput"
                                                                   validationRules="${ValidationRules.Login}"
                                                }}}
                                                {{{ControlledInput labelClass="form__label js-email" className="form__input"
                                                                   formTitle="Электронная почта" name="email"
                                                                   value="pochta@yandex.ru"
                                                                   onFocus=onFocus onBlur=onBlur
                                                                   ref="emailinput"
                                                                   validationRules="${ValidationRules.Email}"
                                                }}}
                                            </div>
                                            <div class="form__row">
                                                {{{ControlledInput labelClass="form__label js-phone" className="form__input"
                                                                   formTitle="Телефон" name="phone"
                                                                   value="+79998845735"
                                                                   onFocus=onFocus onBlur=onBlur
                                                                   ref="phoneinput"
                                                                   validationRules="${ValidationRules.Phone}"
                                                }}}
                                            </div>
                                            <div class="form__button-wrapper">
                                                {{{Button className="form__change-password" text="Изменить пароль"
                                                          onClick=openModal}}}
                                            </div>
                                            <div class="form__submit-wrapper">
                                                {{{Button className="form__submit" text="Сохранить" onClick=onClickButton}}}
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="popup-outer-wrapper">
                <section class="popup">
                    <div class="popup__wrapper">
                        {{{Button className="popup__close" text="╳"}}}
                        <h1 class="title login__title">Изменить свой пароль</h1>
                        <div class="form">
                            <form id="change_password"">
                                {{{ControlledInput type="password" labelClass="form__label js-old_password" className="form__input"
                                                   formTitle="Текущий пароль" name="old_password"
                                                   validationRules="${ValidationRules.Password}"
                                }}}
                                {{{ControlledInput type="password" labelClass="form__label js-new_password" className="form__input"
                                                   formTitle="Новый пароль" name="new_password"
                                                   validationRules="${ValidationRules.Password}"
                                }}}
                                <div class="form__submit-wrapper">
                                    {{{Button className="form-button form-button--cancel" text="Отмена"}}}
                                    {{{Button className="form-button form-button--confirm" text="Сохранить" onClick=checkPassword}}}
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
