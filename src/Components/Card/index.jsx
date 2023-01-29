import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const GRADIENT = {
  first: {
    backgroundColor: "#4158D0",
    backgroundImage:
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  },
  second: {
    backgroundColor: "#0093E9",
    backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
  third: {
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
  fourth: {
    backgroundColor: "#8EC5FC",
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
  },
};

const Card = ({ title, description, theme }) => {
  return (
    <Box
      py={{
        base: "5",
        lg: "6",
      }}
      px={{
        base: "5",
        lg: "6",
      }}
      border="1px solid"
      borderColor="#0d0d0d"
      w="100%"
      borderRadius="16px"
      height="300px"
      display="flex"
      alignItems="flex-start"
      justifyContent="end"
      flexDirection="column"
      style={GRADIENT[theme]}
    >
      <Heading as="h3" fontSize="25px" fontWeight="regular" color="#fff">
        {title}
      </Heading>
      <Text as="p" fontSize="16px" maxW="500px" mt="10px" color="#fff">
        {description}
      </Text>
    </Box>
  );
};

export default Card;
