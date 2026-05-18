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

function initRowCount() {
    const rows = document.querySelectorAll('#participantsTable tbody tr');
    const counter = document.getElementById('rowCount');
    if (counter && rows.length) counter.textContent = rows.length;
}

function computeTotals() {
    const rows = document.querySelectorAll('#participantsTable tbody tr');
    let pendingCount = 0, pendingUSD = 0;
    let paidCount = 0, paidUSD = 0;
    let totalKids = 0, boys = 0, girls = 0;

    rows.forEach(row => {
        const badge = row.querySelector('.badge');
        const recCell = row.querySelector('td[data-label="Recaudación"]');
        const kidsCell = row.querySelector('td[data-label="N.º Niños"]');
        const childList = row.querySelector('.children-list');

        const amount = recCell ? parseFloat(recCell.textContent.replace('$', '').trim()) || 0 : 0;
        const kids = kidsCell ? parseInt(kidsCell.textContent.trim()) || 0 : 0;

        if (badge && badge.classList.contains('badge--pending')) {
            pendingCount++; pendingUSD += amount;
        } else if (badge && badge.classList.contains('badge--paid')) {
            paidCount++; paidUSD += amount;
        }

        totalKids += kids;

        if (childList) {
            childList.querySelectorAll('li').forEach(li => {
                if (li.textContent.includes('👦')) boys++;
                else if (li.textContent.includes('👧')) girls++;
            });
        }
    });

    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set('stat-pending-count', pendingCount);
    set('stat-pending-usd', '$' + pendingUSD.toFixed(2).replace(/\.00$/, ''));
    set('stat-paid-count', paidCount);
    set('stat-paid-usd', '$' + paidUSD.toFixed(2).replace(/\.00$/, ''));
    set('stat-total-kids', totalKids);
    set('stat-boys', boys);
    set('stat-girls', girls);
}

// Tabs functionality
document.addEventListener('DOMContentLoaded', () => {
    initRowCount();
    computeTotals();
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
