// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Image, Flex, VStack, Text } from "@chakra-ui/react";
import boarding1 from "../assets/OnBoardingImg.png";
import boarding from "../assets/OnBoardingImg1.png";
import nafdac from "../assets/nafdac.png";
import approve from "../assets/Approved.png";
import tick from "../assets/tick.png";
import picture from "../assets/pictures.png";

const ImageSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    // accessibility: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    appendDots: (dots) => (
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        display="flex"
        justifyContent="start"
        paddingLeft={[48, 80, 112]}
        marginBottom="2rem" // Adjust as needed
      >
        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>{dots}</ul>
      </Box>
    ),
    customPaging: () => (
      <Box
        width="1.5rem"
        height="0.2rem"
        backgroundColor="gray.400"
        borderRadius="full"
        marginLeft="0.5rem" // Adjust as needed
      />
    ),
  };

  return (
    <Box>
      <Slider {...settings} style={{ overflow: "hidden" }}>
        <Box>
          <Image width={["100%"]} src={boarding1} alt="onBoarding Image" />
        </Box>
        <Box>
          <Image width={["100%"]} src={boarding} alt="onBoarding Image" />
        </Box>
      </Slider>
      <Flex m='30px auto auto auto' justifyContent='space-around'>
        <VStack>
          <Text
            fontWeight="bold"
            fontSize={{ base: "16px", md: "24px", lg: "30px" }}
            w={[180, 310]}
          >
            Quality Healthcare and Medicines At Your Doorsteps For Your Kids
          </Text>
          <Text fontSize={{ base: "16px", md: "24px", lg: "30px" }} w={[180, 310]}>
            This page was medically revied and vetted by highly trained Doctors,
            Pharmacists, and relevant Healthcare bodies
          </Text>
          <Flex align='center' justify='center'>
            <Image src={nafdac} alt="Nafdac Image" />
            <Box position="relative">
              <Image src={approve} alt="approval Image" />
              <Box position="absolute" top='-16px' left='18px'>
                <Image src={tick} alt="Check Image" />
              </Box>
            </Box>
          </Flex>
        </VStack>
         <Flex wrap=''>
        <Image
          src={picture}
          w={[300, 600, 900]}
          height={{
            base: "100%", // 0-48em
            md: "50%", // 48em-80em,
            xl: "27%", // 80em+
          }}
          alt="approval Image"
        />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageSlider;
