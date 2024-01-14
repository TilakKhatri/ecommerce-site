import React, { Fragment } from "react";

const PrivateLayout = (props: any) => {
  const { children, ...other } = props;

  return <Fragment {...other}>{children}</Fragment>;
};

export default PrivateLayout;
