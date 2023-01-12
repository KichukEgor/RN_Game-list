import React from 'react'
import GameList from '../components/GameList'
import { HomeProvider } from '../context/HomeContext'
import { Header } from '../components/Header'

const HomeScreen = () => (
  <HomeProvider>
    <Header />
    <GameList />
  </HomeProvider>
)

export default HomeScreen
