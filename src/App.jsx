// import { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import ReuseableButton from './components/ReuseableButton';

function App() {
  
  return (
    <Box bg='blue.100' w='100%' p={2} color='red' display='flex' alignItems='center' justifyContent='space-evenly'>
      <Text fontWeight='bold'>
      Enjoy 10% cash back when you shop with us...... Enjoy free delivery when you shop over 30k woth of drugs
      </Text>
      <ReuseableButton>
        shop now
      </ReuseableButton>
    </Box>
  )
}

export default App
