import Block from '../../core/Block';

export class Chat extends Block {
  render() {
    // language=hbs
    return `
        <main>
            <div class="outer-wrapper">
                <section class="frame">
                    <div class="frame__wrapper">
                        <div class="frame__content chat">
                            <header class="chat__header">
                                <div class="chat__input-wrapper">
                                    {{{ControlledInput className="chat__value" placeholder="Поиск"}}}
                                </div>
                            </header>
                            <section class="chat__content">
                                <ul class="chat__list">
                                    {{#each avatars}}
                                        {{#with this}}
                                            <li class="chat__item">
                                                {{{Avatar previewMessage="{{previewMessage}}"
                                                          name="{{name}}" }}}
                                                {{{Button className="button-close chat__close" text="X"}}}
                                            </li>
                                        {{/with}}
                                    {{/each}}
                                </ul>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    `
  }
}
