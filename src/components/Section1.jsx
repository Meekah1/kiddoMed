//
import { Box, Image, Flex, Center } from "@chakra-ui/react";
import malnutrition from "../assets/malnutrition.png";
import fakeDrugs from "../assets/fakeDrugs.png";
import pediatrician from "../assets/pediatrician.png";

const Section1 = () => {
  return (
    <Center>
      <Box mt={['20px', '30px']}>
        <Flex
          gap={8}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Image src={malnutrition} alt="malnutrition" maxW={["50%", "33.33%", "30%"]} h="auto" />
          <Image src={fakeDrugs} alt="malnutrition" maxW={["50%", "33.33%", "30%"]} h="auto" />
          <Image src={pediatrician} alt="malnutrition" maxW={["50%", "33.33%", "30%"]} h="auto" />
        </Flex>
        
      </Box>
    </Center>
  );
};

export default Section1;
