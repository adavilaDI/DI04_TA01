import { Injectable } from '@angular/core';
import { Restaurante } from '../interface/restaurante';

@Injectable({
  providedIn: 'root',
})
export class InformeHtmlService {

  
  construirHTML(restaurantes: Restaurante[]): string {
    const filas = restaurantes.map(r => `
      <tr>
        <td>${r.documentName ?? ''}</td>
        <td>${r.territory ?? ''}</td>
        <td>${r.locality ?? ''}</td>
        <td>${r.restorationType ?? ''}</td>
      </tr>
    `).join('');
    // devuelve un documento HTML completo

  return `<!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <style>
      @page { size: A4; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
      thead { display: table-header-group; background-color: orange}
      tr { break-inside: avoid; }
    </style>
  </head>
  <body>
    <h1>Informe Restaurantes</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Territorio</th>
          <th>Localidad</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        ${filas}
      </tbody>
    </table>
  </body>
  </html>`;
  }
  
}
