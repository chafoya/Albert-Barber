# AlbertBarber — PWA

## Archivos del proyecto
| Archivo | Descripción |
|---------|-------------|
| `index.html` | Panel Admin |
| `index_barbero.html` | App del Barbero |
| `manifest-admin.json` | Manifiesto PWA Admin |
| `manifest-barbero.json` | Manifiesto PWA Barbero |
| `sw.js` | Service Worker (modo offline) |
| `icon-192.png` | Ícono 192×192 |
| `icon-512.png` | Ícono 512×512 |
| `_redirects` | Reglas Render |

---

## Subir a Render (Static Site)

1. Crea repo en GitHub con TODOS estos archivos
2. En Render → New → Static Site
3. Configuración:
   - **Publish Directory:** `.`
   - **Build Command:** *(vacío)*
4. Deploy

### URLs resultantes
- `https://tu-sitio.onrender.com/` → Admin
- `https://tu-sitio.onrender.com/index_barbero.html` → Barbero
- `https://tu-sitio.onrender.com/barbero` → Barbero (atajo)

---

## Instalar como app (acceso directo al escritorio)

### En PC (Chrome / Edge)
1. Abre la URL en Chrome o Edge
2. Clic en el ícono ⊕ en la barra de direcciones (o menú → "Instalar app")
3. Confirmar — aparece en el escritorio y menú inicio

### En Android
1. Abre la URL en Chrome
2. Menú (⋮) → "Añadir a pantalla de inicio"
3. Confirmar — funciona como app nativa

### En iPhone / iPad
1. Abre en Safari
2. Botón Compartir → "Añadir a pantalla de inicio"

---

## Cómo funciona la sincronización

Ambos archivos comparten los mismos datos a través de `localStorage` del navegador.
Como están en el **mismo dominio** (mismo servidor Render), los datos se comparten automáticamente.

| Dato | Clave localStorage |
|------|--------------------|
| Cortes | `bp_cuts` |
| Barberos | `bp_barbers` |
| Servicios | `bp_services` |

- El **Admin** agrega/edita servicios → el barbero los ve al instante
- El **Barbero** registra un corte → el admin lo ve al instante (sin recargar)
