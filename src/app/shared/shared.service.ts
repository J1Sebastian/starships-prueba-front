import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Servicio que se encarga de compartir información entre componentes.
 */
@Injectable({
  providedIn: 'root',
})
export class SharedService {

  /* El atributo indica si el detalle de una nave espacial está seleccionado.*/
  selected: Boolean = true;
  private selectedSubject = new Subject<Boolean>(); /* <-- Observable usado para notificar */

  /**
   * Crea una instancia del servicio.
   */
  constructor() {}

  /* Funcion utilizada para deseleccionar el detalle de una nave espacial (volver al listado de naves espaciales) */
  unselectDetail(): void {
    this.selected = false;
    this.selectedSubject.next(this.selected);
  }

  /* Funcion utilizada para servir como observable */
  getSelectedObservable() {
    return this.selectedSubject.asObservable();
  }
}
