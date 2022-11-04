import { Button } from "@chakra-ui/react";
import * as React from "react";

type AuthButtonsProps = {};

const AuthButtons: React.FunctionComponent<AuthButtonsProps> = (props) => {
  return (
    <>
      <Button variant="outline">Log in</Button>
      <Button>Sign up</Button>
    </>
  );
};

export default AuthButtons;
