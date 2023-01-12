import React from 'react'
import { View } from 'react-native'
import { CATEGORIES } from '../constants/constants'
import FilterItem from './FilterItem'
import useSetFilter from '../hooks/UseSetFilter'

const RenderItem = ({ item }) => {
  const { isActive, toggleSetFilter } = useSetFilter('category', item)
  const setCategoryHandler = () => toggleSetFilter(item)

  return <FilterItem onPress={setCategoryHandler} isActive={isActive} item={item} />
}

const CategoryList = () => (
  <View>
    {CATEGORIES.map((option) => (
      <RenderItem item={option} key={option} />
    ))}
  </View>
)

export default CategoryList
