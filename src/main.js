export function paginator(values, perPage) {
  let retnObj = {}; // assumirá o valor de retono com todas as paginações
  let page = 1; // primeira pagina já definida

  if (values.length === 0) {
    return {'1': []};
  }

  const itemsLimiter = () => {
    if (retnObj[page].length >= perPage) page += 1;
  };
  // verifica cada item separando as em páginas
  values.map((item) => {
    if (retnObj[page] === undefined) {
      return retnObj = {
        ...retnObj,
        [page]: [item],
      };
    }

    retnObj = {
      ...retnObj,
      [page]: [...retnObj[page], item],
    };

    return itemsLimiter();
  });

  return retnObj;
}

