const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });


}

navSlide();
