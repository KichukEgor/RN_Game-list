import axios from 'axios'
import { useQuery } from 'react-query'

const API_URL = 'https://www.freetogame.com/api/games'

export const fetchGames = async () => {
  const { data } = await axios.get(API_URL)
  return data
}

export const useFetchGames = () => useQuery('Games', fetchGames)
