export const sortByName = (products = []) => {
  return products.sort((a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    for (let i = 0; i < nameA.length; i++) {
      if (nameA[i] !== nameB[i]) {
        if (nameA > nameB) return 1
        return -1
      }
      continue
    }

    return 0
  })
}

export const sortByViews = (products = []) => {
  return products.sort((a, b) => b.views - a.views)
}

export const sortByStartDate = (products = []) => {
  return products.sort((a, b) => {
    const dateA = new Date(a?.start_date)
    const dateB = new Date(b?.start_date)

    return dateA.getTime() - dateB.getTime()
  })
}

export const sortByEndDate = (products = []) => {
  return products.sort((a, b) => {
    const dateA = new Date(a?.end_date)
    const dateB = new Date(b?.end_date)

    return dateA.getTime() - dateB.getTime()
  })
}