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

La aplicación estará disponible en: `https://tu-usuario.github.io/aluraflix`

### Vercel:
Para desplegar usando Vercel:
1. Crea una cuenta en [Vercel](https://vercel.com/) si no tienes una.
2. Enlaza tu repositorio de GitHub en la plataforma de Vercel.
3. Vercel detectará automáticamente que es un proyecto de React y configurará el entorno de despliegue.
4. Una vez desplegado, tendrás una URL pública proporcionada por Vercel (por ejemplo, `https://aluraflix.vercel.app`).

Link del despliegue: [https://aluraflix.vercel.app](https://aluraflix.vercel.app)

## Tecnologías utilizadas
- **React**: Librería principal para construir la interfaz de usuario.
- **CSS**: Estilización del proyecto con diseño responsivo.
- **localStorage**: Para la persistencia de datos localmente.

## Estructura del proyecto
```plaintext
aluraflix/
├── public/             # Archivos estáticos
├── src/                # Código fuente
│   ├── components/     # Componentes reutilizables
│   ├── App.jsx         # Componente principal
│   └── index.css       # Estilos globales
├── .gitignore          # Archivos y carpetas ignoradas por Git
├── package.json        # Dependencias y scripts
└── README.md           # Información del proyecto
```

## Contribución
¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Realiza un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agregar nueva funcionalidad"
   ```
4. Sube tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

   ```

2. Despliega con el siguiente comando:
   ```bash
   npm run deploy
   ```
