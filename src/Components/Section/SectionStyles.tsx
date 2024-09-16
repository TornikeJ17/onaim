import styled from "styled-components";

export const Container = styled.div<{ breakpoint: number }>`
    display: grid;
    grid-template-columns: ${({ breakpoint }) =>
        breakpoint === 0 ? "1fr" : "1fr 300px"};
    grid-template-rows: auto auto 1fr;
    grid-gap: 20px;
    padding: 20px;
    background-color: #00141e;
    color: white;
`;
