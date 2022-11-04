import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import * as React from "react";

type SearchInputProps = {};

const SearchInput: React.FunctionComponent<SearchInputProps> = (props) => {
  return (
    <Flex flexGrow={1}>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.500" mb={2} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10px"
          _placeholder={{ opacity: 1, color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "gray.200",
          }}
          _focusVisible={{
            outline: "none",
            border: "1px solid",
            borderColor: "gray.500",
          }}
          height="32px"
          bg="gray.50"
        />
      </InputGroup>
    </Flex>
  );
};

export default SearchInput;
