export function priceASC(a, b) {
  // Remove currency symbols and pick price value
  const priceA = a.price.substring(1);
  const priceB = b.price.substring(1);
  if (priceA < priceB) {
    return -1;
  }
  if (priceA > priceB) {
    return 1;
  }

  return 0;
}

export function priceDSC(a, b) {
  // Remove currency symbols and pick price value
  const priceA = a.price.substring(1);
  const priceB = b.price.substring(1);
  if (priceA > priceB) {
    return -1;
  }
  if (priceA < priceB) {
    return 1;
  }

  return 0;
}

export function stringASC(a, b) {
  // Ignore upper and lowercase
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}
