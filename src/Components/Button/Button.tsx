import React from "react";
import { ButtonBlock } from "./ButtonStyles";
import { ButtonProps } from "./ButtonInterface";

const Button: React.FC<ButtonProps> = ({
    width,
    height,
    backgroundColor,
    color,
    title,
    hover,
}) => {
    return (
        <ButtonBlock
            width={width}
            height={height}
            backgroundColor={backgroundColor}
            color={color}
            hover={hover}
        >
            {title}
        </ButtonBlock>
    );
};
export default Button;
