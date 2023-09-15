import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '../starship';
import { PilotService } from 'src/app/pilot/pilot.service';
import { Pilot } from 'src/app/pilot/pilot';
import { Observable, forkJoin } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

/**
 * Componente que muestra el detalle de una nave espacial.
 */
@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.scss'],
})
export class StarshipDetailComponent implements OnInit {
  @Input() starshipDetail!: Starship;

  /**
   * Crear una instancia del componente.
   * @param pilotService Servicio que se encarga de obtener los datos de los pilotos.
   * @param sharedService Servicio que se encarga de compartir información entre componentes.
   */
  constructor(
    private pilotService: PilotService,
    private sharedService: SharedService
  ) {}

  /**
   * Función utilizada para deseleccionar el detalle de una nave espacial (volver al listado de naves espaciales).
   * Cuando el boton de "Go back" es presionado, se ejecuta esta función.
   */
  unselectDetail(): void {
    this.sharedService.unselectDetail();
  }

  /**
   * Se ejecuta cuando el componente se inicia.
   * Obtiene los pilotos de la nave espacial actual y los asigna a la propiedad pilotsObjects.
   * Se usa forkJoin para esperar a que todas las peticiones de los pilotos se completen.
   */
  ngOnInit() {
    const pilotObservables: Observable<Pilot>[] = [];

    for (let i = 0; i < this.starshipDetail.pilots.length; i++) {
      const pilotObservable = this.pilotService.getPilot(
        this.starshipDetail.pilots[i]
      );
      pilotObservables.push(pilotObservable);
    }

    forkJoin(pilotObservables).subscribe((pilots: Pilot[]) => {
      this.starshipDetail.pilotsObjects = pilots;
    });
  }
}
