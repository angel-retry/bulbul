import { Box, HStack } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <HStack w={{ lg: '100wh' }} h={{ lg: '100vh' }}>
      <Box w={{ base: '100%', lg: '20%' }} h={{ lg: '100%' }}>
        {/* sm、md */}
        <Header />
        {/* lg以上 */}
        <Navbar />
      </Box>

    </HStack>
  )
}

export default App
