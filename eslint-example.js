const compareProperty = (a, b) => {
  if (typeof a == 'number')
    return a || b ? (!a ? -1 : !b ? 1 : a == b ? 0 : a < b ? -1 : 1) : 0;
  else
    return a || b ? (!a ? -1 : !b ? 1 : a.localeCompare(b)) : 0;
};

//console.log(compareProperty('1', 1));