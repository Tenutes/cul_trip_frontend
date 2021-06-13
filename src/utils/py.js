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
