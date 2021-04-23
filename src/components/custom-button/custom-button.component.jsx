import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSign, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : null} ${
      isGoogleSign ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
