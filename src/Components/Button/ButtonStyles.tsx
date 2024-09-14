import styled from "styled-components";

interface ButtonBlockProps {
    width?: string;
    height?: string;
    backgroundColor?: string;
    color?: string;
    hover?: string;
}
export const ButtonBlock = styled.div<ButtonBlockProps>`
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "40px"};
    background-color: ${({ backgroundColor }) => backgroundColor || "#189541"};
    color: ${({ color }) => color || "#fff"};
    gap: 8px;
    border-radius: 48px;
    text-align: center;
    align-content: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    &:hover {
        background-color: ${({ hover }) => hover};
    }
`;
