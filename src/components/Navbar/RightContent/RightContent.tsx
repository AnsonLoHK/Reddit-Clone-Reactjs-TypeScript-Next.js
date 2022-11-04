import { Flex } from "@chakra-ui/react";
import * as React from "react";
import AuthButtons from "./AuthButtons";

type RightContentProps = {};

const RightContent: React.FunctionComponent<RightContentProps> = (props) => {
  return (
    <Flex flexGrow={1}>
      <AuthButtons />
    </Flex>
  );
};

export default RightContent;
