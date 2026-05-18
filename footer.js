(function () {
    var placeholder = document.getElementById('site-footer');
    if (!placeholder) return;
    placeholder.outerHTML = `
    <footer id="contacto">
        <div class="container footer-grid">
            <div>
                <h3>🏘️ Urb. Bonavila Etapa Fuego</h3>
                <p>Una comunidad unida construyendo un mejor lugar para vivir.</p>
            </div>
            <div>
                <h4>Contacto</h4>
                <p>📧 etapafuegobonavila@gmail.com</p>
                <p>📱 0969467458</p>
                <p>📍 Bonavila Etapa Fuego</p>
            </div>
            <div>
                <h4>Horario de Atención</h4>
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 13:00</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Urb. Bonavila Etapa Fuego. Todos los derechos reservados.</p>
        </div>
    </footer>`;
})();
