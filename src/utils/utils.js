/* allow get not empty filter params for API request */
export const getNotEmptyFilters = (filters) => {
  let searchParams = {}

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '') {
      searchParams[key] = value
    }
  })

  if (Object.keys(searchParams).length) {
    return searchParams
  }
}
