import styled from "styled-components";

export const MobileNavContainer = styled.div<{ breakpoint: number }>`
    display: flex;
    justify-content: space-between;
    width: 95%;
    height: 36px;
    padding: 10px;
    background-color: #001e28;
    align-items: center;
    span {
        display: flex;
    }
`;
