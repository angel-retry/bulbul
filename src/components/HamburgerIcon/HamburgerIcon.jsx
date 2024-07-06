import { Box, VStack } from '@chakra-ui/react'

const HamburgerIcon = () => {
  return (
    <VStack spacing={'4px'} align={'flex-start'} p={'.5rem'}>
      <Box border={'2px solid black'} w={'25px'} />
      <Box border={'2px solid black'} w={'18px'} />
      <Box border={'2px solid black'} w={'25px'} />
    </VStack>
  )
}

export default HamburgerIcon
