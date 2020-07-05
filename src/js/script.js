@@include('just-validate.js');

window.addEventListener('DOMContentLoaded', () => {

    const playBtn = document.querySelector('.button--play-js');

    // function creator(elem) {
    //     elem = document.createElement('div');

    // let promise = new Promise((resolve, reject) => {
    //     fetch('iframe.html', {
    //         method: "GET",
    //     })
    //         .then(response => {
    //             resolve(response.text())
    //         })

    // });
    // promise.then(response => elem.innerHTML = response)
    //     elem.classList.add('card', 'card--space_bottom_l', 'card-js');
    //     return document.querySelector('.cell--js').appendChild(elem)
    // }



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
        out1.classList.add('card', 'card--space_bottom_l', 'card-js');

        if (!document.querySelector('.card-js')) {
            document.querySelector('.cell--js').appendChild(out1);
        } else {
            document.querySelector('.card-js').remove();
        };
    });


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

