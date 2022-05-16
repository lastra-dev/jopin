/*global chrome*/

import Formatters from "../helpers/Formatters";
import ScheduleStorage from "../controllers/ScheduleStorage";
import Schedule from "../models/Schedule";

/**
  * Utiliza el API de Chrome para crear alarmas que abren los URLs de los Schedule.
  * */
class Alarms {
  /**
    * Crea una alarma por cada día de la semana que se encuentre en el objeto Schedule.
    * @param {Schedule} schedule - Objeto Schedule.
    * */
  static create(schedule) {
    for (let i = 0; i < schedule.days.length; i++) {
      if (schedule.days[i] === 0) {
        continue;
      }
      let nearestWeekDayDate = this.getDateOfNearestWeekDay(i);
      nearestWeekDayDate.setHours(
        Formatters.timeToHour(schedule.time),
        Formatters.timeToMinutes(schedule.time),
        0 // seconds
      );

      // Alarms need different names
      // so we differentiate them with the week day number
      this.createAlarm(
        `${schedule.url} weekDay:${i}`,
        nearestWeekDayDate.getTime()
      );
    }
  }

  /**
    * Crea todas las alarmas de los objetos Schedule.
    * @param {Schedule[]} schedules - Array de Schedules.
    * */
  static createAll(schedules) {
    schedules.forEach(schedule => {
      this.create(schedule);
    });
  }

  /**
    * Edita una alarma.
    * @param {string} id - ID del schedule que edita la alarma.
    * @param {Schedule} schedule - Schedule que contiene información editada de la alarma.
    */
  static edit(id, schedule) {
    const oldEntry = ScheduleStorage.get(id);
    this.delete(oldEntry);
    this.create(schedule);
  }

  /**
    * Elimina las alarmas de un Schedule.
    * @param {Schedule} schedule - Objeto Schedule del que se quieren eliminar las alarmas.
    */
  static delete(schedule) {
    for (let i = 0; i < schedule.days.length; i++) {
      if (schedule.days[i] === 0) {
        continue;
      }
      chrome.alarms.clear(`${schedule.url} weekDay:${i}`);
    }
  }

  /**
    * Elimina todas las alarmas.
    * */
  static deleteAll() {
    chrome.alarms.clearAll();
  }

  /**
    * Obtiene la fecha con el día de la semana más cercano al que se le pasa como parametro.
    * @param {number} weekDayNumber - Numero de día de la semana (ej. 0 - domingo, 1 - lunes, ...)
    * @returns {Date} - Fecha obtenida.
    */
  // Solution by Tim
  // https://stackoverflow.com/questions/1579010/get-next-date-from-weekday-in-javascript
  static getDateOfNearestWeekDay(weekDayNumber) {
    let result = new Date();
    result.setDate(
      result.getDate() + ((weekDayNumber + (7 - result.getDay())) % 7)
    );
    return result;
  }

  /**
    * Crea un alarma que se activa cada semana.
    * @param {string} url - URL de la alarma.
    * @param {number} date - Fecha de la alarma.
    */
  static createAlarm(url, date) {
    let alarmInfo = {};
    alarmInfo.when = date;
    alarmInfo.periodInMinutes = 10080; // every week
    chrome.alarms.create(url, alarmInfo);
  }
}

export default Alarms;