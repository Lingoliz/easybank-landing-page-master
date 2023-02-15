document.querySelector('.burger').addEventListener('click',(e)=> {
    document.querySelector('header nav ul').classList.toggle('active-menu');
    e.target.classList.toggle('active')
})

