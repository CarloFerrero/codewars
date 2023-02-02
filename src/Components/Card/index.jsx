import React from "react";
import { Box, Text, Heading, Tag, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { tags_ } from "../../utils/tags";

const THEME = {
  base: {},
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

const Card = ({ title, description, theme, link, tags }) => {
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
      w="100%"
      borderRadius="16px"
      height="300px"
      display="flex"
      alignItems="flex-start"
      justifyContent="end"
      flexDirection="column"
      border="1px solid"
      borderColor="var(--chakra-colors-chakra-border-color)"
    >
      <Heading as="h3" fontSize="25px" fontWeight="regular">
        {title}
      </Heading>
      <Flex gap="5px">
        {tags.map((tag) => {
          return (
            <Tag size="sm" mt="10px" colorScheme={tags_[tag].color}>
              {tags_[tag].name}
            </Tag>
          );
        })}
      </Flex>
      <Text as="p" fontSize="16px" maxW="500px" mt="10px" opacity={0.8}>
        {description.substring(0, 100) + `...`}
      </Text>
      <Link to={link}>
        <Button
          mt="10px"
          alignItems="center"
          rightIcon={<BsArrowRightShort size={20} />}
          variant="link"
        >
          Learn more
        </Button>
      </Link>
    </Box>
  );
};

export default Card;
