# Aluraflix

Aluraflix es una aplicación web creada con React para organizar, agregar, editar y visualizar videos clasificados por categorías. Este proyecto forma parte de un desafío para aprender las mejores prácticas de desarrollo con React.

## Características
- Crear, editar y eliminar videos.
- Categorizar videos dinámicamente (se crean categorías nuevas según necesidad).
- Persistencia de datos utilizando `localStorage`.
- Visualización de videos directamente desde un reproductor embebido.
- Diseño responsivo con un estilo moderno y funcional.

## Requisitos
Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm o yarn

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/aluraflix.git
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd aluraflix
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución en modo desarrollo
Para iniciar la aplicación en modo desarrollo, ejecuta:

```bash
npm start
```

Luego, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Construcción para producción
Para generar los archivos listos para producción:

```bash
npm run build
```

Esto generará una carpeta `build` con los archivos optimizados.

## Despliegue
### GitHub Pages (opcional):
1. Asegúrate de haber configurado el campo `homepage` en el archivo `package.json` con la URL de tu repositorio:
   ```json
   "homepage": "https://tu-usuario.github.io/aluraflix"
   ```

2. Despliega con el siguiente comando:
   ```bash
   npm run deploy
   ```
