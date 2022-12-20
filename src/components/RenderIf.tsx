import React from "react";
// import PropTypes from "prop-types";

interface RenderIfProps {
  children: React.ReactNode;
  condition: boolean;
}

function RenderIf({ condition, children }: RenderIfProps) {
  if (!condition) {
    return null;
  }

  // @ts-ignore
  return <div className="w-full h-full">{children}</div>;
}

// RenderIf.propTypes = {
//   condition: PropTypes.bool.isRequired,
//   children: PropTypes?.any,
// };

export default RenderIf;
