import React, { ReactNode } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'

import theme from '../theme'

type AppContainerProps = {
  children: ReactNode
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
