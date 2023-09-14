/**
 * Se crea una clase Pilot con varios atributos basicos. Los nombres de los atributos coinciden con los nombres
 * de los atributos del json que devuelve la api.
 */

export class Pilot {
  name: string;
  height: string;
  mass: string;

  /**
   * Crear una nueva instancia de la clase Pilot.
   * @param {string} name - El nombre del piloto.
   * @param {string} height - La altura del piloto.
   * @param {string} mass - La masa del piloto.
   */
  constructor(name: string, height: string, mass: string) {
    this.name = name;
    this.height = height;
    this.mass = mass;
  }
}
