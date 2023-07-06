// import React from 'react'
import { Button } from '@chakra-ui/react'


// eslint-disable-next-line react/prop-types
const ReuseableButton = ({ children }) => {

  return (
    <Button bg='#0344EB' color='#ffffff' fontSize={['sm', 'md']} h='30px' borderRadius='20px' _hover={{
      background: "blue.400",
      color: "black.500",
    }} >
      {children}
    </Button>
  )
}

export default ReuseableButton;
