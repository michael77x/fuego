const participantesNino = [
    {
        mz: "6924", villa: "32", familia: "Rodríguez Sánchez",
        cuota: "pendiente", recaudacion: 10,
        ninos: [
            { nombre: "Santino Rodríguez", edad: 2, genero: "m" },
            { nombre: "Sabrina Rodríguez", edad: 7, genero: "f" }
        ]
    },
    {
        mz: "6926", villa: "16", familia: "Larco Guerrero",
        cuota: "pendiente", recaudacion: 5,
        ninos: [], detalle: "Aporte voluntario"
    }
];

function renderParticipants() {
    const tbody = document.querySelector('#participantsTable tbody');
    if (!tbody || typeof participantesNino === 'undefined') return;

    tbody.innerHTML = participantesNino.map(p => {
        const badgeClass = p.cuota === 'pagado' ? 'badge--paid' : 'badge--pending';
        const badgeText  = p.cuota === 'pagado' ? 'Pagado' : 'Pendiente';
        const recText    = p.recaudacion > 0 ? `$${p.recaudacion}` : '—';
        const ninosCount = p.ninos.length > 0 ? p.ninos.length : '—';

        let detalleHtml;
        if (p.ninos.length > 0) {
            const items = p.ninos.map(n => {
                const emoji = n.genero === 'm' ? '👦' : '👧';
                return `<li>${emoji} ${n.nombre} — ${n.edad} año${n.edad === 1 ? '' : 's'}</li>`;
            }).join('');
            detalleHtml = `<ul class="children-list">${items}</ul>`;
        } else {
            detalleHtml = p.detalle || '—';
        }

        return `
                                    <tr>
                                        <td data-label="Mz.">${p.mz}</td>
                                        <td data-label="Villa">${p.villa}</td>
                                        <td data-label="Familia">${p.familia}</td>
                                        <td data-label="Cuota"><span class="badge ${badgeClass}">${badgeText}</span></td>
                                        <td data-label="Recaudación" class="text-center">${recText}</td>
                                        <td data-label="N.º Niños" class="text-center">${ninosCount}</td>
                                        <td data-label="Detalle">${detalleHtml}</td>
                                    </tr>`;
    }).join('');
}
