import React from 'react'
import {
  ScrollView,
  Box,
  Text,
  VStack,
  Icon,
  Image,
  useColorModeValue
} from 'native-base'
import { Feather } from '@expo/vector-icons'

import AnimatedColorBox from '../components/AnimatedColorBox'
import Navbar from '../components/Navbar'
import Masthead from '../components/Masthead'
import LinkButton from '../components/LinkButton'

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue('warmGray.50', 'warmGray.900')}
      w="full"
    >
      <Masthead
        title="About this app"
        image={require('../assets/about-masthead.png')}
      >
        <Navbar />
      </Masthead>
      <ScrollView
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        mt="-20px"
        pt="30px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center">
            <Image
              source={require('../assets/mew.png')}
              borderRadius="full"
              resizeMode="cover"
              w={120}
              h={120}
              alt="author"
            />
          </Box>
          <Text fontSize="md" w="full" textAlign="center">
            This is React Native app that's built for learning and practice
          </Text>
          <LinkButton
            backgroundColor="#1C2128"
            mt="20px"
            size="lg"
            borderRadius="full"
            href="https://github.com/TamTH-Dev"
            leftIcon={
              <Icon as={Feather} name="github" size="sm" opacity={0.5} />
            }
          >
            Go to GitHub
          </LinkButton>
          <LinkButton
            backgroundColor="#0A66C2"
            mt="6px"
            size="lg"
            borderRadius="full"
            href="https://www.linkedin.com/in/tam-tran-11a6ba1a1"
            leftIcon={
              <Icon as={Feather} name="linkedin" size="sm" opacity={0.5} />
            }
          >
            Go to LinkedIn
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  )
}

export default AboutScreen
