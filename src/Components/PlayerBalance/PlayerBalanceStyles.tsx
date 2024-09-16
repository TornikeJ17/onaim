import styled from "styled-components";
interface PlayerProps {
    breakpoint: any;
}
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

export const PlayerBalanceContainer = styled.div<PlayerProps>`
    width: ${({ breakpoint }) =>
        breakpoint === 0
            ? "68%"
            : breakpoint === 1
            ? ""
            : breakpoint === 2
            ? "2/2"
            : "2/2"};
    background-color: #01222f;
    padding: 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: ${({ breakpoint }) =>
        breakpoint === 0
            ? "1/2"
            : breakpoint === 1
            ? "1/2"
            : breakpoint === 2
            ? "2/2"
            : "2/2"};
    order: ${({ breakpoint }) =>
        breakpoint === 0
            ? "-1"
            : breakpoint === 1
            ? "-1"
            : breakpoint === 2
            ? "0"
            : "0"};
    height: 298px;
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
    background: #00141e;
    height: 172px;
    border-radius: 12px;
    padding: 16px;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        padding: 12px 8px 12px 8px;
        background-color: #283740;
        border-radius: 8px;
        box-shadow: 0px 4px 24px 0px #00000040;
        span {
            display: flex;
            align-items: center;
            gap: 5px;
        }
    }
    p {
        margin: 0;
    }
`;

export const BalanceButton = styled.button<{ button: number }>`
    width: 89px;
    height: 40px;
    padding: 10px 16px 10px 16px;
    background-color: ${({ button }) =>
        button === 2 ? "#189541" : "transparent"};
    color: white;
    border: ${({ button }) => (button === 1 ? "1px solid #189541" : "none")};
    border-radius: 48px;
    cursor: pointer;
    &:hover {
        background-color: #107a31;
    }
`;

export const SeeMore = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #189541;
    text-align: center;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
