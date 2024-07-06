import { Button, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const links = ['白頭翁的特性', '白頭翁的故事', '白頭翁的美照', '白頭翁的危機']

const NavLinks = () => {
  const [isActive, setIsActive] = useState('白頭翁的特性')
  return (
    <VStack spacing={'1rem'} pt={'2rem'}>
      {
        links.map(link => (
          <NavLink key={link} link={link} isActive={isActive} setIsActive={setIsActive} />
        ))
      }
    </VStack>
  )
}

const NavLink = ({ link, isActive, setIsActive }) => {
  return (
    <Button
      _hover={{ color: '#AA6666', textDecoration: 'underline', textDecorationColor: '#AA6666' }}
      _active={{ color: '#AA6666', textDecoration: 'underline', textDecorationColor: '#AA6666' }}
      fontWeight={'bold'}
      fontSize={'18px'}
      isActive={link === isActive}
      bg={'transparent'}
      onClick={() => setIsActive(link)}
     >{link}</Button>
  )
}

export default NavLinks
