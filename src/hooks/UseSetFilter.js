import { useHomeContext } from '../context/HomeContext'
import { useCallback } from 'react'

const UseSetFilter = (filter, item) => {
  const { filters, setFilters } = useHomeContext()
  const isActive = item === filters[filter]

  /* allows the user to remove the filter by pressing again */
  const toggleSetFilter = useCallback(
    (newValue) => {
      if (filters[filter] === newValue) {
        setFilters((prev) => ({ ...prev, [filter]: '' }))
      } else {
        setFilters((prev) => ({ ...prev, [filter]: item }))
      }
    },
    [filter, filters, setFilters, item]
  )

  return { isActive, toggleSetFilter }
}

export default UseSetFilter
