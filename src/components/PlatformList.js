import React from 'react'
import { View } from 'react-native'
import { PLATFORMS } from '../constants/constants'
import FilterItem from './FilterItem'
import useSetFilter from '../hooks/UseSetFilter'

const RenderItem = ({ item }) => {
  const { isActive, toggleSetFilter } = useSetFilter('platform', item)
  const setPlatformHandler = () => toggleSetFilter(item)

  return <FilterItem onPress={setPlatformHandler} isActive={isActive} item={item} />
}

const PlatformList = () => (
  <View>
    {PLATFORMS.map((platform) => (
      <RenderItem item={platform} key={platform} />
    ))}
  </View>
)

export default PlatformList
