import { makeId } from './id';

/**
 * Создание node скрипта
 * @param {string} src
 * @param {object} options
 */
export const createScript = (src, options = { type: 'text/javascript', defer: false, async: false }) => {
  const script = document.createElement('script');
  script.src = src;
  script.id = options.id || makeId(6);
  script.type = options.type || 'text/javascript';
  script.defer = options.defer || false;
  script.async = options.async || false;

  appendTo(script, document.head);
};

/**
 * Вставляем node в html
 * @param {HTMLElement} el
 * @param {HTMLElement} to
 * @returns {*|ActiveX.IXMLDOMNode}
 */
export const appendTo = (el, to) => to.appendChild(el);
