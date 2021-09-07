import './blogs.scss';

class Blogs {
    constructor() {
        this.loggedIn = localStorage.getItem('loggedIn') === '1' ? true : false;

        if (this.loggedIn) {
            document.querySelector('.add-blog').classList.remove('is-hidden');
        }
    }
}

new Blogs();