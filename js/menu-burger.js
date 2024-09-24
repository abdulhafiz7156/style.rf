console.log("Create by https://abdulhafiz-portfolio.vercel.app/")

document.getElementById('burgerMenu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('mobileMenu').classList.toggle('active');
})