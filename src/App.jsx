// import { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import ReuseableButton from './components/ReuseableButton';
import WithSubnavigation from './components/NavBar';
import ImageSlider from './components/ImageSlider';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  
  return (
    <>
    <Box bg='blue.100'  p={2} color='red' display='flex' alignItems='center' justifyContent='space-evenly' flexWrap={['wrap', 'nowrap']}>
      <Text  textAlign={['center', 'left']} fontSize={['sm', 'md', 'lg']}>
      Enjoy 10% cash back when you shop with us...... Enjoy free delivery when you shop over 30k woth of drugs
      </Text>
      <ReuseableButton>
        shop now
      </ReuseableButton>
    </Box>
    <WithSubnavigation />
    <ImageSlider />
    <Section1 />
     <Section2 />
    </>
  )
}

export default App
