import { Heading, VStack, HStack, Box, Image } from '@chakra-ui/react'
import NavLinks from './NavLinks'
import Logo from '../Logo/Logo'

const Navbar = () => {
  return (
    <VStack display={{ base: 'none', lg: 'flex' }} spacing={'5rem'} w={'100%'} h={'100%'} bg={'white'} pt={'5rem'} position={'relative'} px={'1rem'} >
      <HStack>
        <Box position={'absolute'} right={{ lg: '-70px' }} >
          <Logo scale={0.6}/>
        </Box>
        <Heading fontSize={{ lg: '22px', xl: '30px' }} textAlign={'center'}>
            白頭翁不吃小米
        </Heading>
      </HStack>

      <NavLinks />
    </VStack>
  )
}

export default Navbar
