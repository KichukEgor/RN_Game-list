import React from 'react'
import { View } from 'react-native'
import { SORT_OPTIONS } from '../constants/constants'
import { useHomeContext } from '../context/HomeContext'
import FilterItem from './FilterItem'

const RenderItem = ({ item }) => {
  const { filters, setFilters } = useHomeContext()
  const isActive = item === filters['sort-by']

  const setSortingHandler = () => setFilters((prev) => ({ ...prev, ['sort-by']: item }))

  return <FilterItem onPress={setSortingHandler} isActive={isActive} item={item} />
}

const SortingList = () => (
  <View>
    {SORT_OPTIONS.map((option) => (
      <RenderItem item={option} key={option} />
    ))}
  </View>
)

export default SortingList
