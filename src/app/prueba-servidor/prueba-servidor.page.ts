// *****************************************************************************
// PruebaServidorPage — TA01: primer contacto entre Angular y el servidor.
//
// Objetivo de la tarea: escribir un mensaje, enviarlo al servidor mediante
// ServidorService y mostrar la respuesta (o el error) en pantalla.
// *****************************************************************************
import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ServidorService } from '../services/servidor.service';

@Component({
  selector: 'app-prueba-servidor',
  standalone: true,
  imports: [IonicModule, DatePipe],
  templateUrl: 'prueba-servidor.page.html',
  styleUrls: ['prueba-servidor.page.scss'],
})
export class PruebaServidorPage {

  servidorService = inject(ServidorService);

  /** Texto que el usuario escribe antes de enviarlo al servidor */
  mensaje = signal('');

  /** Respuesta recibida del servidor, o null si aún no se ha enviado nada */
  respuesta = signal<string | null>(null);

  /** Fecha y hora en que el servidor procesó la petición, o null si aún no se ha enviado nada */
  recibidoEn = signal<string | null>(null);

  /** Mensaje de error, o null si la última petición fue correcta */
  error = signal<string | null>(null);

  /** Bloquea el botón mientras la petición está en curso */
  enviando = signal(false);

  // TODO - Añadir el método enviarMensaje() que se encargará de enviar el mensaje al servidor y procesar la respuesta.
  enviarMensaje() {
    
  }
}
