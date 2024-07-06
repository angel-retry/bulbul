import { Box, Heading, HStack, Text } from '@chakra-ui/react'

const CharacteristicsIntro = ({ intro }) => {
  return (
    <HStack align={'flex-start'} w={'100%'} spacing={{ base: '1rem', sm: '.2rem', md: '.5rem' }} >
      <Box position={'relative'} >
        <Heading justifySelf={'center'} w={'45px'}>
          {intro.title}
        </Heading>
        <Box w={'25px'} h={'25px'} border={'8px solid'} borderColor={'#AA6666'} rounded={'50%'} opacity={'60%'} position={'absolute'} right={0} bottom={'-10px'}></Box>
      </Box>
      <Text w={'auto'} maxW={{ base: '100%', md: '225px' }}>
        {intro.intro}
      </Text>
    </HStack>
  )
}

export default CharacteristicsIntro
