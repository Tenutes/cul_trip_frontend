/*global ymaps*/

export default class YandexMap {
  constructor(mapId) {
    this.initInterval = null;
    this.mapId = mapId;
    this.mapObject = null;

    this.init();
  }

  /**
   * @function
   * Инициализируем карту после готовности яндекс карт
   */
  init() {
    this.initInterval = setInterval(() => {
      if (typeof ymaps !== 'undefined') {
        ymaps.ready(() => {
          this.draw();
        });
        clearInterval(this.initInterval);
        this.initInterval = null;
      }
    }, 1000);
  }

  draw() {
    this.mapObject = new ymaps.Map(this.mapId, {
      center: [55.76, 37.64],
      zoom: 7
    });
  }
}
