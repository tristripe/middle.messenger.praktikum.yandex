import {registerComponent, renderDOM} from './core';
import './scss/main.scss'
import Avatar from "./components/Avatar";
import Button from "./components/Button";
import ErrorComponent from "./components/Error";
import ControlledInput from "./components/ControlledInput";
import Friends from "./pages/friends";
import Chat from "./pages/chat";
import Settings from "./pages/settings";
import Login from "./pages/login";
import Register from "./pages/register";
import Page404 from "./pages/404";
import IndexPage from "./pages/indexPage";
import Page500 from "./pages/500";
import Input from "./components/Input";

registerComponent(Avatar);
registerComponent(Input);
registerComponent(Button);
registerComponent(ErrorComponent);
registerComponent(ControlledInput);

document.addEventListener("DOMContentLoaded", () => {
  const path = document.location.pathname;
  let app = {};

  switch (path) {
    case '/login.html':
      app = new Login({});
      break;
    case '/register.html':
      app = new Register({});
      break;
    case '/settings.html':
      app = new Settings({});
      break;
    case '/chat.html':
      app = new Chat({
        avatars: [
          {previewMessage: "Привет", name: "Иван"},
          {previewMessage: "Доброго дня", name: "Михаил"},
          {previewMessage: "Жду отчет", name: "Пётр Петрович"},
          {previewMessage: "Как ты", name: "София"},
          {previewMessage: "Хелоу", name: "Дадул"},
        ]
      });
      break;
    case '/friends.html':
      app = new Friends({
        avatars: [
          {previewMessage: "Привет", name: "Иван"},
          {previewMessage: "Доброго дня", name: "Михаил"},
          {previewMessage: "Жду отчет", name: "Пётр Петрович"},
          {previewMessage: "Как ты", name: "София"},
          {previewMessage: "Хелоу", name: "Дадул"},
        ]
      });
      break;
    case '/404.html':
      app = new Page404({});
      break;
    case '/500.html':
      app = new Page500({});
      break;
    default:
      app = new IndexPage({});
  }

  renderDOM(app);
});
