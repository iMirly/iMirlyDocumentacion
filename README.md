<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=rect&color=0:6c5ce7,100:3f51b5&height=180&section=header&text=iMirly%20Docs&fontSize=70&fontColor=fff&fontAlignY=40&desc=Documentaci%C3%B3n%20T%C3%A9cnica%20Oficial%20del%20Proyecto%20iMirly&descAlignY=70&descSize=18" width="100%"/>
</div>

<br>

<div align="center">
  <a href="https://appimirly.github.io/iMirlyDocumentacion/index.html" target="_blank">
    <img src="https://img.shields.io/badge/Ver_Documentación-6c5ce7?style=for-the-badge&logo=google-chrome&logoColor=white"/>
  </a>
  <a href="https://github.com/iMirly/iMirly" target="_blank">
    <img src="https://img.shields.io/badge/Repositorio_Principal-3f51b5?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</div>

<br>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=20&duration=3000&pause=1000&color=6c5ce7&center=true&vCenter=true&width=600&lines=Documentaci%C3%B3n+t%C3%A9cnica+completa+de+iMirly;HTML+%2B+CSS+%2B+JavaScript+Vanilla;Dise%C3%B1o+responsive+con+sidebar+din%C3%A1mico;Desplegado+en+GitHub+Pages"/>
</div>

## 📌 Sobre este repositorio

Este repositorio contiene la **documentación técnica oficial** del proyecto **iMirly**, desarrollado como Trabajo Fin de Ciclo de **DAM (Desarrollo de Aplicaciones Multiplataforma)** en NDT NewDigitalTalent · Granada.

La documentación está construida con **HTML, CSS y JavaScript puro**, sin frameworks, y cubre en detalle tanto el frontend Android como el backend Spring Boot, su arquitectura hexagonal, configuración y funcionalidades.

## 🗂️ Estructura de la documentación

```bash
iMirlyDocumentacion/
│
├── index.html                    # Página de inicio / portal
│
├── pages/
│   ├── introduccion.html         # Qué es iMirly y características principales
│   ├── inicio-rapido.html        # Setup paso a paso (backend + Android)
│   ├── arquitectura.html         # Arquitectura hexagonal y estructura de módulos
│   │
│   ├── android-overview.html     # Visión general de la app Android
│   ├── android-instalacion.html  # Instalación y configuración del frontend
│   ├── android-autenticacion.html# Flujo de autenticación JWT en Android
│   ├── android-catalogo.html     # Catálogo de servicios y navegación
│   ├── android-chat.html         # Chat en tiempo real (Android)
│   ├── android-contratos.html    # Contratos y pagos en Android
│   │
│   ├── backend-overview.html     # Visión general del backend Spring Boot
│   ├── backend-arquitectura.html # Detalle de la arquitectura hexagonal
│   ├── backend-setup.html        # Configuración y arranque del backend
│   ├── backend-database.html     # Modelo de datos y PostgreSQL
│   ├── backend-security.html     # Seguridad JWT y Spring Security
│   │
│   ├── feature-chat.html         # Mensajería en tiempo real (WebSockets)
│   ├── feature-negociacion.html  # Sistema de presupuestos y negociación
│   ├── feature-monedero.html     # Monedero virtual y pagos retenidos
│   ├── feature-tareas.html       # Gestión dinámica de tareas
│   ├── feature-calificacion.html # Sistema de valoraciones bidireccional
│   │
│   └── menulateral.html          # Menú lateral inyectado dinámicamente
│
├── css/
│   └── styles.css                # Estilos globales y tema de colores
│
└── js/
    ├── script.js                 # TOC automático, scroll spy y atajos
    └── menu-loader.js            # Carga dinámica del sidebar
```

## 🛠️ Tecnologías

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-3f51b5?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-6c5ce7?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-3f51b5?style=for-the-badge&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub_Pages-6c5ce7?style=for-the-badge&logo=github&logoColor=white"/>
</p>

- **Sin frameworks ni dependencias externas** — HTML, CSS y JS puro
- **Sidebar dinámico** cargado con `fetch` desde `menulateral.html` y ajuste automático de rutas
- **Tabla de contenidos automática** generada desde los `h2`/`h3` de cada página
- **Scroll spy** que resalta la sección activa en el TOC mientras se navega
- **Marcado de página activa** en el sidebar según la URL actual
- **Estado del menú persistido** en `localStorage` entre visitas
- **Atajo de teclado `Ctrl+K`** para enfocar la barra de búsqueda
- **Diseño responsive** adaptado a móvil, tablet y escritorio

## 📸 Capturas

<img width="1900" height="908" alt="iMirly Docs screenshot" src="https://github.com/user-attachments/assets/9ca82db8-4a3c-44a3-8bf5-62ea086916ef" />

## 🔗 Más sobre iMirly

<div align="center">

| Recurso | Enlace |
|:---|:---|
| 📱 Repositorio principal (app + API) | [iMirly/iMirly](https://github.com/iMirly/iMirly) |
| 🌐 Demo web de la app | [iMirlyWeb-MVP](https://github.com/iMirly/iMirlyWeb-MVP) |
| 🎨 Web de presentación del TFC | [iMirlyPresentacion](https://github.com/iMirly/iMirlyPresentacion) |
| ⚙️ Backend extendido + Admin Panel | [iMirlyAppBackend](https://github.com/iMirly/iMirlyAppBackend) |

</div>

## 👥 Equipo

<p align="center"><b>Trabajo Fin de Ciclo DAM — New Digital Talent, Granada · 2025</b></p>

<p align="center">
  <a href="https://github.com/evagr11">
    <img src="https://img.shields.io/badge/Eva_Gallardo-3f51b5?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://github.com/AnaNunezRejon">
    <img src="https://img.shields.io/badge/Ana_Núñez-6c5ce7?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://github.com/Anyeel">
    <img src="https://img.shields.io/badge/Ángel_Millán-3f51b5?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
  <a href="https://github.com/nicocorbi">
    <img src="https://img.shields.io/badge/Nicolás_Corbi-6c5ce7?style=for-the-badge&logo=github&logoColor=white"/>
  </a>
</p>

<p align="center">
  <sub><b>Tutores:</b> Guillermo Sandoval Schmidt · Javier Martín Gómez</sub>
</p>

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:6c5ce7,100:3f51b5&height=100&section=footer" width="100%"/>
  <sub>© 2025 iMirly — Proyecto académico DAM · Granada, España</sub>
</div>
