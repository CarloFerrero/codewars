import {
  Box,
  HStack,
  IconButton,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { FiScissors, FiMoon, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Box as="section">
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
                CarloQuelloAlto_
              </Text>
            </Box>
            {isDesktop ? (
              <HStack spacing="3">
                <IconButton
                  variant="solid"
                  icon={<FiMoon fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
                <IconButton
                  variant="solid"
                  icon={<FiScissors fontSize="1.25rem" />}
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
