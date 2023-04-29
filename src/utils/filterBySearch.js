export const filterBySearch = (products, searchValue) => {
  return products.filter(({name, category}) => {
    const redName = name.toLowerCase()
    const redCategory = category.toLowerCase()
    const searchValueRed = searchValue.toLowerCase()

    if (!redName.includes(searchValueRed) && !redCategory.includes(searchValueRed)) return false

    return true
  })
}