import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import CategoryList from './CategoryList'
import SortingList from './SortingList'
import PlatformList from './PlatformList'

const Title = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
`

const Filters = () => (
  <ScrollView>
    <Title>Sort by:</Title>
    <SortingList />
    <Title>Category:</Title>
    <CategoryList />
    <Title>Platform:</Title>
    <PlatformList />
  </ScrollView>
)
export default Filters
