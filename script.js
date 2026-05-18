// Table search filter
function filterTable() {
    const query = document.getElementById('tableSearch').value.toLowerCase();
    const rows = document.querySelectorAll('#participantsTable tbody tr');
    let visible = 0;
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        const show = text.includes(query);
        row.style.display = show ? '' : 'none';
        if (show) visible++;
    });
    const counter = document.getElementById('rowCount');
    if (counter) counter.textContent = visible;
}

// Tabs functionality
document.addEventListener('DOMContentLoaded', () => {
    // Tabs functionality — scoped per .tabs container
    document.querySelectorAll('.tabs').forEach(tabContainer => {
        const buttons = tabContainer.querySelectorAll('.tab-btn');
        const contents = tabContainer.querySelectorAll('.tab-content');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.dataset.tab;

                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));

                button.classList.add('active');
                document.getElementById(target).classList.add('active');
            });
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Smooth reveal on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.event-card, .profile-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
