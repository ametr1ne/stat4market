const loginBtn = document.querySelector('.header__burger')

loginBtn.addEventListener('click', function () {
    document.querySelector('.header__wrapper').classList.toggle('open-menu')
})