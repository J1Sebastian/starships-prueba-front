import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from './starship-list/starship-list.component';
import { StarshipDetailComponent } from './starship-detail/starship-detail.component';

/**
 * Módulo que contiene los componentes relacionados con las naves espaciales.
 */
@NgModule({
  imports: [CommonModule],
  exports: [StarshipListComponent],
  declarations: [StarshipListComponent, StarshipDetailComponent]
})
export class StarshipModule {}
