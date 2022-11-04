import * as React from "react";
import {
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

type SearchInputProps = {};

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  return (
    <Flex>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<PhoneIcon color="gray.300" />}
        />
        <Input type="tel" placeholder="Phone number" />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
