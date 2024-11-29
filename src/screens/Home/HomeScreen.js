import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import SliderImages from './SliderImages'
import ContinueWatching from './ContinueWatching'
import LatestReleases from './LatestReleases'

const HomeScreen = () => {

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'rgba(0,0,0,1)'}}>
      <SliderImages />
      <ContinueWatching />
      <LatestReleases />
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})