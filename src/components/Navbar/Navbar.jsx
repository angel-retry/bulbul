import { VStack, HStack, Box, Text } from '@chakra-ui/react'
import NavLinks from './NavLinks'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <VStack display={{ base: 'none', lg: 'flex' }} spacing={'5rem'} w={'100%'} h={'100%'} bg={'white'} pt={'5rem'} position={'relative'} px={'1rem'} >
      <HStack>
        <Box position={'absolute'} right={{ lg: '-70px' }} transform={{ lg: 'scale(0.7)', xl: 'scale(0.8)' }} transformOrigin="center" >
          <Logo/>
        </Box>
        <Text fontSize={{ lg: '22px', xl: '30px' }} textAlign={'center'} fontWeight={700}>
            白頭翁不吃小米
        </Text>
      </HStack>

      <NavLinks />
    </VStack>
  )
}

export default Navbar
