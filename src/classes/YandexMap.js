/*global ymaps*/

export default class YandexMap {
  constructor(mapId) {
    this.initInterval = null;
    this.mapId = mapId;
    this.mapObject = null;
  }

  /**
   * @function
   * Инициализируем карту после готовности яндекс карт
   */
  init() {
    return new Promise(res => {
      this.initInterval = setInterval(() => {
        if (typeof ymaps !== 'undefined') {
          ymaps.ready(() => {
            this.draw();
          });
          clearInterval(this.initInterval);
          this.initInterval = null;
          res();
        }
      }, 1000);
    });
  }

  draw() {
    this.mapObject = new ymaps.Map(this.mapId, {
      center: [55.76, 37.64],
      zoom: 5,
      controls: [],
    }, {
      restrictMapArea: [
        [55.994867, 37.084569],
        [55.398945, 38.125385],
      ],
    });
  }

  destroy() {
    this.mapObject && this.mapObject.destroy();
  }
}
