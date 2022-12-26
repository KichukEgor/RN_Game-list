import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  margin: 4px 0;
  padding: 10px;
  border: 1px solid #202;
  border-radius: 8px;
`

const Title = styled.Text`
  font-size: 20px;
`

const Description = styled.Text`
  font-size: 16px;
`

const Card = ({ title, short_description }) => (
  <Container>
    <Title>{title}</Title>
    <Description>{short_description}</Description>
  </Container>
)

export default Card
