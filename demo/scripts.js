let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.style.opacity = '0');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[index].style.opacity = '1';
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto advance slides
setInterval(nextSlide, 5000);

// Initialize slideshow
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);

    // Add click handlers to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});

// Modal functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');

    if (e.target === loginModal) {
        closeModal('loginModal');
    }
    if (e.target === registerModal) {
        closeModal('registerModal');
    }
    if (e.target === forgotPasswordModal) {
        closeModal('forgotPasswordModal');
    }
});

// Handle form submissions
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Add your login logic here
    console.log('Login attempt:', { email, password });

    // For demo purposes, just close the modal
    closeModal('loginModal');
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
    }

    // Add your registration logic here
    console.log('Registration attempt:', { username, email, password });

    // For demo purposes, just close the modal
    closeModal('registerModal');
});

// Add forgot password form handler
document.getElementById('forgotPasswordForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('resetEmail').value;

    // Add your password reset logic here
    console.log('Password reset requested for:', email);

    // Show success message
    alert('Liên kết đặt lại mật khẩu đã được gửi đến email của bạn.');

    // Close the modal
    closeModal('forgotPasswordModal');
});

// Add escape key handler
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal('loginModal');
        closeModal('registerModal');
        closeModal('forgotPasswordModal');
    }
});
