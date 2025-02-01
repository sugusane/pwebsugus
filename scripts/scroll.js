// Smooth Scroll untuk Navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Mencegah perilaku default link
        const targetId = this.getAttribute('href'); // Ambil ID target
        const targetSection = document.querySelector(targetId); // Ambil elemen target

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Animasi scroll halus
                block: 'start' // Scroll ke bagian atas section
            });
        }
    });
});

// Scroll Animasi untuk Section
const animateElements = document.querySelectorAll('.animate');

const checkScroll = () => {
    animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);