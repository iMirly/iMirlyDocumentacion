document.addEventListener('DOMContentLoaded', function() {
    console.log('iMirly Docs: Inicializando...');
    initTableOfContents();
    initScrollSpy();
    initSearchShortcut();
    // Eliminar loadSidebarState() - ahora lo maneja menu-loader.js
});

/**
 * Table of Contents - Generar automáticamente desde h2/h3
 */
function initTableOfContents() {
    const tocNav = document.getElementById('toc-nav');
    const mainContent = document.querySelector('.main-content');
    
    if (!tocNav || !mainContent) {
        console.error('TOC: No se encontró el contenedor');
        return;
    }
    
    const headings = mainContent.querySelectorAll('h2[id], h3[id]');
    
    console.log('TOC: Se encontraron', headings.length, 'secciones');
    
    if (headings.length === 0) {
        tocNav.innerHTML = '<p style="color: var(--color-text-muted); font-size: 0.8125rem; padding: 0.5rem 0;">No hay secciones en esta página</p>';
        return;
    }
    
    tocNav.innerHTML = '';
    
    headings.forEach((heading) => {
        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.className = 'toc-link';
        link.textContent = heading.textContent.trim();
        
        if (heading.tagName.toLowerCase() === 'h3') {
            link.classList.add('h3');
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const topBarHeight = document.querySelector('.top-bar').offsetHeight;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - topBarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, targetId);
            }
        });
        
        tocNav.appendChild(link);
    });
    
    console.log('TOC: Generado correctamente');
}

/**
 * Scroll Spy - Resaltar sección actual en el TOC
 */
function initScrollSpy() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const headings = document.querySelectorAll('.main-content h2[id], .main-content h3[id]');
    
    if (tocLinks.length === 0 || headings.length === 0) return;
    
    const observerOptions = {
        root: null,
        rootMargin: '-15% 0px -85% 0px',
        threshold: 0
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => link.classList.remove('active'));
                
                const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    headings.forEach(heading => observer.observe(heading));
}

/**
 * Atajo de teclado para búsqueda (Ctrl+K)
 */
function initSearchShortcut() {
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            
            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                searchBox.style.borderColor = 'var(--color-purple)';
                searchBox.style.boxShadow = '0 0 0 2px var(--color-purple-light)';
                setTimeout(() => {
                    searchBox.style.borderColor = '';
                    searchBox.style.boxShadow = '';
                }, 300);
            }
        }
    });
}