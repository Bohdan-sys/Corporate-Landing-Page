let openBtn = document.querySelector('.button--modal-js'),
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

//use in DOM
// openBtn.addEventListener('click', opener);
// closeBtn.addEventListener('click', closer);
// window.addEventListener('mouseup', event => { event.target == modal ? closer() : false })

















