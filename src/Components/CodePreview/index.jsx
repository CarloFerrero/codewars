import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Box, Flex, Text, IconButton } from "@chakra-ui/react";
import { BiCopy } from "react-icons/bi";
import "./style.css";
import github from "prism-react-renderer/themes/github";

const CodePreview = ({ code, language }) => {
  return (
    <Box border="2px solid" borderColor="rgba(217,217,227)" borderRadius="20px">
      <Flex
        justifyContent="space-between"
        backgroundColor="rgba(217,217,227)"
        padding="10px 20px"
        color="#000"
        borderRadius="16px 16px 0px 0px"
        alignItems="center"
      >
        <Text>{language}</Text>
        <Text>
          <IconButton
            variant="solid"
            icon={<BiCopy fontSize="1.25rem" />}
            aria-label="Open Menu"
          />
        </Text>
      </Flex>
      <Highlight {...defaultProps} code={code} language="jsx" theme={github}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Box>
  );
};

export default CodePreview;
