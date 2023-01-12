import { useState } from 'react'
import constate from 'constate'
import { useFetchGames } from '../api/api'

const useHomeState = () => {
  const [filters, setFilters] = useState({ platform: '', category: '', ['sort-by']: 'relevance' })

  return {
    filters,
    setFilters,
    gamesQuery: useFetchGames(filters)
  }
}

export const [HomeProvider, useHomeContext] = constate(useHomeState)
