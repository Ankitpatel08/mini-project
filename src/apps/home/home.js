import './home.scss';

class Home {
    constructor() {
        this.loggedIn = localStorage.getItem('loggedIn') === '1' ? true : false;

        if (this.loggedIn) {
            window.location.href = '/blogs';
        }

        this.loginFormEl = document.querySelector('#loginForm');
        this.registrationFormEl = document.querySelector('#registrationForm');

        this.addEventListeners();
    }

    addEventListeners() {
        this.loginFormEl && this.loginFormEl.addEventListener('submit', evt => {
            evt.preventDefault();

            localStorage.setItem('loggedIn', '1');
            window.location.href = '/blogs';
        });

        this.registrationFormEl && this.registrationFormEl.addEventListener('submit', evt => {
            evt.preventDefault();

            this.registrationForm.parentElement.classList.add('is-hidden');
            document.querySelector('.login').classList.remove('is-hidden');
        });
    }
}

new Home();