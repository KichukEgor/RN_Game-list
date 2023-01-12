import axios from 'axios'
import { useQuery } from 'react-query'
import { getNotEmptyFilters } from '../utils/utils'
import { Alert } from 'react-native'
import { API_URL, REQUEST_PER_SECOND_LIMIT } from '../constants/constants'

/*this allows to avoid requests limit per second*/
let requestCounter = 0
setInterval(() => (requestCounter = 0), 1000)

export const fetchGames = async (filters) => {
  requestCounter++

  if (requestCounter > REQUEST_PER_SECOND_LIMIT) {
    Alert.alert('Error', `Too many requests. Do not exceed more than ${REQUEST_PER_SECOND_LIMIT} requests per second please.`)
  }

  const searchParams = getNotEmptyFilters(filters)
  if (searchParams) {
    const { data } = await axios.get(API_URL, { params: searchParams })
    return data
  } else {
    const { data } = await axios.get(API_URL)
    return data
  }
}

export const useFetchGames = (filters) => useQuery(['Games', filters], () => fetchGames(filters))
