import { Box, Container, Grid, GridItem } from "@chakra-ui/layout";
import React from "react";
import Card from "../../Components/Card";
import { PROJECTS } from "../../PROJECTS";
import Hero from "../../Components/Hero";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Box>
      <Hero
        title="This is a website where i store all of my
          small project, mostly logic, and javascript challenges."
      />
      <Container maxW="1200px">
        <Link to={PROJECTS[0].path}>
          <Card
            title={PROJECTS[0].title}
            description={PROJECTS[0].description}
            theme={PROJECTS[0].theme}
          />
        </Link>
        <Grid
          gridTemplateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          }}
          gap="20px"
          mt="20px"
        >
          {PROJECTS.map((item, index) => {
            if (index === 0) return;
            else
              return (
                <GridItem>
                  <Link to={item.path}>
                    <Card
                      title={item.title}
                      description={item.description}
                      theme={item.theme}
                    />
                  </Link>
                </GridItem>
              );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Homepage;
