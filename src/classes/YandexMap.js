/*global ymaps*/

export default class YandexMap {
  constructor(mapId) {
    this.initInterval = null;
    this.mapId = mapId;
    this.mapObject = null;
    this.mapPointIcon = null;
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
            clearInterval(this.initInterval);
            this.initInterval = null;
            res();
          });
        }
      }, 100);
    });
  }

  draw() {
    this.mapObject = new ymaps.Map(this.mapId, {
      center: [55.76, 37.64],
      zoom: 15,
      controls: [],
    });
  }

  drawPoint(point) {
    const image = this.mapPointIcon;

    const placeMark = new ymaps.Placemark([point.latitude, point.longitude], {
    }, {
      iconLayout: 'default#image',
      iconImageHref: image,
      iconImageSize: [30, 30],
      iconImageOffset: [-5, -20]
    });

    this.mapObject.setCenter([point.latitude, point.longitude]);
    this.mapObject.geoObjects.removeAll();
    this.mapObject.geoObjects.add(placeMark);
  }

  destroy() {
    this.mapObject && this.mapObject.destroy();
  }

  setMapIcon(icon) {
    this.mapPointIcon = icon;
  }
}
