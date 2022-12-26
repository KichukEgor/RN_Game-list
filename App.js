import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import HomeScreen from './src/Screens/HomeScreen'

const Container = styled.View`
  padding-top: 24px;
`

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <QueryClientProvider client={queryClient}>
        <Container>
          <HomeScreen />
        </Container>
      </QueryClientProvider>
    </>
  )
}
