@@include('just-validate.js');
@@include('modal.js');

window.addEventListener('DOMContentLoaded', function () {

    //modal

    openBtn.addEventListener('click', () => openAndInject('iframe.html'));
    closeBtn.addEventListener('click', () => toggleContent(''));
    this.addEventListener('click', e => {
        console.log(e)
        e.target == modal || e.toElement == modal || e.toElement == modal ? toggleContent('') : false
    });

    // openBtn.addEventListener('click', opener);
    // closeBtn.addEventListener('click', closer);
    // this.addEventListener('click', event => { event.target == modal ? closer() : false });

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

