import { Heading, VStack, HStack, Box, Image } from '@chakra-ui/react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <VStack display={{ base: 'none', lg: 'flex' }} spacing={'5rem'} w={'100%'} h={'100%'} bg={'white'} pt={'5rem'} position={'relative'} px={'1rem'} >
      <HStack>
        <Box position={'absolute'} right={'-50px'} >
          <Image src={'/public/Logo.png'} />
        </Box>
        <Heading fontSize={{ lg: '25px', xl: '30px' }} textAlign={'center'}>
            白頭翁不吃小米
        </Heading>
      </HStack>

      <NavLinks />
    </VStack>
  )
}

export default Navbar
