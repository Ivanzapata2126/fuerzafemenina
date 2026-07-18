/**
 * Vitta Femme - Lista de espera
 * Recibe los registros del formulario y los agrega como filas en la hoja.
 *
 * Cómo usarlo:
 *  1. Crea una hoja de cálculo nueva en Google Sheets.
 *  2. Menú Extensiones > Apps Script.
 *  3. Borra lo que haya y pega TODO este código.
 *  4. Guarda (icono del disquete).
 *  5. Implementar > Nueva implementación > tipo "Aplicación web".
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier usuario
 *  6. Copia la URL que termina en /exec y pégala en el HTML (WAITLIST_ENDPOINT).
 */

/**
 * Prueba rápida: abre la URL /exec en el navegador.
 * Si ves el mensaje de OK, la implementación está bien publicada.
 */
function doGet() {
  return ContentService
    .createTextOutput('OK - el script esta publicado correctamente')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Si la hoja está vacía, crea los encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Correo', 'WhatsApp']);
    }

    // La columna del WhatsApp debe ser TEXTO antes de escribir:
    // si no, Sheets lee el "+57 ..." como una formula y muestra #ERROR!
    sheet.getRange('D:D').setNumberFormat('@');

    var p = e.parameter;
    var fecha = Utilities.formatDate(new Date(), 'America/Bogota', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      fecha,
      p.nombre  || '',
      p.correo  || '',
      p.whatsapp || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
