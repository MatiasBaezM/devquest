# DevQuest

Dashboard de DevQuest, una app para aprender programación con lecciones cortas, trivias y puzzles de código.

Hecho con [React](https://react.dev) y [Vite](https://vite.dev).

## Qué incluye

- **Estadísticas**: puntaje, racha actual, mejor racha y lecciones completadas.
- **Aviso para usuarios nuevos**: si todas las estadísticas están en 0, invita a jugar la primera trivia.
- **Aprender por lenguaje**: tarjeta destacada con los lenguajes disponibles.
- **Modo rápido**: acceso directo a Trivia y Puzzles de código.
- **Progreso por lenguaje** y **actividad reciente**.
- Diseño responsive (las columnas se apilan en pantallas de menos de 640px) y enlaces accesibles con `aria-label` y foco visible.

## Empezar

```bash
npm install
npm run dev
```

La app queda en http://localhost:5173.

## Scripts

| Comando           | Qué hace                                     |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en vivo    |
| `npm run build`   | Genera la versión de producción en `dist/`    |
| `npm run preview` | Sirve la versión de producción localmente     |
| `npm run lint`    | Revisa el código con oxlint                   |

## Estructura

```
src/
  App.jsx    Dashboard y sus datos
  index.css  Estilos y variables de color
  main.jsx   Punto de entrada
```

## Pendiente

Por ahora es solo la parte visual:

- Los datos (usuario, puntajes, progreso) están fijos al principio de `src/App.jsx`.
- Las rutas `/learn`, `/trivia`, `/puzzle`, `/perfil` y `/ranking` todavía no existen.
- "Cerrar sesión" no tiene lógica.
