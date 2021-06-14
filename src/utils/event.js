import { MAX_TEXT_LENGTH } from '../constants';
import { format, getDayOfYear, parseISO } from 'date-fns';
import { MONTH } from './locale';
import { imgUrl } from '../config';

/**
 * Обрезаем текст, добавляя в конец ,,,
 * @param text
 * @param croppLength
 * @returns {string|*}
 */
export const getCroppedText = (text, croppLength) => {
  croppLength = croppLength || MAX_TEXT_LENGTH;
  if (text.length < croppLength) {
    return text;
  }

  const textCroppers = [',', '.', ' '];
  let endedWith = croppLength;

  while (endedWith < text.length && !textCroppers.includes(text[endedWith])) {
    endedWith++;
  }

  const ending = endedWith !== text.length ? '...' : '';

  return `${text.substring(0, endedWith)}${ending}`;
};

/**
 * Форматируем даты ивента
 * @param date_from
 * @param date_to
 * @returns {string}
 */
export const getEventDate = ({ date_from, date_to }) => {
  const dayFrom = getDayOfYear(parseISO(date_from));
  const dayTo = getDayOfYear(parseISO(date_to));
  if (dayFrom === dayTo) {
    const month = MONTH[format(parseISO(date_from), 'MMMM').toLowerCase()];
    return `${format(parseISO(date_from), 'dd')} ${month} ${format(
      parseISO(date_from),
      'HH:mm',
    )}-${format(parseISO(date_to), 'HH:mm')}`;
  }
  const monthFrom = MONTH[format(parseISO(date_from), 'MMMM').toLowerCase()];
  const monthTo = MONTH[format(parseISO(date_to), 'MMMM').toLowerCase()];

  return `${format(parseISO(date_from), 'dd')} ${monthFrom} - ${format(
    parseISO(date_to),
    'dd',
  )} ${monthTo}`;
};

/**
 * Получаем src до картинки
 * @param src
 * @returns {string}
 */
export const getSrc = src => `${imgUrl}${src}`;
