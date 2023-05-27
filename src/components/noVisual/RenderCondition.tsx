import React, { Fragment } from 'react';

export const RenderCondition = ({ children, condition }: any) => {
  if (!condition) return <Fragment></Fragment>;
  return children;
};
