// Selecciona todos los ítems del menú que tienen la clase 'menu-item'
document.querySelectorAll('.menu-item').forEach(item => {
    // Añade un evento cuando se pasa el mouse por encima del ítem
    item.addEventListener('mouseover', () => {
        // Busca el submenú dentro del ítem actual
        const submenu = item.querySelector('.submenu');
        // Si existe un submenú, lo muestra
        if (submenu) {
            submenu.style.display = 'block';
        }
    });

    // Añade un evento cuando el mouse sale del ítem
    item.addEventListener('mouseout', () => {
        // Busca el submenú dentro del ítem actual
        const submenu = item.querySelector('.submenu');
        // Si existe un submenú, lo oculta
        if (submenu) {
            submenu.style.display = 'none';
        }
    });
});