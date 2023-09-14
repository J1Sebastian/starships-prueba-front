/**
 * Se crea una clase StarShips con los atributos requeridos por el emperador. Los nombres de los atributos coinciden con
 * los nombres de los atributos del json que devuelve la api.
 */

import { Pilot } from '../pilot/pilot';

export class Starship {
  name: string;
  model: string;
  cost_in_credits: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  pilots: Pilot[];

  /**
   * Crear una nueva instancia de la clase Starship.
   * @param {string} name - El nombre de la nave.
   * @param {string} model - El modelo de la nave.
   * @param {string} cost_in_credits - El costo de la nave.
   * @param {string} max_atmosphering_speed - La velocidad maxima de la nave.
   * @param {string} crew - La capacidad de la tripulacion de la nave.
   * @param {string} passengers - La capacidad de pasajeros de la nave.
   * @param {Pilot[]} pilots - Los pilotos asignados a la nave.
   */
  constructor(
    name: string,
    model: string,
    cost_in_credits: string,
    max_atmosphering_speed: string,
    crew: string,
    passengers: string,
    pilots: Pilot[]
  ) {
    this.name = name;
    this.model = model;
    this.cost_in_credits = cost_in_credits;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.crew = crew;
    this.passengers = passengers;
    this.pilots = pilots;
  }
}
