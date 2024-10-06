import React from "react";
import PropTypes from "prop-types";

export default function SectionHeading({ children }) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}

SectionHeading.propTypes = {
  children: PropTypes.node.isRequired,
};