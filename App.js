import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Tracklist from './components/home/Tracklist'

import * as eva from '@eva-design/eva'
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'
import Findinput from './components/home/Findinput'
import Modalbox from './components/home/Modalbox'


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>
      <View style={styles.topBox}>
      <Findinput />
      </View>
      <View style={styles.centerBox}>
        <Text category='h3' style={{marginBottom: 50}}>Музыкальный Автомат</Text>
        <Tracklist style={{backgroundColor: 'red'}} />
        <Modalbox />
      </View>
      <StatusBar style="auto" />
    </View>
    </ApplicationProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b7d05f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBox:{
    // flex: 1,
    height: '30%',
    backgroundColor: '#50813b',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20
    
  },
  centerBox:{
    flex: 1,
    backgroundColor: '#b7d05f',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
});

