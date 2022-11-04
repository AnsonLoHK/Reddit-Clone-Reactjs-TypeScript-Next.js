//card.theme.js
import { ComponentStyleConfig } from "@chakra-ui/theme";

// TODO: 單獨元件 Style 設定 (為了複用)
const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    color: "brand.100",
  },
};

export default Button;
