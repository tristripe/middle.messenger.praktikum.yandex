import Block from '../../core/Block';
import {ValidationRules} from "../../helpers/validators";


interface FriendsProps {
  avatars: Array<{ previewMessage: string; name?: string }>
}

export class Friends extends Block {
  constructor({avatars}: FriendsProps) {
    super({avatars});
  }

  render() {
    // language=hbs
    return `
        <main>
            <div class="outer-wrapper">
                <section class="frame">
                    <div class="frame__content friends">
                        <header class="friends__header">
                            <div class="friends__search">
                                {{{ControlledInput placeholder="Поиск"}}}
                            </div>
                            <div class="friends__tools-panel">
                                {{{Avatar name="Вася" }}}
                            </div>
                        </header>
                        <div class="friends__main">
                            <aside class="friends__side-menu">
                                <ul class="message-list">
                                    {{#each avatars}}
                                        {{#with this}}
                                            <li class="message-list__item">
                                                {{{Avatar avatarClose='true' previewMessage="{{previewMessage}}"
                                                          name="{{name}}" }}}
                                            </li>
                                        {{/with}}
                                    {{/each}}
                                </ul>
                                <div class="friends__status">
                                    {{{Avatar}}}
                                </div>
                            </aside>
                            <section class="friends__dialog dialog">
                                <ul class="dialog__list">
                                    <li class="dialog__item">
                                        {{{Avatar dateNumber="18.12.2022" startMessage="Привет, как оно?"}}}
                                        <div class="dialog__text-content">
                                            <p>Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в
                                                какой-то момент попросила Хассельблад адаптировать модель SWC для
                                                полетов на Луну.
                                                Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову
                                                говоря, все тушки этих камер все еще находятся на поверхности Луны,
                                                так как астронавты с собой забрали только кассеты с пленкой.
                                            </p>
                                        </div>
                                    <li class="dialog__item">
                                        {{{Avatar dateNumber="13:30" startMessage="Круто!" name="IvanDrago"}}}
                                        <div class="dialog__text-content">
                                        </div>
                                    </li>
                                </ul>
                                <section class="input-message">
                                    <label class="new-message">
                                        <button class="new-message__plus">
                                            +
                                        </button>
                                        {{{ControlledInput type="text" className="new-message__value" name="message"
                                                           onFocus=onFocus onBlur=onBlur
                                                           ref='messageInput'
                                                           validationRules="${ValidationRules.Message}"}}}
                                    </label>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `
  }
}
