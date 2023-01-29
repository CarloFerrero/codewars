import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";
const Card = ({ title, description }) => {
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
    >
      <Heading as="h3" fontSize="25px" fontWeight="regular">
        {title}
      </Heading>
      <Text as="p" fontSize="16px" maxW="500px" mt="10px" color="#7c7c7c">
        {description}
      </Text>
    </Box>
  );
};

export default Card;
