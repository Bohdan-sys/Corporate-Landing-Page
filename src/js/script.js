@@include('just-validate.js');
@@include('modal.js');

window.addEventListener('DOMContentLoaded', function () {
    //create block
    /*   const playBtn = document.querySelector('.button--modal-js');
   
       playBtn.addEventListener('click', () => {
   
           let out1 = document.createElement('div');
   
           let promise = new Promise((resolve, reject) => {
               fetch('iframe.html', {
                   method: "GET",
               })
                   .then(response => {
                       resolve(response.text())
                   })
           });
           promise.then(response => out1.innerHTML = response)
           out1.classList.add('card', 'card--space_bottom_m', 'card-js');
           let card = document.querySelector('.card-js');
           if (!card) {
               document.querySelector('.cell--js').appendChild(out1);
           } else {
               card.remove();
           };
       });*/


    //modal

    openBtn.addEventListener('click', opener);
    closeBtn.addEventListener('click', closer);
    this.addEventListener('click', event => { event.target == modal ? closer() : false });

    //validator

    new window.JustValidate('.form-js', {
        rules: {
            email: {
                required: true,
                email: true
            },

            name: {
                required: true,
                minLength: 3,
                maxLength: 20
            },
            password: {
                strength: {
                    default: true
                },
                required: true,
                password: true,
                minLength: 4,
                maxLength: 12
            },
        }
    });
    new window.JustValidate('.form--submit-js', {
        rules: {
            emailSubmit: {
                required: true,
                email: true
            },
        }
    });
});

