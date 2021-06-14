/*global ymaps*/

export default class YandexMap {
  /**
   * @constructor
   * @param {string} mapId
   */
  constructor(mapId) {
    this.mapId = mapId;
    /**
     * интервал для создания карты
     * @type {null|number}
     */
    this.initInterval = null;
    /**
     * Экземпляр карты
     * @type {null|object}
     */
    this.mapObject = null;
    /**
     * Иконка в base64 для карты
     * @type {null|string}
     */
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

  /**
   * @function
   * Рисуем карту с заданными координатами (~центр Москвы)
   */
  draw() {
    this.mapObject = new ymaps.Map(this.mapId, {
      center: [55.76, 37.64],
      zoom: 15,
      controls: [],
    });
  }

  /**
   * Генерируем плейсмарк
   * @param point
   * @returns {ymaps.Placemark}
   */
  getPoint(point) {
    const image = this.mapPointIcon;
    return new ymaps.Placemark([point.latitude, point.longitude], {}, {
      iconLayout: 'default#image',
      iconImageHref: image,
      iconImageSize: [30, 30],
      iconImageOffset: [-5, -20],
    });
  }

  /**
   * Рисуем одну точку на карте
   * @param point
   */
  drawPoint(point) {
    const placeMark = this.getPoint(point);
    this.mapObject.setCenter([point.latitude, point.longitude]);
    this.mapObject.geoObjects.removeAll();
    this.mapObject.geoObjects.add(placeMark);
  }

  /**
   * Рисуем много точек на карте
   * @param points
   */
  drawPoints(points) {
    this.mapObject.geoObjects.removeAll();
    for (const point of points) {
      const placeMark = this.getPoint(point);
      this.mapObject.geoObjects.add(placeMark);
    }
    if (points.length) {
      this.mapObject.setBounds(this.mapObject.geoObjects.getBounds());
    }
  }

  /**
   * Уничтожаем экземляр карты
   */
  destroy() {
    this.mapObject && this.mapObject.destroy();
  }

  /**
   * Устанавлияем иконку для плейсмарка
   * @param icon
   */
  setMapIcon(icon) {
    this.mapPointIcon = icon;
  }
}
