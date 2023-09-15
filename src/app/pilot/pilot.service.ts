import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pilot } from './pilot';

/**
 * Servicio que se encarga de obtener los datos de los pilotos.
 */
@Injectable({
  providedIn: 'root',
})
export class PilotService {

  /**
   * Crea una instancia del servicio.
   * @param http Instancia de Httpclient que se encarga de hacer las peticiones http.
   */
  constructor(private http: HttpClient) {}

  /**
   * Obtiene un piloto de acuerdo a una url dada.
   * @param url La url del piloto.
   */
  getPilot(url: string): Observable<Pilot> {
    return this.http.get<Pilot>(url);
  }
}
