import * as React from "react";
import Navbar from "../Navbar/Navbar";

// Object type literal
type IAppProps = {
  a: boolean;
  b: number;
  c: string;
};

// tsrsfc
const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
