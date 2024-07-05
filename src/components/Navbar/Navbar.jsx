import { Heading, VStack } from '@chakra-ui/react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <VStack display={{ base: 'none', lg: 'flex' }} spacing={'5rem'} w={'100%'} h={'100%'} bg={'white'} pt={'5rem'}>
      <Heading fontSize={{ lg: '25px', xl: '30px' }} textAlign={'center'}>
          白頭翁不吃小米
      </Heading>

      <NavLinks />
    </VStack>
  )
}

export default Navbar
