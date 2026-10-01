// Header interactions (search bar, login popup, mobile menu)
const searchBtn = document.querySelector('#search-btn');
const searchBar = document.querySelector('.search-bar-container');
const formBtn = document.querySelector('#login-btn');
const loginForm = document.querySelector('.login-form-container');
const formClose = document.querySelector('#form-close');
const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');

function closePanels() {
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  loginForm.classList.remove('active');
}

window.addEventListener('scroll', closePanels);

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
  searchBtn.classList.toggle('fa-times');
  searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => loginForm.classList.add('active'));
formClose.addEventListener('click', () => loginForm.classList.remove('active'));

// Forms are front-end only for now: validate, then show a friendly note.
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (form.classList.contains('search-bar-container')) return;
    let note = form.querySelector('.form-note');
    if (!note) {
      note = document.createElement('p');
      note.className = 'form-note';
      note.setAttribute('role', 'status');
      form.appendChild(note);
    }
    note.textContent = 'Thanks! This is a demo form, so nothing is sent yet.';
    form.reset();
  });
});
