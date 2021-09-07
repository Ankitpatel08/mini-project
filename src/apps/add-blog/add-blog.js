import './add-blog.scss';

class AddBlog {
    constructor() {
        this.loggedIn = localStorage.getItem('loggedIn') === '1' ? true : false;

        if (!this.loggedIn) {
            window.location.href = '/home';
        }
    }
}

new AddBlog();