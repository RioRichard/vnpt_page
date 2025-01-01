document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const menuButton = document.querySelector('#mobile-menu-button');
    const sidebar = document.querySelector('aside');
    const mainContent = document.querySelector('.main-content');

    if (menuButton && sidebar) {
        menuButton.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
                sidebar.classList.remove('show');
            }
        });
    }

    // Highlight current page in navigation
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active-nav-link');
        }
    });

    // Handle confirmation dialogs
    document.querySelectorAll('[data-confirm]').forEach(element => {
        element.addEventListener('click', (e) => {
            if (!confirm(element.dataset.confirm)) {
                e.preventDefault();
            }
        });
    });

    // Handle alerts
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        const closeButton = alert.querySelector('.close-alert');
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                alert.remove();
            });
        }
    });
});
