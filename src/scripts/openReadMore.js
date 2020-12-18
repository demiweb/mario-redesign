let allOpenMoreButtons = [...document.querySelectorAll('.mario-vacancies__single-vacancy > div button')];

allOpenMoreButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.mario-vacancies__single-vacancy').classList.toggle('vacancy-more');
        if (btn.closest('.mario-vacancies__single-vacancy').classList.contains('vacancy-more')) {
            btn.innerHTML = 'Приховати';
            btn.classList.add('opened')
        } else {
            btn.innerHTML = 'Детальніше'
            btn.classList.remove('opened')

        }
    })
})