import { Flex, Image } from "@chakra-ui/react";
import * as React from "react";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

interface IAppProps {}

const Navbar: React.FunctionComponent = (props) => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image
          height="30px"
          src="/images/redditFace.svg"
          alt="redditFace.svg"
        />
        <Image
          height="46px"
          src="/images/redditText.svg"
          alt="redditText.svg"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      <RightContent />
    </Flex>
  );
};

export default Navbar;
