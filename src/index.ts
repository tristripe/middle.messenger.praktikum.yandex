import {popup} from './modules/popup';
import {eventbus} from "./modules/eventbus";

popup();
eventbus();

const eventBus = new EventBus();

const callback = () => {
  console.count('Event emitted');
}

eventBus.on('myEvent', callback);
eventBus.on('myEvent', callback);
eventBus.on('myEvent', callback);

eventBus.emit('myEvent'); // обработчик будет вызван 3 раза

eventBus.off('myEvent', callback); // удалятся все три копии обработчика
