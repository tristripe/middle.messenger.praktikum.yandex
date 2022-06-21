import Block from '../../core/Block';

export class Page404 extends Block {
  render() {
    // language=hbs
    return `
        {{header}}
        <main>
            <div class="outer-wrapper">
                <div class="error">
                    <div class="error__wrapper">
                        <h1 class="error__title">404</h1>
                        <p class="error__text">Мы ничего не нашли</p>
                        <a href="#" class="error__link">Назад к чатам</a>
                    </div>
                </div>
            </div>
        </main>
    `
  }
}
