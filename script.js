function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking on a link on mobile
if (window.innerWidth <= 1024) {
    document.querySelectorAll('.sidebar-nav a, .social-links-sidebar a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('sidebar').classList.remove('active');
        });
    });
}

// Optional: Close sidebar when clicking outside of it on mobile
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('sidebar');
        const toggle = document.querySelector('.mobile-toggle');
        
        if (!sidebar.contains(event.target) && !toggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    }
});