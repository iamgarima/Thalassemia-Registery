const emptyFieldCheck = (dataObj) => {
  const valArr = Object.keys(dataObj).map((key) => {
    dataObj[key] = dataObj[key].trim();
    return dataObj[key] === '' ? null : key; 
  })
  return valArr.indexOf(null) === -1 ? dataObj : null;
}

module.exports = {
  emptyFieldCheck
}