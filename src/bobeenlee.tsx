import React from "react";
import { Box, Text } from "ink";

export const BoBeenLee = () => {
  return (
    <Box margin={1} padding={2} flexDirection={"column"}>
      <Box marginBottom={1} alignItems={"center"}>
        <Text color={"cyan"}>Hello, </Text>
        <Text color={"cyanBright"}>I'm </Text>
        <Text bold={true} color={"white"} backgroundColor={"blue"}>
          {" "}
          BoBeenLee{" "}
        </Text>
      </Box>
      <Box marginBottom={1} flexDirection={"column"}>
        <Text color={"grey"}>Front-End Engineer</Text>
        <Text color={"grey"}>
          Thinking about React, Typescript and Misc development.
        </Text>
      </Box>
      <Box flexDirection="column" marginBottom={1}>
        <Text>
          <Text backgroundColor={"whiteBright"} color={"black"} underline={false}>
          {"  "}GitHub{" "}
          </Text>
          <Text underline={true}> https://github.com/BoBeenLee</Text>
        </Text>
        <Text>
          <Text backgroundColor={"whiteBright"} color={"black"} underline={false}>
            Homepage{" "}
          </Text>
          <Text underline={true}> https://bbl-nx.vercel.app</Text>
        </Text>
      </Box>
    </Box>
  );
};
