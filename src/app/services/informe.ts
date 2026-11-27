import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { InformeHtmlService } from './informe-html-service';
import { Restaurante } from '../interface/restaurante';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Informe {
  
  private http = inject(HttpClient);
  private informeHtmlService = inject(InformeHtmlService);

  async generarInformePdf( restaurantes : Restaurante[]): Promise<void> {
    const html = this.informeHtmlService.construirHTML(restaurantes);

    const blob = await firstValueFrom(this.http.post(`${environment.informesApiUrl}/api/informe`, {html}, {responseType: 'blob'}));

    this.descargarBlob(blob, `informe_restaurantes_${new Date().toISOString().slice(0, 10)}.pdf`);
    
  }

  descargarBlob(blob: Blob, nombreArchivo:string){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
