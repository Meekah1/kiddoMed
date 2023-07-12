//
import { Box, Flex, Text, Center } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <Flex
    mt={['20px', '30px']}
      color="#ffffff"
      gap={8}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        bg="#4682B4"
        w={[150, 250, 380]}
        h={{
          base: "300px",
          md: "250px",
          lg: "380px",
        }}
        borderRadius="0 50px 0 50px"
      >
        <Center>
          <Text textAlign="center" fontSize="3xl" as="b">
            VISION
          </Text>
        </Center>
        <Center>
          <Text w={[300]} fontSize={{ base: "10px", md: "18px", lg: "22px" }}>
            Creating an environment for children’s development and wellbeing,
            making motherhood less rigorous, by managing children’s nutrition
            and allergens, access to quality authentic drugs, and medical aid.
          </Text>
        </Center>
      </Box>
      <Box
        bg="#4682B4"
        w={[150, 250, 380]}
        h={{
          base: "150px",
          md: "250px",
          lg: "380px",
        }}
        borderRadius="50px"
      > <Center>
        <Text textAlign="center" fontSize="3xl" as="b">
          MISSION
        </Text>
        </Center>
        <Center>
        <Text align='center' w={[250]} fontSize={{ base: "10px", md: "18px", lg: "22px" }}>
          Offer professionally guide diet programs , drugs, and medical aid for
          infants and children throughout their different stages of growth and
          development.
        </Text>
        </Center>
      </Box>
      <Box
        bg="#4682B4"
        w={[150, 250, 380]}
        h={{
          base: "150px",
          md: "250px",
          lg: "380px",
        }}
        borderRadius="50px 0 50px 0"
      >
        <Center>
        <Text textAlign="center" fontSize="3xl" as="b">
          OUR STRATEGY
        </Text>
        </Center>
        <Center>
        <Text align='right' w={[250]} fontSize={{ base: "10px", md: "18px", lg: "22px" }}>
          KiddoMed strategy is to connect mothers, guardians with professionals:
          Pediatrics, Pharmacist, Authentic drugs using KiddoMed platform.
        </Text>
        </Center>
      </Box>
    </Flex>
  );
};

export default Section2;
