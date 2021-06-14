/**
 * Подготовка данныз для отправки на backend Python
 * Т.к. cji не может корректно парсить массивы присылаемых данных (someData[] = 1, someData[] = 2)
 * Приходится вручную гененрировать query string этого запроса, раскладывая все массивы в цепочку string
 * @param data
 * @returns {string}
 */
export const prepareForPythonFormData = data => {
  const query = [];
  for (const key in data) {
    if (data.hasOwnProperty(key) && data[key]) {
      if (Array.isArray(data[key])) {
        query.push(...data[key].map(string => `${key}=${string}`));
      } else {
        query.push(`${key}=${data[key]}`);
      }
    }
  }

  return query.join('&');
};
