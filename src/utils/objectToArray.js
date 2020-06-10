export const objectToArray = object => {
  return Object.entries(object).map(value => {
    return [value[0], Number(value[1])]
  })
}
