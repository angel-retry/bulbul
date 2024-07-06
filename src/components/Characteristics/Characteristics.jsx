import { Box, Flex, Image, VStack, Text } from '@chakra-ui/react'
import CharacteristicsIntro from './CharacteristicsIntro'

const intros = [
  {
    title: '外觀',
    intro: '白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。'
  },
  {
    title: '棲地',
    intro: '白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。'
  },
  {
    title: '食性',
    intro: '以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。'
  }
]

const Characteristics = () => {
  return (
    <VStack w={'100%'} h={'100%'} spacing={'0'} mt={{ base: '95px', lg: 0 }}>
      {/* Banner */}
      <Box w={'100%'} height={{ base: '311px', md: '500px', lg: '1000px' }} overflow="hidden" position={'relative'}>
        <Flex
          w={{ base: '300px', sm: '350px', md: '100%' }}
          position={'absolute'}
          bottom={{ base: '20px', sm: '40px', md: 0 }}
          right={'0'}
          direction={'column'}
          align={'flex-end'}
          p={{ base: '1.2rem', lg: '1.5rem' }}
        >
          <Flex
            direction={{ base: 'column', md: 'row' }}
            w={{ base: '50%', sm: '100%' }}
            fontSize={{ base: '30px', md: '48px' }}
            fontWeight={'700'}
            color={'white'}
            textAlign={'end'}
            justify={'flex-end'}
          >
            <Text>白頭翁</Text>
            <Text>(Chinese bulbul)</Text>
          </Flex>
          <Text fontSize={{ base: '14px', md: '18px' }} fontWeight={'500'} color={'white'} >又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。</Text>
        </Flex>
        <Image src={'/public/Banner.png'} w={'100%'} h={'100%'} objectFit="cover" objectPosition={{ base: '20% 20%', lg: 'center' }} brightness={'10%'} />
      </Box>

      {/* Characteristics Introduction */}
      <Box w={'100%'} h={'100%' } bg={'#DCCCBC'}>
        <Flex direction={{ base: 'column', md: 'row' }} p={{ base: '3rem 1.5rem 5rem 1.5rem', sm: '3rem 2rem 5rem 2rem' }} align={'flex-start'} gap={{ base: '2rem', sm: '2rem', md: '1rem' }}>
          {
            intros.map((intro, i) => (
              <CharacteristicsIntro key={i + 1} intro={intro} />
            ))
          }
        </Flex>
      </Box>

    </VStack>
  )
}

export default Characteristics
