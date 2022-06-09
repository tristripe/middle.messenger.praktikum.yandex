export function popup() {
    let closeButton = document.querySelector('.popup__close') as HTMLElement;
    let popup = document.querySelector('.popup-outer-wrapper') as HTMLElement;
    let passwordTrigger = document.querySelector('.form__change-password') as HTMLElement;

    closeButton.onclick = function () {
        popup.classList.remove('popup-outer-wrapper--active');
    };


    passwordTrigger.onclick = function () {
        popup.classList.add('popup-outer-wrapper--active');
    };
}
