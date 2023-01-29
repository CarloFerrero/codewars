import React, { useState } from "react";
import {
  Button,
  Container,
  Heading,
  Input,
  Flex,
  Text,
  Box,
} from "@chakra-ui/react";

import { PROJECTS } from "../../PROJECTS";
import { useLocation } from "react-router";
import { romanConverter } from "../../Script/roman_converter";
import RomanConverterFunction from "./RomanConverterFunction";

const RomanConverter = () => {
  const [val, setVal] = useState("");
  let location = useLocation();
  let currentProject = PROJECTS.find(
    (project) => project.path === location.pathname
  );

  const handleSubmit = (e) => {
    let res = romanConverter(val);
    alert(res);
    e.preventDefault();
  };

  return (
    <Container maxW="1200px" mt="30px">
      <Box maxW="650px">
        <Heading fontWeight="light">{currentProject.title}</Heading>
        <Text mt="10px">{currentProject.description}</Text>
      </Box>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap="10px" mt="20px" mb="30px">
          <Input
            placeholder="Inser a valid roman number ex: XXI"
            type="text"
            onChange={(e) => setVal(e.target.value)}
          />
          <Button type="submit" backgroundColor="black" color="white">
            Convert
          </Button>
        </Flex>
        <RomanConverterFunction />
      </form>
    </Container>
  );
};

export default RomanConverter;
