import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { StarshipService } from '../starship.service';

/**
 * Componente que muestra la lista de naves espaciales.
 */
@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.scss'],
})
export class StarshipListComponent implements OnInit {
  // Lista de naves espaciales.
  starships: Array<Starship> = [];

  /**
   * Crear una instancia del componente.
   * @param starshipService Servicio que se encarga de obtener los datos de las naves espaciales.
   */
  constructor(private starshipService: StarshipService) {}

  // Obtener las naves espaciales.
  getStarships(): void {
    this.starshipService.getStarships().subscribe((starships) => (this.starships = starships));
  }

  // Se ejecuta cuando el componente se inicia.
  ngOnInit() {
    this.getStarships();
  }
}
