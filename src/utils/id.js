/**
 * Генерируем уникальный id заданной длины
 * @param length
 * @returns {string}
 */
export const makeId = length => {
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    id += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  if (document.getElementById(id)) {
    return makeId(length);
  }

  return id;
};
