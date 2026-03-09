/**
 * Menu Loader - Carga el menú lateral dinámicamente en todas las páginas
 */

document.addEventListener('DOMContentLoaded', function() {
    loadSidebarMenu();
});

function loadSidebarMenu() {
    const menuContainer = document.getElementById('sidebar-container');
    
    if (!menuContainer) {
        console.log('No se encontró contenedor #sidebar-container - usando menú estático');
        return;
    }
    
    // Determinar la ruta correcta basada en la ubicación actual
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes('/pages/');
    
    // Ruta al archivo del menú
    const menuPath = isInPagesFolder ? 'menulateral.html' : 'pages/menulateral.html';
    
    console.log('Cargando menú desde:', menuPath);
    
    // Cargar el menú desde menulateral.html
    fetch(menuPath)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el menú: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            // Si estamos en la raíz (index.html), necesitamos ajustar las rutas de los enlaces
            if (!isInPagesFolder) {
                // Agregar 'pages/' a todos los href que no sean absolutos
                html = html.replace(/href="([^"]+)"/g, function(match, url) {
                    // No modificar URLs absolutas (http://, https://, /)
                    if (url.startsWith('http') || url.startsWith('/') || url.startsWith('#')) {
                        return match;
                    }
                    // Agregar prefijo pages/
                    return 'href="pages/' + url + '"';
                });
            }
            
            menuContainer.innerHTML = html;
            
            // Inicializar funcionalidades del menú
            initializeMenu();
            
            // Marcar página actual como activa
            markCurrentPage();
            
            // Restaurar estado del menú
            loadMenuState();
        })
        .catch(error => {
            console.error('Error cargando el menú:', error);
            menuContainer.innerHTML = '<p style="padding: 1rem; color: var(--color-text-muted);">Error cargando el menú: ' + error.message + '</p>';
        });
}

function initializeMenu() {
    const toggles = document.querySelectorAll('.nav-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const section = this.getAttribute('data-section');
            const navList = document.querySelector(`.nav-list[data-section="${section}"]`);
            const icon = this.querySelector('.toggle-icon');
            
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (isExpanded) {
                icon.style.transform = 'rotate(0deg)';
                if (navList) navList.classList.add('collapsed');
            } else {
                icon.style.transform = 'rotate(180deg)';
                if (navList) navList.classList.remove('collapsed');
            }
            
            saveMenuState();
        });
    });
}

function markCurrentPage() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop().replace('.html', '') || 'index';
    
    console.log('Página actual:', currentPage);
    
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        const pageName = link.getAttribute('data-page');
        if (pageName === currentPage) {
            link.classList.add('active');
            
            // Expandir la sección padre
            const parentSection = link.closest('.nav-list');
            if (parentSection) {
                parentSection.classList.remove('collapsed');
                const sectionName = parentSection.getAttribute('data-section');
                const toggle = document.querySelector(`.nav-toggle[data-section="${sectionName}"]`);
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'true');
                    const icon = toggle.querySelector('.toggle-icon');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
            }
        }
    });
}

function saveMenuState() {
    const toggles = document.querySelectorAll('.nav-toggle');
    const state = {};
    
    toggles.forEach(toggle => {
        const section = toggle.getAttribute('data-section');
        state[section] = toggle.getAttribute('aria-expanded') === 'true';
    });
    
    localStorage.setItem('sidebarMenuState', JSON.stringify(state));
}

function loadMenuState() {
    const savedState = localStorage.getItem('sidebarMenuState');
    if (!savedState) return;
    
    try {
        const state = JSON.parse(savedState);
        
        Object.keys(state).forEach(section => {
            if (state[section]) {
                const toggle = document.querySelector(`.nav-toggle[data-section="${section}"]`);
                const navList = document.querySelector(`.nav-list[data-section="${section}"]`);
                
                if (toggle) {
                    toggle.setAttribute('aria-expanded', 'true');
                    const icon = toggle.querySelector('.toggle-icon');
                    if (icon) icon.style.transform = 'rotate(180deg)';
                }
                if (navList) navList.classList.remove('collapsed');
            }
        });
    } catch (e) {
        console.error('Error cargando estado del menú:', e);
    }
}