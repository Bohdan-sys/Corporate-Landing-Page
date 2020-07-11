let openBtn = document.querySelector('.js-button--modal'),
    closeBtn = document.querySelector('.js-button--close'),
    modal = document.querySelector('.js-modal'),
    body = document.querySelector('body');

const getData = (url, method) => {
    return fetch(
        url, {
        method, method
    }
    ).then(res => res.text())
};

const toggleClass =
    (element, classname) =>
        element.classList.toggle(classname);

const setModalContent =
    string =>
        document
            .querySelector('.js-modal')
            .querySelector('.js-modal__container--wrapper')
            .innerHTML = string;


const toggleContent = (content) => {
    setModalContent(content)
    toggleClass(modal, 'is-active');
    toggleClass(body, 'is-active');
};

const openAndInject = (url, method = 'GET') => {
    getData(url, method).then(response => {
        toggleContent(response)
    })
};

//use in DOM

// openBtn.addEventListener('click', () => openAndInject('iframe.html'));
// closeBtn.addEventListener('click', () => toggleContent(''));
// this.addEventListener('mouseup', e => { e.target == modal ? toggleContent('') : false });



/*let openBtn = document.querySelector('.button--modal-js'),
    closeBtn = document.querySelector('.button--close-js'),
    modal = document.querySelector('.modal'),
    body = document.querySelector('body');


function opener() {

    let promise = new Promise((resolve, reject) => {
        fetch('iframe.html', {
            method: "GET",
        })
            .then(response => {
                resolve(response.text())
            })
    });
    promise.then(response => document.querySelector('.modal__container-js').insertAdjacentHTML('beforeend', response));
    modal.classList.add('is-active');
    body.classList.add('is-active');
}

function closer() {
    modal.classList.remove('is-active');
    body.classList.remove('is-active');
    document.querySelector('.modal__container-js').removeChild(document.querySelector('iframe'));
}
*/
//use in DOM
// openBtn.addEventListener('click', opener);
// closeBtn.addEventListener('click', closer);
// window.addEventListener('mouseup', event => { event.target == modal ? closer() : false })

















