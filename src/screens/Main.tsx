import React, { useCallback, useState } from 'react'
import { Text, Box, Center, VStack, useColorModeValue } from 'native-base'

import ThemeToggle from '../components/ThemeToggle'
import TaskItem from '../components/TaskItem'

export default function Main() {
  const [checked, setChecked] = useState<boolean>(false)

  const handlePressCheckbox = useCallback(() => {
    setChecked(prev => !prev)
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box w="100px" h="100px">
          <TaskItem isDone={checked} onToggleCheckbox={handlePressCheckbox} />
        </Box>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello World, Mickey</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
