//card.theme.js
import { ComponentStyleConfig } from "@chakra-ui/theme";

// TODO: 單獨元件 Style 設定 (為了複用)
const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    color: "brand.100",
  },
  variants: {
    solid: () => ({
      color: "white",
      bg: "blue.500",
      _hover: {
        bg: "blue.400",
      },
    }),
    outline: {
      color: "blue.500",
      border: "1px solid",
      borderColor: "blue.500",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};

export default Button;
