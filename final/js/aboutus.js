const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq =>{
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})
 

const submitButton = document.querySelector('.inputBox input[type="submit"]');

submitButton.addEventListener('mouseenter', function() {
    submitButton.style.backgroundColor = '#3c3c6f';
});

submitButton.addEventListener('mouseleave', function() {
    submitButton.style.backgroundColor = '#0e3959';
});


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});