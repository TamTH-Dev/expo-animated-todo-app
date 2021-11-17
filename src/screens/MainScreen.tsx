import React, { useCallback, useState } from 'react'
import { Center, VStack } from 'native-base'

import ThemeToggle from '../components/ThemeToggle'
import TaskItem from '../components/TaskItem'

export default function Main() {
  const [checked, setChecked] = useState<boolean>(false)
  const [subject, setSubject] = useState<string>('Task Item')
  const [isEditing, setIsEditing] = useState<boolean>(false)

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
      <VStack w="full" space={5} alignItems="center">
        <TaskItem
          isEditing={isEditing}
          subject={subject}
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          onPressLabel={() => setIsEditing(true)}
          onChangeSubject={setSubject}
          onFinishEditing={() => setIsEditing(false)}
        />
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
