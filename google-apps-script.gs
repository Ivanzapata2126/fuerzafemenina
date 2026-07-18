/**
 * Vitta Femme - Lista de espera
 * Recibe los registros del formulario y los agrega como filas en la hoja.
 *
 * Cómo usarlo:
 *  1. Pega TODO este código en Extensiones > Apps Script (borra lo que haya).
 *  2. Guarda (icono del disquete).
 *  3. Implementar > Gestionar implementaciones > lápiz ✏️
 *       - Versión: "Nueva versión"   <-- imprescindible, si no los cambios no salen
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier usuario
 *  4. Implementar.
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
      sheet.appendRow(['Fecha', 'Nombre', 'Correo', 'Indicativo', 'WhatsApp']);
    }

    // Indicativo y WhatsApp deben ser TEXTO antes de escribir:
    // si no, Sheets lee el "+57" como una fórmula y muestra #ERROR!
    sheet.getRange('D:E').setNumberFormat('@');

    var p = e.parameter;
    var fecha = Utilities.formatDate(new Date(), 'America/Bogota', 'yyyy-MM-dd HH:mm:ss');

    sheet.appendRow([
      fecha,
      p.nombre     || '',
      p.correo     || '',
      p.indicativo || '',
      p.whatsapp   || ''
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
