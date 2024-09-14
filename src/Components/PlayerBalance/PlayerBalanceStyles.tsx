import styled from "styled-components";

export const PlayButton = styled.button`
    padding: 10px 20px;
    background-color: #189541;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #107a31;
    }
`;

export const PlayerBalanceContainer = styled.div`
    background-color: #01222f;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 0;
    h2 {
        color: #189541;
        font-family: Satoshi;
        font-size: 16px;
        font-weight: 700;
        line-height: 21.6px;
        text-align: center;
    }
`;

export const BalanceInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p {
        margin: 0;
    }
`;

export const BalanceButton = styled.button`
    padding: 5px 10px;
    background-color: #189541;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #107a31;
    }
`;

export const SeeMore = styled.p`
    color: #00a8ff;
    text-align: center;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
