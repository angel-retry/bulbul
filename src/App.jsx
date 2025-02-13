import { Box, Flex } from '@chakra-ui/react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Characteristics from './components/Characteristics/Characteristics'

const App = () => {
  return (
    <Flex direction={{ base: 'column', lg: 'row' }} w={{ lg: '100%' }} h={{ lg: '100vh' }}>
      {/* Header 與 Navbar */}
      <Box w={{ base: '100%', lg: '20%', xl: '25%' }} h={{ lg: '100%' }} position={'fixed'} zIndex={999}>
        {/* sm、md */}
        <Header />
        {/* lg以上 */}
        <Navbar />
      </Box>

      {/* Main Content */}
      <Box ml={{ base: 0, lg: '20%', xl: '25%' }} w={{ base: '100%', lg: '80%', xl: '75%' }} h={'100%'}>
        <Characteristics />
      </Box>
    </Flex>
  )
}

export default App
