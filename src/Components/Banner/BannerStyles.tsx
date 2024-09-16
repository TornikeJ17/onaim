import styled from "styled-components";

export const BannerContainer = styled.div<{ breakpoint: number }>`
    width: ${({ breakpoint }) =>
        breakpoint === 0 ? "68%" : breakpoint === 1 ? "" : ""};
    grid-column: 1 / 2;
    background-color: #01222f;
    padding: ${({ breakpoint }) => (breakpoint === 1 ? "10px" : "20px")};
    border-radius: 16px;
    display: flex;
    flex-flow: ${({ breakpoint }) =>
        breakpoint === 0
            ? "column-reverse"
            : breakpoint === 1
            ? "column-reverse"
            : breakpoint === 2
            ? "wrap"
            : "wrap"};
    align-items: center;
    justify-content: ${({ breakpoint }) =>
        breakpoint === 0
            ? "center"
            : breakpoint === 1
            ? "center"
            : breakpoint === 2
            ? "space-between"
            : "space-between"};
    img {
        width: 100%;
    }
    h1 {
        font-size: ${({ breakpoint }) =>
            breakpoint === 0 ? "24px" : breakpoint === 1 ? "28px" : "32px"};
        margin: 0;
    }
    p {
        font-size: ${({ breakpoint }) => (breakpoint === 0 ? "12px" : "14px")};
        width: ${({ breakpoint }) => (breakpoint === 0 ? "100%" : "311px")};
        margin: 10px 0;
    }
    .block {
        display: flex;
        flex-flow: column;
        gap: 20px;
        padding: 20px 0px 0px 0px;
        border-radius: 16px 0px 0px 0px;
        justify: space-between;
        opacity: 0px;
        h1 {
            font-family: Satoshi;
            font-size: 28px;
            font-weight: 900;
            line-height: 37.8px;
            text-align: left;
        }
        p {
            width: 311px;
            aspect-ratio: 8/1;
            font-family: Satoshi;
            font-size: 14px;
            font-weight: 500;
            line-height: 18.9px;
            text-align: left;
            color: #ffffff80;
        }
    }
`;
