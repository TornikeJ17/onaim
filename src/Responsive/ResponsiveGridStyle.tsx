import styled from "styled-components";

export const GridContainer = styled.div<{ columns: string }>`
    display: grid;
    grid-template-columns: ${({ columns }) => columns};
    grid-gap: 16px; /* Add some spacing between items */
    width: 100%;
    height: 100%;
`;
