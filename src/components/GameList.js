import React from 'react'
import { ActivityIndicator, Alert, FlatList, RefreshControl, Text, View } from 'react-native'
import styled from 'styled-components/native'
import Card from './Card'
import { useHomeContext } from '../context/HomeContext'

const Container = styled.View`
  display: flex;
  padding: 0 10px;
`

const FlexCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const GameList = () => {
  const { gamesQuery } = useHomeContext()
  const { isLoading, error, data, refetch, isRefetching } = gamesQuery

  if (isLoading) {
    return (
      <FlexCenter>
        <ActivityIndicator size={'large'} />
        <Text>Loading...</Text>
      </FlexCenter>
    )
  }

  if (error) {
    Alert.alert('Error', 'Something went wrong. Please try again')
  }

  return (
    <View>
      <Container>
        <FlatList
          refreshControl={<RefreshControl onRefresh={refetch} refreshing={isRefetching} />}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <Card {...item} />}
        />
      </Container>
    </View>
  )
}

export default GameList
