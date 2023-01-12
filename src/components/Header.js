import React from 'react'
import styled from 'styled-components/native'
import CustomModal from './CustomModal'
import Filters from './Filters'
import { AntDesign } from '@expo/vector-icons'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 10px 0 10px;
  border-bottom-color: #2196f3ff;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`

export const Header = () => (
  <Container>
    <Title>Free to play</Title>
    <CustomModal buttonLabel="Filters" icon={<AntDesign name="filter" size={28} color="#2196F3FF" />} children={<Filters />} />
  </Container>
)
