import React, { useState } from "react";
import { Button, Container, Heading, Input } from "@chakra-ui/react";
import { PROJECTS } from "../../PROJECTS";
import { useLocation } from "react-router";
import { romanConverter } from "../../Script/roman_converter";

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
    <Container maxW="1200px" mt="40px">
      <Heading>{currentProject.title}</Heading>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Basic usage"
          type="text"
          onChange={(e) => setVal(e.target.value)}
        />
        <Button type="submit">Validate</Button>
      </form>
    </Container>
  );
};

export default RomanConverter;
