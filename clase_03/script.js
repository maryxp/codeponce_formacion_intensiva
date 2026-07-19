document.getElementById('btnSaludar').addEventListener('click', function() {
    document.getElementById('mensaje').textContent = '¡Hola! Gracias por hacer clic.';
});

document.getElementById('btnDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});
