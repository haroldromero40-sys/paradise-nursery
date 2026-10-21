# 🌿 Paradise Nursery

**Paradise Nursery** es una aplicación web de comercio electrónico desarrollada con React que permite a los usuarios explorar un catálogo de plantas, conocer sus características y gestionar un carrito de compras.

El objetivo del proyecto es ofrecer una experiencia sencilla e intuitiva para las personas que desean incorporar plantas y naturaleza a sus hogares.

## 📋 Características principales

* **Página de inicio:** presentación de Paradise Nursery y acceso al catálogo.
* **Catálogo de plantas:** productos organizados en tres categorías.
* **Información de productos:** imágenes, nombres y precios de las plantas.
* **Carrito de compras:** gestión de los productos seleccionados mediante Redux Toolkit.
* **Agregar productos:** posibilidad de añadir plantas al carrito.
* **Modificar cantidades:** aumentar o disminuir la cantidad de cada producto.
* **Eliminar productos:** opción para retirar artículos del carrito.
* **Cálculo automático:** actualización de las cantidades y del total de la compra.
* **Navegación entre páginas:** implementada con React Router.
* **Página «Acerca de nosotros»:** información sobre la empresa, su misión y su visión.
* **Diseño adaptable:** estilos CSS diseñados para diferentes tamaños de pantalla.

## 🛠️ Tecnologías utilizadas

Las principales tecnologías y herramientas utilizadas en el desarrollo son:

* **React:** creación de interfaces mediante componentes.
* **Vite:** configuración del entorno de desarrollo.
* **JavaScript:** implementación de la lógica de la aplicación.
* **HTML5:** estructura de las páginas.
* **CSS3:** diseño y estilos visuales.
* **Redux Toolkit:** administración del estado del carrito de compras.
* **React Redux:** integración de Redux con los componentes de React.
* **React Router DOM:** navegación entre las diferentes páginas.

## 📁 Estructura del proyecto

```text
paradise-nursery/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   └── ProductList.jsx
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── Store.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Instalación y ejecución

Para ejecutar Paradise Nursery en un computador, sigue estos pasos:

### 1. Requisitos previos

Debes tener instalados:

* [Node.js](https://nodejs.org/)
* [Git](https://git-scm.com/)

### 2. Clonar el repositorio

Abre una terminal y ejecuta:

```bash
git clone https://github.com/haroldromero40-sys/paradise-nursery.git
```

### 3. Entrar en la carpeta del proyecto

```bash
cd paradise-nursery
```

### 4. Instalar las dependencias

```bash
npm install
```

### 5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

### 6. Abrir la aplicación

Vite mostrará una dirección lo
