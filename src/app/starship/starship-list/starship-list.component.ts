import { Component, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { StarshipService } from '../starship.service';
import { SharedService } from 'src/app/shared/shared.service';

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

  selected: Boolean = false;
  selectedStarship!: Starship;

  /**
   * Crear una instancia del componente.
   * @param starshipService Servicio que se encarga de obtener los datos de las naves espaciales.
   */
  constructor(
    private starshipService: StarshipService,
    private sharedService: SharedService
  ) {}

  /* Obtener las naves espaciales. */
  getStarships(): void {
    this.starshipService.getStarships().subscribe((starships) => {
      this.starships = starships;
    });
  }

  /* Si se selecciona una nave espacial, se muestra el detalle de la misma. La nave espacial seleccionada se asigna a la propiedad selectedStarship. */
  onSelectedStarship(starship: Starship): void {
    this.selected = true;
    this.selectedStarship = starship;
  }

  /**
   * Se ejecuta cuando el componente se inicia. Obtiene todas las naves espaciales.
   * Asimismo, se suscribe al observable de selected para saber si se dejo de seleccionar una nave espacial.
   */
  ngOnInit() {
    this.getStarships();
    this.sharedService.getSelectedObservable().subscribe((selected) => {
      this.selected = selected;
    });
  }
}
