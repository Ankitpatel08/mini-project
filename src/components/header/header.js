export default class Header {
    constructor() {
        this.isLoggedIn = localStorage.getItem('loggedIn') === '1' ? true : false;

        this.headerEl = document.querySelector('header');

        this.headerEl.innerHTML = `
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <a href="/home" class="navbar-item">Home</a>
                <a href="/blogs" class="navbar-item">Blogs</a>
            </div>
        
            <div class="navbar-end">
                <div class="navbar-item">
                <div class="buttons">
                    ${!this.isLoggedIn ? 
                        `<a class="button is-primary sign-up">
                        <strong>Sign up</strong>
                        </a>
                        <a class="button is-light sign-in">
                        Log in
                        </a>
                    ` : `
                        <a class="button is-primary logout">
                        <strong>Logout</strong>
                        </a>
                    `}
                </div>
                </div>
            </div>
            </div>
        </nav>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        let registrationFormEl = document.querySelector('.registration');
        let loginFormEl = document.querySelector('.login');
        let isBlogsPage = window.location.pathname.includes('blogs');

        this.headerEl.querySelectorAll('.navbar-end a').forEach(cta => {
            cta && cta.addEventListener('click', evt => {
                if (evt.currentTarget.classList.contains('logout')) {
                    localStorage.removeItem('loggedIn');
                    this.redirectToHomepage();
                } else if (evt.currentTarget.classList.contains('sign-up')) {
                    isBlogsPage && this.redirectToHomepage();
                    loginFormEl.classList.add('is-hidden');
                    registrationFormEl.classList.remove('is-hidden');
                } else {
                    isBlogsPage && this.redirectToHomepage();
                    loginFormEl.classList.remove('is-hidden');
                    registrationFormEl.classList.add('is-hidden');
                }
            });
        });
    }

    redirectToHomepage() {
        window.location.href = '/home';
    }
}