// элемент, содержащий контент модального окна (например, имеющий id="modal")
// const elemModal = document.querySelector('#modalEnd');
// активируем элемент в качестве модального окна с параметрами по умолчанию
// const modal = new bootstrap.Modal(elemModal);

// modal.show();

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Andriod/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    Mobile: function () {
        return navigator.userAgent.match(/Mobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Mobile() ||
            isMobile.Windows());
    }
};

let buttonHandler = new ButtonHandler('.input-elem', arrayNew, isMobile.any());

buttonHandler.render();
buttonHandler.checkBtnNext();


document.querySelector('#next').onclick = () => {
    buttonHandler.counter('next');
}

document.querySelector('#last').onclick = () => {
    buttonHandler.counter('last');
}

document.querySelector('#result').onclick = () => {
    buttonHandler.counter('result');
}








