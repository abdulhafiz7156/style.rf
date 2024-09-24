
document.getElementById('burgerMenu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
})