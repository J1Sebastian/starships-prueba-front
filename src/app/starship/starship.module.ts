import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipListComponent } from './starship-list/starship-list.component';

/**
 * Módulo que contiene los componentes relacionados con las naves espaciales.
 */
@NgModule({
  imports: [CommonModule],
  declarations: [StarshipListComponent],
  exports: [StarshipListComponent],
})
export class StarshipModule {}
