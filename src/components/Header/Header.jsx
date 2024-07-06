import { CloseIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, IconButton, useDisclosure } from '@chakra-ui/react'
import NavLinks from '../Navbar/NavLinks'
import Logo from '../Logo/Logo'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w={'100%'} py={'2rem'} px={'.5rem'} boxShadow={'dark-lg'} display={{ lg: 'none' }} bg={'white'}>
      <HStack w={'100%'} justify={'center'} position={'relative'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ lg: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          bg={'transparent'}
          _hover={'transparent'}
          _active={'transparent'}
          position={'absolute'}
          left={0}
        />

        <Text fontSize={'20px'} fontWeight={'black'}>
          白頭翁不吃小米
        </Text>

        <Box position={'absolute'} right={0} transform={'scale(0.5) translateX(45%)'} transformOrigin="center">
          <Logo />
        </Box>

      </HStack>

      {isOpen
        ? (
            <NavLinks />
          )
        : null}

    </Box>
  )
}

export default Header
