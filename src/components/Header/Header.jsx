import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Text, HStack, IconButton, Image, useDisclosure } from '@chakra-ui/react'
import NavLinks from '../Navbar/NavLinks'

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w={'100%'} py={'2rem'} px={'.5rem'} boxShadow={'dark-lg'} display={{ lg: 'none' }}>
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

        <Box position={'absolute'} right={0}>
          <Image src="/public/Logo.png" />
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
