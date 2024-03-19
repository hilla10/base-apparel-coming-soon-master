const input = document.querySelector('#input');
const button = document.querySelector('#submit');

const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

button.addEventListener('click', function (e) {
    e.preventDefault();

    const email = input.value.trim();
    const span = document.querySelector('.form-group span');

    if (regex.test(email)) {
        span.className = 'success'
        span.innerHTML = 'Welcome to Base Apparel';
        document.querySelector('.error-img').style.display = 'none';
    } else {
        span.className = 'error'
        span.innerHTML = 'Please provide a valid email';
        document.querySelector('.error-img').style.display = 'block';
    }
})