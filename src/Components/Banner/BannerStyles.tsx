import styled from "styled-components";

export const BannerContainer = styled.div`
    grid-column: 1 / 2;
    background-color: #01222f;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: space-between;
    h1 {
        margin: 0;
    }
    p {
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
