import React from "react";
import styled from "styled-components";
import TypographyStyle from "./components.module.css";
import classNames from "classnames";

const TitleDefault = styled.div`
  font-weight: 500;
  color: #000;
`;

const Typography = ({lvl = 1, weight, className, children, ...props}) => {
  //  className = `${className}  Typography__${lvl ?? 'default'}`;
  className = classNames(
    className,
    TypographyStyle["Typography__" + (lvl ?? "default")]
  );

  switch (lvl) {
    case 1:
      return (
        <TitleDefault
          className={classNames(TypographyStyle["font-" + (weight ?? 400)])}
        >
          <h1 className={className} {...props}>
            {children}
          </h1>
        </TitleDefault>
      );
    case 2:
      return (
        <TitleDefault>
          <h2 className={className} {...props}>
            {children}
          </h2>
        </TitleDefault>
      );
    case 3:
      return (
        <TitleDefault>
          <h3 className={className} {...props}>
            {children}
          </h3>
        </TitleDefault>
      );
    case 4:
      return (
        <TitleDefault>
          <h4 className={className} {...props}>
            {children}
          </h4>
        </TitleDefault>
      );

    default:
      throw new TypeError(`Unknown type ${lvl}`);
  }
};

export const Paragraph = ({ className, color, children, ...props }) => {
  className = classNames(className, TypographyStyle["Text"], TypographyStyle['color-' + color ?? 'default']);

  return (
    <p className={className} {...props}>
      {" "}
      {children}{" "}
    </p>
  );
};

export default Typography;
