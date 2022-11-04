import * as React from "react";
import { Flex, Image } from "@chakra-ui/react";

interface IAppProps {}

const Navbar: React.FunctionComponent = (props) => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex>
        <Image
          height="30px"
          src="/images/redditFace.svg"
          alt="redditFace.svg"
        />
        <Image
          height="30px"
          src="/images/redditText.svg"
          alt="redditText.svg"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
