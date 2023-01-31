import {
  Box,
  HStack,
  IconButton,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { FiMoon, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section" backgroundColor="#fff">
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Box
          py={{
            base: "4",
            lg: "5",
          }}
          px={{
            base: "4",
            lg: "5",
          }}
        >
          <HStack spacing="10" justify="space-between">
            <Box>
              <Text fontWeight="bold" fontSize="26px">
                <Link to="/">CarloQuelloAlto_</Link>
              </Text>
            </Box>
            {isDesktop ? (
              <HStack spacing="3">
                <IconButton
                  variant="ghost"
                  icon={<FiMoon fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              </HStack>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
