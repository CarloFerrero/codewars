import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Box, Flex, Text } from "@chakra-ui/react";
import "./style.css";
import github from "prism-react-renderer/themes/github";

const exampleCode = `const romanConverter = (roman) => {
  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = ROMAN[roman[i]];
    const next = ROMAN[roman[i + 1]];
    if (current < next) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }
  return result;
};`;

const RomanConverterFunction = () => {
  return (
    <Box border="2px solid" borderColor="rgba(217,217,227)" borderRadius="20px">
      <Flex
        justifyContent="space-between"
        backgroundColor="rgba(217,217,227)"
        padding="10px 20px"
        color="#000"
        borderRadius="16px 16px 0px 0px"
      >
        <Text>Javascript</Text>
        <Text>Copy</Text>
      </Flex>
      <Highlight
        {...defaultProps}
        code={exampleCode}
        language="jsx"
        theme={github}
      >
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

export default RomanConverterFunction;
