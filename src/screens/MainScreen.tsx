import React, { useCallback, useState } from 'react'
import { VStack, Fab, Icon, useColorModeValue } from 'native-base'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'

import ThemeToggle from '../components/ThemeToggle'
import TaskList, { TaskItemData } from '../components/TaskList'
import AnimatedColorBox from '../components/AnimatedColorBox'
import Masthead from '../components/Masthead'
import Navbar from '../components/Navbar'

const initialData: TaskItemData[] = [
  {
    id: shortid.generate(),
    subject: 'Dating a girl',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Buy a house',
    done: false
  }
]

export default function Main() {
  const [data, setData] = useState<TaskItemData[]>(initialData)
  const [editingItemId, setEditingItemId] = useState<string>('')

  const handleToggleTaskItem = useCallback(item => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
  }, [])

  const handleFinishEditingTaskItem = useCallback(_item => {
    setEditingItemId('')
  }, [])

  const handlePressTaskItemLabel = useCallback(item => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback(item => {
    setData(prevData => {
      const newData = prevData.filter(data => data.id !== item.id)
      return newData
    })
  }, [])

  return (
    <AnimatedColorBox
      bg={useColorModeValue('warmGray.50', 'primary.900')}
      w="full"
      flex={1}
    >
      <Masthead
        title="What's up, friends!"
        image={require('../assets/masthead.png')}
      >
        <Navbar />
      </Masthead>
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          editingItemId={editingItemId}
          onToggleItem={handleToggleTaskItem}
          onChangeSubject={handleChangeTaskItemSubject}
          onFinishEditing={handleFinishEditingTaskItem}
          onPressLabel={handlePressTaskItemLabel}
          onRemoveItem={handleRemoveItem}
        />
      </VStack>
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon size="sm" color="white" as={<AntDesign name="plus" />} />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg={useColorModeValue('blue.500', 'blue.400')}
        onPress={() => {
          const id = shortid.generate()
          setData(prevData => [
            {
              id,
              subject: '',
              done: false
            },
            ...prevData
          ])
          setEditingItemId(id)
        }}
      />
    </AnimatedColorBox>
  )
}
