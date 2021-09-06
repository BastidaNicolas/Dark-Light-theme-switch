const darkBtn = document.getElementById('dark');
const toggleBtn = document.getElementById('toggle-container');
// const lightBtn = document.getElementById('light');
const contentCont = document.getElementById('content-container');
const body = document.body;

// darkBtn.addEventListener('click', () => {
//     contentCont.classList.add('content-container-dark');
//     body.classList.add('body-dark');
// });
// lightBtn.addEventListener('click', () => {
//     contentCont.classList.remove('content-container-dark');
//     body.classList.remove('body-dark');
// });
toggleBtn.addEventListener('click', () => {
    contentCont.classList.toggle('content-container-dark');
    body.classList.toggle('body-dark');
    toggleBtn.classList.toggle('dark');
    toggleBtn.classList.toggle('light');
});