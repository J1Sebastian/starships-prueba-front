import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, mergeMap, of } from 'rxjs';
import { Starship } from './starship';
import { environment } from 'src/environments/environment';

/**
 * Servicio que se encarga de obtener los datos de las naves espaciales.
 */
@Injectable({
  providedIn: 'root',
})
export class StarshipService {
  private apiUrl: string = environment.baseUrl + '/starships';

  /**
   * Crea una instancia del servicio.
   * @param http Instancia de Httpclient que se encarga de hacer las peticiones http.
   */
  constructor(private http: HttpClient) {}

  /* Obtiene el listado completo de naves espaciales. */
  getStarships(): Observable<Starship[]> {
    return this.getStarshipsPage(this.apiUrl);
  }

  /**
   * Obtiene un listado de naves espaciales de acuerdo a una url dada.
   * @param url La url de la pagina de naves espaciales.
   */
  getStarshipsPage(url: string): Observable<Starship[]> {
    /**
     * La pagina web se compone de un archivo asi: {"count", "next", "previous", "results": []}
     */

    return this.http.get<any>(url).pipe(
      mergeMap((response) => {
        // Convierte la respuesta a un arreglo de objetos Starship.
        const starships = response.results as Starship[];

        if (response.next) {
          // Si hay una siguiente pagina, se obtiene y se concatena con la actual.
          return this.getStarshipsPage(response.next).pipe(
            map((nextStarships) => starships.concat(nextStarships))
          );
        } else {
          // Si no hay siguiente pagina, se regresa el arreglo de objetos Starship.
          return of(starships);
        }
      })
    );
  }
}
