// import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Image, Flex, VStack, Text } from "@chakra-ui/react";
import boarding1 from "../assets/OnBoardingImg.png";
import boarding from "../assets/OnBoardingImg1.png";
import boarding2 from "../assets/OnBoardingImg2.png";
import nafdac from "../assets/nafdac.png";
import approve from "../assets/Approved.png";
import tick from "../assets/tick.png";
import nutrition from "../assets/Nutrition.png";
import consultation from "../assets/consultation.png";
import help from "../assets/help.png";
import pharmacy from "../assets/pharmacy.png";

const ImageSlider = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    dots: true,
    // accessibility: true,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    slidesToShow: 1,
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
        <Box>
          <Image width={["100%"]} src={boarding2} alt="onBoarding Image" />
        </Box>
      </Slider>
      <Flex  mt={['20px', '30px']} align='center' justifyContent='space-around'>
        <VStack w={[300, 400, 600]} h={[200, 300, 500]}>
          <Text
            fontWeight="bold"
            fontSize={{ base: "16px", md: "24px", lg: "28px" }}
            w={[180, 310]}
          >
            Quality Healthcare and Medicines At Your Doorsteps For Your Kids
          </Text>
          <Text fontSize={{ base: "16px", md: "24px", lg: "28px" }} w={[180, 310]}>
            This page was medically revied and vetted by highly trained Doctors,
            Pharmacists, and relevant Healthcare bodies
          </Text>
          <Flex align='center' justify='start' w={[200, 300]} >
            <Image src={nafdac} alt="Nafdac Image" w={[40, 60, 100]} />
            <Box position="relative">
              <Image src={approve} alt="approval Image" />
              <Box position="absolute" top='-16px' left='18px'>
                <Image src={tick} alt="Check Image" />
              </Box>
            </Box>
          </Flex>
        </VStack>
         <Flex w={[200, 400, 900]} h={[200, 300, 500]}  wrap='wrap' gap={8}>
        <Image
          src={nutrition}
          w={[90, 130, 350]}
          alt="approval Image"
        />
        <Image
          src={pharmacy}
          w={[90, 130, 350]}
          alt="approval Image"
        />
        <Image
          src={help}
          w={[90, 130, 350]}
          alt="approval Image"
        />
        <Image
          src={consultation}
          w={[90, 130, 350]}
          alt="approval Image"
        />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageSlider;
