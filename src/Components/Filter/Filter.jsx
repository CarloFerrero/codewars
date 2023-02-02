import React from "react";
import { HStack, Container, Select, Box, Button } from "@chakra-ui/react";
import { RepeatIcon } from "@chakra-ui/icons";
import SearcBar from "../SearchBar";

const Filter = ({ setSearch, setTag }) => {
  const callBackFunc = (option) => {
    setTag(option);
  };

  function handleChange(e) {
    setSearch(e.target.value);
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
              <option>js</option>
              <option>alg</option>
              <option>react</option>
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
