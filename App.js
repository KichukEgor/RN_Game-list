import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import HomeScreen from './src/screens/HomeScreen'

const Container = styled.View`
  flex: 1;
  padding-top: 30px;
  background: #000;
`

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <StatusBar style="auto" />
        <HomeScreen />
      </Container>
    </QueryClientProvider>
  )
}
