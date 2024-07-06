import { Box } from '@chakra-ui/react'

const Logo = ({ scale = 0.5 }) => {
  return (
    <Box p={'1.8rem'} borderRadius={'100%'} boxShadow={'1px 5px 20px #00000033'} transform={`scale(${scale})`} transformOrigin="center" bg={'white'}>
      <Box w={'50px'} h={'45px'} bg={'white'} position={'relative'}>
        <Box w={'100%'} h={'30px'} border={'2px solid #333333'} borderWidth={'10px 0 0 0'} borderRadius={'65% 35% 25% 75% / 100% 59% 41% 0%'} position={'absolute'}></Box>
        <Box w={'10px'} h={'10px'} bg={'#333333'} borderRadius={'100%'} position={'absolute'} right={'10px'} bottom={'18px'}></Box>
        <Box w={'13px'} h={'8px'} bg={'#333333'} borderRadius={'0% 100% 0% 100% / 100% 100% 0% 0%'} position={'absolute'} right={'-12px'} bottom={'23px'} rotate={'3%'} transform={'rotate(-8deg)'}></Box>
        <Box w={'100%'} h={'30px'} border={'2px solid #333333'} borderWidth={'0px 0 10px 0'} borderRadius={'0% 100% 50% 50% / 100% 25% 75% 0% '} position={'absolute'} right={'0px'} bottom={'-2px'}></Box>
      </Box>
    </Box>
  )
}

export default Logo
