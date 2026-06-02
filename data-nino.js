const participantesNino = [
    /* ── Sin dirección identificada ─────────────────────────── */
    {
        mz: "—", villa: "—", familia: "Salas Daniel",
        cuota: "pagado", recaudacion: 5,
        ninos: [], detalle: "Aporte voluntario"
    },
    {
        mz: "—", villa: "—", familia: "Rivas Izaguirre",
        cuota: "pagado", recaudacion: 5,
        ninos: [], detalle: "Aporte voluntario"
    },
    /* ── Mz. 6919 ────────────────────────────────────────────── */
    {
        mz: "6919", villa: "10", familia: "Paredes Espinoza",
        cuota: "pendiente", recaudacion: 5,
        ninos: [
            { nombre: "José Andrés Paredes Espinoza", edad: 4, genero: "m" }
        ]
    },
    {
        mz: "6919", villa: "11", familia: "Astudillo Astudillo",
        cuota: "pendiente", recaudacion: 5,
        ninos: [
            { nombre: "Ámbar Astudillo", edad: 12, genero: "f" }
        ]
    },
    {
        mz: "6919", villa: "12", familia: "Galarza Freire",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Santiago Galarza Freire", edad: 13, genero: "m" }
        ]
    },
    {
        mz: "6919", villa: "22", familia: "Sabagay Suárez",
        cuota: "pagado", recaudacion: 10,
        ninos: [
            { nombre: "Elías Sabagay", edad: 12, genero: "m" },
            { nombre: "Emma Sabagay", edad: 7, genero: "f" }
        ]
    },
    /* ── Mz. 6920 ────────────────────────────────────────────── */
    {
        mz: "6920", villa: "5", familia: "Chalen Marquez",
        cuota: "pagado", recaudacion: 20,
        ninos: [
            { nombre: "Sin identificar", edad: 0, genero: "m" },
            { nombre: "Sin identificar", edad: 0, genero: "m" }
        ]
    },
    {
        mz: "6920", villa: "6", familia: "Soriano Garcia Johanna",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Julio Eduardo Soriano Crespo", edad: 7, genero: "m" }
        ]
    },
    {
        mz: "6920", villa: "15", familia: "Andrade Lucas",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Angel Andrade", edad: 4, genero: "m" }
        ]
    },
    {
        mz: "6920", villa: "16", familia: "Gaona Campuzano Jenn",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Jeremias Chancay", edad: 7, genero: "m" }
        ]
    },
    /* ── Mz. 6921 ────────────────────────────────────────────── */
    {
        mz: "6921", villa: "4", familia: "Martínez Merlo",
        cuota: "pagado", recaudacion: 5,
        ninos: [], detalle: "Aporte voluntario"
    },
    /* ── Mz. 6922 ────────────────────────────────────────────── */
    {
        mz: "6922", villa: "2", familia: "Sin identificar",
        cuota: "pagado", recaudacion: 10,
        ninos: [
            { nombre: "Sin identificar", edad: 0, genero: "m" },
            { nombre: "Sin identificar", edad: 0, genero: "m" }
        ]
    },
    /* ── Mz. 6923 ────────────────────────────────────────────── */
    {
        mz: "6923", villa: "1", familia: "Esmeraldas Ponce",
        cuota: "pagado", recaudacion: 10,
        ninos: [
            { nombre: "Gael Esmeraldas", edad: 0, genero: "m" },
            { nombre: "Ian Ponce", edad: 0, genero: "m" }
        ]
    },
    /* ── Mz. 6924 ────────────────────────────────────────────── */
    {
        mz: "6924", villa: "1", familia: "Cuero Zambrano",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Amaya Cuero", edad: 7, genero: "f" }
        ]
    },
    {
        mz: "6924", villa: "2", familia: "Soriano Tapia",
        cuota: "pendiente", recaudacion: 5,
        ninos: [
            { nombre: "David Alcides Soriano García", edad: 1, genero: "m" }
        ]
    },
    {
        mz: "6924", villa: "7", familia: "Calderón Heredero",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Eithan Calderón", edad: 0, genero: "m" }
        ], detalle: "9 meses de edad"
    },
    {
        mz: "6924", villa: "18", familia: "Carpio Viteri",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Beliza Carpio Viteri", edad: 11, genero: "f" }
        ]
    },
    {
        mz: "6924", villa: "32", familia: "Rodríguez Sánchez",
        cuota: "pagado", recaudacion: 10,
        ninos: [
            { nombre: "Santino Rodríguez", edad: 2, genero: "m" },
            { nombre: "Sabrina Rodríguez", edad: 7, genero: "f" }
        ]
    },
    /* ── Mz. 6925 ────────────────────────────────────────────── */
    {
        mz: "6925", villa: "3", familia: "Peralta Loor",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Emma Valentina Peralta Loor", edad: 5, genero: "f" }
        ]
    },
    {
        mz: "6925", villa: "7", familia: "Zúñiga Bohorquez",
        cuota: "pagado", recaudacion: 15,
        ninos: [
            { nombre: "Carlos Zúñiga", edad: 2, genero: "m" },
            { nombre: "Yaret Zúñiga", edad: 7, genero: "f" }
        ]
    },
    {
        mz: "6925", villa: "8", familia: "Mosquera Velázquez",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Sasha Mosquera", edad: 10, genero: "f" }
        ]
    },
    {
        mz: "6925", villa: "14", familia: "Tierra Ramón",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Fiorella Tierra", edad: 6, genero: "f" }
        ]
    },
    {
        mz: "6925", villa: "15", familia: "De La Ese Salazar",
        cuota: "pagado", recaudacion: 5,
        ninos: [
            { nombre: "Castro De La Ese", edad: 6, genero: "m" }
        ]
    },
    {
        mz: "6925", villa: "16", familia: "Veloz Santillán",
        cuota: "pagado", recaudacion: 15,
        ninos: [
            { nombre: "Angelina Veloz", edad: 5, genero: "f" },
            { nombre: "Vivian Veloz", edad: 7, genero: "f" },
            { nombre: "Thiago Veloz", edad: 10, genero: "m" }
        ]
    },
    /* ── Mz. 6926 ────────────────────────────────────────────── */
    {
        mz: "6926", villa: "8", familia: "Echeverría Hernández",
        cuota: "pagado", recaudacion: 15,
        ninos: [
            { nombre: "Elian Echeverría Hernández", edad: 4, genero: "m" },
            { nombre: "Diem Echeverría Hernández", edad: 4, genero: "m" },
            { nombre: "Kiara Echeverría Hernández", edad: 1, genero: "f" }
        ]
    },
    {
        mz: "6926", villa: "13", familia: "Morales Santiana",
        cuota: "pagado", recaudacion: 20,
        ninos: [
            { nombre: "Kiara Morales", edad: 6, genero: "f" },
            { nombre: "Tahys Morales", edad: 2, genero: "f" },
            { nombre: "Thiago Morales", edad: 5, genero: "m" },
            { nombre: "Theo Morales", edad: 1, genero: "m" }
        ]
    },
    {
        mz: "6926", villa: "14", familia: "Veloz Ayauca",
        cuota: "pendiente", recaudacion: 10,
        ninos: [
            { nombre: "Paulette Aitana Veloz Ayauca", edad: 3, genero: "f" },
            { nombre: "Matías Elian Veloz Ayauca", edad: 0, genero: "m" }
        ], detalle: "Matías: 9 meses de edad"
    },
    {
        mz: "6926", villa: "16", familia: "Larco Guerrero",
        cuota: "pagado", recaudacion: 5,
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
