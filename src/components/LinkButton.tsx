import React, { useCallback } from 'react'
import * as Linking from 'expo-linking'
import { Button, IButtonProps } from 'native-base'

interface Props extends IButtonProps {
  href: string
}

export default function LinkButton({ href, ...props }: Props) {
  const handlePress = useCallback(() => {
    Linking.openURL(href)
  }, [href])

  return <Button {...props} onPress={handlePress} />
}
