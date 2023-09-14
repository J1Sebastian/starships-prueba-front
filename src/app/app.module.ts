import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarshipModule } from './starship/starship.module';
import { PilotModule } from './pilot/pilot.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarshipModule, // <-- Se importa el modulo de Starship para poder usarlo
    PilotModule, // <-- Se importa el modulo de Pilot para poder usarlo
    HttpClientModule, // <-- Se importa el modulo de http para poder hacer peticiones http
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
