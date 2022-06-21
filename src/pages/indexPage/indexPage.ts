import Block from '../../core/Block';

export class IndexPage extends Block {
  render() {
    // language=hbs
    return `
        {{header}}
        <main>
            <div class="links-wrapper">
                <p><a href="/login.html">Логин</a></p>
                <p><a href="/register.html">Регистрация</a></p>
                <p><a href="/settings.html">Настройки</a></p>
                <p><a href="/friends.html">Список чатов (заглушка)</a></p>
                <p><a href="/chat.html">Чат (заглушка)</a></p>
                <p><a href="/404.html">404</a></p>
                <p><a href="/500.html">500</a></p>
            </div>
        </main>
    `
  }
}
