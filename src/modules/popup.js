export function popup() {
  let closeButton = document.querySelector('.popup__close');
  let popup = document.querySelector('.popup-outer-wrapper');
  let passwordTrigger = document.querySelector('.form__change-password');

  closeButton.onclick = function () {
    popup.classList.remove('popup-outer-wrapper--active');
  };

  passwordTrigger.onclick = function () {
    popup.classList.add('popup-outer-wrapper--active');
  };
}
