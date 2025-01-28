// Example of JavaScript functionality: Form submission behavior
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
    } else {
        alert('Please fill out all fields.');
    }
});

let currentIndex = 0;
const items = document.querySelectorAll('.testimonial-item');
const totalItems = items.length;

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const carouselSlide = document.querySelector('.carousel-slide');

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * (items[0].offsetWidth + 40); // width of the item + margin
    carouselSlide.style.transform = `translateX(${offset}px)`;
}

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = item.getAttribute('href').substring(1); // Mendapatkan ID dari href
        const targetElement = document.getElementById(targetId);

        // Animasi scroll menuju elemen yang dipilih
        window.scrollTo({
            top: targetElement.offsetTop - 60, // Sesuaikan dengan tinggi header
            behavior: 'smooth'
        });
    });
});

// Menampilkan atau menyembunyikan tombol Scroll ke Atas berdasarkan posisi scroll
window.onscroll = function() {
    let scrollToTopButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Menampilkan tombol jika menggulir lebih dari 100px
    } else {
        scrollToTopButton.style.display = "none"; // Menyembunyikan tombol jika di atas
    }
};

// Aksi klik tombol Scroll ke Atas
document.getElementById("scroll-to-top").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Menggulir ke atas dengan animasi halus
});
