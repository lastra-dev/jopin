/**
  * Modelo Schedule para validar la información de los horarios.
  * */
class Schedule {
  /**
     * @param {string} name - Nombre del horario. (ej. "Clase de Español")
     * @param {string} url - Url del horario (ej. "https://meet.google.com/clase-español")
     * @param {string} time - Hora del horario (ej. "20:30")
     * @param {Number[]} days - Días de la semana del horario empezando por domingo. (ej: [1, 1, 0, 1, 0, 0, 0] Domingo, Lunes, Miercoles)
     * @param {string} ownerId - ID del usuario al que le pertenece el horario.
     * @param {boolean} enabled - Establece si el horario se encuentra activado.
     * @param {string} id - ID del horario.
     * @throws {Error} - Tira error si le falta name, url, time, days u ownerId.
     */
  constructor(name, url, time, days, ownerId, enabled = true, id = null) {
    const daysValid = days.some(day => {
      return day === 1;
    });

    if (
      name === undefined ||
      url === undefined ||
      time === undefined ||
      daysValid === false ||
      ownerId === undefined ||
      name === "" ||
      url === "" ||
      time === "" ||
      ownerId === ""
    ) {
      throw Error("Missing properties");
    }
    this.name = name;
    this.url = url;
    this.time = time;
    this.days = days;
    this.ownerId = ownerId;
    this.enabled = enabled;
    this.id = id;
  }

  /**
     * Convierte un objeto JSON en un objeto Schedule.
     * @param {string} jsonSchedule - Schedule en JSON.
     * @throws {Error} - Tira error si al objeto JSON le faltan propiedades de Schedule.
     * @returns {Schedule} - Objeto Schedule.
     */
  static fromJson(jsonSchedule) {
    const schedule = JSON.parse(jsonSchedule);
    if (
      !schedule.hasOwnProperty('name') ||
      !schedule.hasOwnProperty('url') ||
      !schedule.hasOwnProperty('time') ||
      !schedule.hasOwnProperty('days') ||
      !schedule.hasOwnProperty('ownerId') ||
      !schedule.hasOwnProperty('enabled') ||
      !schedule.hasOwnProperty('id')
    ) {
      throw Error("Error: JSON Entry missing fields");
    }
    return new Schedule(
      schedule.name,
      schedule.url,
      schedule.time,
      schedule.days,
      schedule.ownerId,
      schedule.enabled,
      schedule.id
    );
  }
}

export default Schedule;