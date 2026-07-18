# 📝 Guía: conectar el formulario a una hoja que se llena sola

> **Importante:** todos estos pasos se hacen con la **cuenta de Google del cliente/dueña del negocio**, para que la hoja y los datos queden a su nombre.
> Ivan solo guía y da los clics; la sesión debe estar iniciada con la cuenta de ella.

---

## Parte 1 — Crear la hoja (1 min)

1. Entrar a **https://sheets.google.com** (con la cuenta de la clienta).
2. Clic en **"Hoja de cálculo en blanco"** (el `+`).
3. Arriba a la izquierda, ponerle un nombre: **Lista de espera Vita Femme**.

*(No hay que escribir nada dentro. Los títulos de las columnas se crean solos con el primer registro.)*

---

## Parte 2 — Pegar el código (2 min)

4. En el menú de arriba: **Extensiones → Apps Script**.
5. Se abre una pestaña nueva con un editor. **Borrar** todo lo que aparezca ahí.
6. **Pegar** todo el contenido del archivo `google-apps-script.gs`.
7. Clic en el ícono de **guardar** (💾) o `Ctrl + S`.

---

## Parte 3 — Publicar (2 min)

8. Botón azul arriba a la derecha: **Implementar → Nueva implementación**.
9. Clic en el engranaje ⚙️ (junto a "Seleccionar tipo") → elegir **Aplicación web**.
10. Configurar así:
    - **Descripción:** (opcional) *Formulario lista de espera*
    - **Ejecutar como:** *Yo (correo de la clienta)*
    - **Quién tiene acceso:** **Cualquier usuario** ← ⚠️ MUY IMPORTANTE
11. Clic en **Implementar**.
12. Google pedirá **autorizar el acceso**:
    - Clic en **Autorizar acceso**.
    - Elegir la cuenta de la clienta.
    - Si sale "Google no verificó esta app" → **Configuración avanzada** → **Ir a (nombre del proyecto)** → **Permitir**.
    *(Es seguro: es la propia cuenta de ella autorizando su propio código.)*
13. Aparece una **URL que termina en `/exec`**. **Copiarla** con el botón *Copiar*.

---

## Parte 4 — Entregarle la URL a Ivan

14. Pasarle a Ivan esa URL (la que termina en `/exec`).
    Ivan la pega en la página y a partir de ahí **cada registro entra solo** en la hoja.

---

## ✅ Cómo la usa la clienta después

- **Ver los registros:** solo abre la hoja de Google (queda guardada en su Drive).
- **Verlos ordenados:** cada persona nueva aparece como una fila con Fecha, Nombre, Correo y WhatsApp.
- **Descargar como Excel:** dentro de la hoja → **Archivo → Descargar → Microsoft Excel (.xlsx)**.
- **Compartir acceso con alguien más** (ej. con Ivan): botón **Compartir** (arriba a la derecha).

---

## 🔒 Notas de seguridad

- La hoja y los datos quedan **100% a nombre de la clienta**.
- La URL `/exec` solo sirve para *agregar* registros a la hoja; no da acceso al correo ni a nada más de la cuenta.
- Si algún día se quiere cortar el formulario, basta con eliminar la implementación en Apps Script.
