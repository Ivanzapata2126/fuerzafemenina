# Brief de diseño — Vitta Femme (landing de lista de espera)

## Qué es
Landing page de **una sola pantalla scrolleable** para captar una **lista de espera** previa al lanzamiento
de **Vitta Femme**, una **proteína premium en polvo** formulada específicamente para mujeres en
**perimenopausia y menopausia**. El producto aún no está a la venta: el único objetivo de la página
es que la visitante deje sus datos.

## Objetivo único (una sola conversión)
Que la usuaria complete el formulario de lista de espera:
**Nombre + Correo + WhatsApp** → botón *"Quiero acceso anticipado"*.
Todo el diseño debe empujar hacia ahí. No hay carrito, no hay precios, no hay catálogo.

## Público objetivo
- **Mujeres de 45 a 60 años**, en perimenopausia o menopausia.
- Hispanohablantes (Colombia / LATAM). Todo el copy está en español.
- Perfil: cuidan su salud, están informadas, tienen poder adquisitivo (producto *premium*).
- **Implicación de diseño:** tipografía generosa y legible, buen contraste, botones amplios,
  nada de texto diminuto ni interacciones "de moda" difíciles de descubrir.
  Mobile-first: la mayoría llega desde anuncios de Meta en el celular.

## Tono y personalidad de marca
**Elegante, cálido, sereno y con respaldo científico.** No es fitness agresivo, no es "antiedad" ni
lenguaje de pérdida. El mensaje es de **fuerza y continuidad**, no de deterioro.

Frase que resume el espíritu de la marca:
> *"Después de los 45, tu cuerpo cambia. Tu fuerza no tiene que hacerlo."*

Palabras clave estéticas: femenino sofisticado · botánico · spa de lujo · farmacia premium ·
editorial · calma. Evitar: neón, gradientes saturados, estética "gym bro", rosa infantil o chillón.

## Identidad visual actual (a conservar)

**Paleta (tonos nude / rosados / tierra sobre fondo crema):**
| Nombre | Hex | Uso |
|---|---|---|
| Petal White | `#FAF7F4` | Fondo principal |
| Warm Petal | `#F5EDE4` | Fondos de sección alternos |
| Rose Sand | `#EDE0D4` | Tarjetas / bloques |
| Blush Nude | `#DEC4B4` | Detalles suaves |
| **Warm Gold** | `#C8A06A` | **Acento principal / CTA** |
| Dusty Rose | `#B88C8C` | Acento secundario |
| Rose Cocoa | `#9A7A70` | Texto secundario |
| Deep Rose | `#6B5147` | Texto de apoyo |
| **Espresso** | `#4E3B36` | **Texto principal** |

**Tipografías:**
- Títulos: **Playfair Display** (serif, pesos 300–500, con itálicas) → elegancia editorial.
- Texto: **Raleway** (sans, pesos 200–600) → limpieza y legibilidad.

**Formas:** esquinas muy redondeadas (28px en bloques grandes, 16px medios, 10px chicos),
bordes de 1px muy sutiles (`rgba(107,81,71,0.15)`), ancho máximo de contenido 1180px.
Mucho aire / espacio en blanco. Sin sombras duras.

## Estructura de la página (orden actual)

1. **Hero** — Etiqueta "Lista de espera" + titular *"Nutrición para tu nueva etapa"* +
   subtítulo con la promesa + CTA *"Quiero acceso anticipado"* + nota de escasez
   ("Lanzamiento por lista de espera, cupos limitados").
   Al lado: **render del producto** (tarro) con los sellos: `+25g proteína por porción`,
   `4 activos funcionales clave`, `0g azúcares añadidos`.

2. **Beneficios** (5 tarjetas) — *"Diseñada para lo que tu cuerpo necesita ahora"*:
   conserva masa muscular · controla el peso · energía sostenida · huesos y articulaciones ·
   digestión suave.

3. **La ciencia detrás** — *"¿Por qué tu cuerpo pide más proteína después de los 45?"*
   Tres datos destacados: `1%` de pérdida muscular anual · `↓E2` menos estrógeno ·
   `+` mayor requerimiento diario.

4. **Fórmula** (4 activos, estilo tabla periódica) — `P` Proteína de alta calidad ·
   `C` Colágeno hidrolizado · `Cr` Creatina · `Mg` Magnesio.

5. **FAQ** (acordeón, 5 preguntas) — diferenciación, seguridad en menopausia, azúcares/aditivos,
   fecha de disponibilidad, cómo se les avisará.

6. **Formulario de lista de espera** — el bloque de conversión. Al enviar, se oculta el formulario
   y aparece un mensaje de éxito: *"Estamos preparando el lanzamiento. Te avisaremos antes que a nadie."*

7. **Footer** — logo + copyright 2026.

## Restricciones técnicas (importante)
- Es **un único archivo HTML autocontenido** (todo el CSS va inline en un `<style>`).
  No hay build, ni framework, ni bundler. Se sirve estático con Nginx en Docker.
- **Sin librerías externas** salvo Google Fonts. El JS es vanilla (acordeón FAQ + envío del form).
- Los datos del formulario se envían por `fetch` a un Google Apps Script que los guarda en una hoja.
  **No modificar los `id` del formulario ni de los campos:**
  `#waitlistForm`, `#nombre`, `#correo`, `#whatsapp`, `#formState`, `#successBox`.
- Hay un **Meta Pixel** en el `<head>` que no se debe romper ni mover.
- Debe verse bien en móvil (prioridad) y desktop.

## Qué se busca mejorar
[Escribe aquí lo que quieres que la IA de diseño haga: rediseñar el hero, mejorar la jerarquía,
proponer una variante visual, mejorar la conversión del formulario, etc.]
