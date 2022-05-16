/**
  * Utilidades para dar formato.
  * */
class Formatters {
  /**
    * Convierte la hora del sistema de 24 horas al sistema de 12 horas.
    * @param {string} time - Hora a convertir.
    * @returns {string} - Hora en sistema de 12 horas.
    * */
  static formatTime(time) {
    const hour = parseInt(time.slice(0, 2));
    if (hour === 0) {
      time = `12:${time.slice(3, 5)} am`; // 12:00 am
    } else if (hour < 12) {
      time = `${time} am`; // 11:59 am
    } else if (hour === 12) {
      time = `${time} pm`; // 12:00 pm
    } else if (hour >= 22) {
      time = `${hour - 12}:${time.slice(3, 5)} pm`; // 10:00 pm
    } else {
      time = `0${hour - 12}:${time.slice(3, 5)} pm`; // 05:00 pm
    }
    return time;
  }

  /**
    * Obtiene solamente la hora omitiendo minutos.
    * @param {string} time - Hora con minutos.
    * @returns {string} - Hora sin minutos.
    * */
  static timeToHour(time) {
    return parseInt(time.split(":")[0]);
  }

  /**
    * Obtiene solamente los minutos omitiendo la hora.
    * @param {string} time - Hora con minutos.
    * @returns {string} - Minutos sin hora.
    * */
  static timeToMinutes(time) {
    return parseInt(time.split(":")[1]);
  }
}

export default Formatters;
