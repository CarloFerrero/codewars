import React from "react";
import {
  HStack,
  Tag,
  Container,
  Select,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import { tags_ } from "../../utils/tags";
import SearcBar from "../SearchBar";

const Filter = (props) => {
  let tagKeys = Object.keys(tags_);
  const callBackFunc = (option) => {
    console.log(option);
  };

  function handleChange() {
    console.log("change");
  }

  return (
    <div>
      <Container maxW="1200px">
        <HStack spacing="10px" mt="20px" mb="20px">
          <Box alignItems="center" width="100%">
            <SearcBar
              handleChange={handleChange}
              placeholder="Search anything"
              color="#000"
            />
          </Box>

          <Box alignItems="center" width="100%">
            <Select onChange={(e) => callBackFunc(e.target.value)}>
              <option>Newest</option>
              <option>Oldest</option>
            </Select>
          </Box>

          <Box alignItems="center" width="100%">
            <Select onChange={(e) => callBackFunc(e.target.value)}>
              <option>Tags</option>
              <option>Javascript</option>
              <option>Algoritmh</option>
            </Select>
          </Box>
          <Button variant="outline" onClick={() => callBackFunc("Refresh")}>
            <RepeatIcon />
          </Button>
        </HStack>
      </Container>
    </div>
  );
};

export default Filter;
