(function () {
    var nav = document.getElementById('site-navbar');
    if (!nav) return;

    nav.innerHTML = `
        <div class="logo">
            <a href="index.html" style="text-decoration:none;color:inherit;display:flex;align-items:center;gap:10px;">
                <img src="system/icono.png" alt="Logo" class="logo-icon">
                <span class="logo-text">Urb. Bonavila Etapa Fuego</span>
            </a>
        </div>
        <ul class="nav-links">
            <li><a href="index.html" data-page="index">Inicio</a></li>
            <li><a href="directorio.html" data-page="directorio">Directorio</a></li>
            <li><a href="eventos.html" data-page="eventos">Eventos</a></li>
            <li><a href="emprendimientos.html" data-page="emprendimientos">Emprendimientos</a></li>
            <li><a href="index.html#contacto">Contacto</a></li>
        </ul>
        <button class="menu-toggle" aria-label="Menú">☰</button>
    `;

    // Marca el enlace activo según la página actual
    var filename = window.location.pathname.split('/').pop() || 'index.html';

    var pageMap = {
        'index.html': 'index',
        'directorio.html': 'directorio',
        'eventos.html': 'eventos',
        'emprendimientos.html': 'emprendimientos'
    };

    var activePage = pageMap[filename];

    // Las páginas de eventos individuales resaltan "Eventos"
    if (!activePage && filename.startsWith('evento-')) {
        activePage = 'eventos';
    }

    if (activePage) {
        var link = nav.querySelector('a[data-page="' + activePage + '"]');
        if (link) link.classList.add('active');
    }
})();
