import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import MainScreen from './screens/MainScreen'
import AboutScreen from './screens/AboutScreen'
import Sidebar from './components/Sidebar'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        overlayColor: '#00000000'
      }}
    >
      <Drawer.Screen name="Main" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
