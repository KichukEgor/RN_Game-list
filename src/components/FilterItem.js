import React from 'react'
import styled from 'styled-components/native'

const Item = styled.TouchableOpacity`
  margin-bottom: 8px;
  padding: 4px 8px;
  font-size: 18px;
  border: 1px solid ${({ isActive }) => (isActive ? '#2196F3FF' : '#7c7498')};
  background: ${({ isActive }) => (isActive ? '#2196F3FF' : 'transparent')};
  border-radius: 8px;
  text-transform: capitalize;
`

const Title = styled.Text`
  color: ${({ isActive }) => (isActive ? '#fff' : '#a29fa8')};
`

const FilterItem = ({ item, onPress, isActive }) => (
  <Item isActive={isActive} onPress={onPress}>
    <Title isActive={isActive}>{item}</Title>
  </Item>
)

export default FilterItem
