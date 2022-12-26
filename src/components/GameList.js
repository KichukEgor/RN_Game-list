import React from 'react'
import { ActivityIndicator, Alert, FlatList, RefreshControl, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'
import Card from './Card'
import { useFetchGames } from '../api/api'

const Container = styled.View`
  display: flex;
  padding: 10px;
`

const FlexCenter = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const GameList = () => {
  const { data: gameList, isLoading, error, isRefetching, refetch } = useFetchGames()

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
      {
        <Container>
          <FlatList
            refreshControl={<RefreshControl onRefresh={refetch} refreshing={isRefetching} />}
            data={gameList}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card title={item.title} short_description={item.short_description} developer={item.developer} />
              </TouchableOpacity>
            )}
          />
        </Container>
      }
    </View>
  )
}

export default GameList
