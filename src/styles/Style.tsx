import styled from "styled-components";

export const AppContainer = styled.div<{ breakpoint: number }>`
    display: grid;
    grid-template-columns: ${({ breakpoint }) =>
        breakpoint === 0 ? "1fr" : breakpoint === 1 ? "1fr" : "79px 1fr"};
    grid-template-rows: auto 1fr;
    height: 100vh;
    overflow: hidden;

    .block2 {
        overflow-y: scroll;
    }
    .block2::-webkit-scrollbar {
        display: none;
    }
`;
