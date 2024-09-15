import styled from "styled-components";

export const LeaderboardsContainer = styled.div`
    width: 100%;
    border-radius: 16px;
    background-color: #062733;
    grid-column: 1 / 1;

    table {
        display: grid;
        gap: 20px;
        width: 700px;
        margin: 0 auto;
        margin-bottom: 20px;
        margin-top: 20px;
    }
    thead {
        background: linear-gradient(
            109.45deg,
            rgba(24, 149, 65, 0.3) 1.85%,
            rgba(138, 206, 160, 0.267) 92.02%
        );
        color: white;
        height: 37px;
        padding: 8px;
        border-radius: 12px;
    }
    tbody {
        display: grid;
        background: linear-gradient(
            109.45deg,
            rgba(24, 149, 65, 0.3) 1.85%,
            rgba(138, 206, 160, 0.267) 92.02%
        );
        border-radius: 12px;
        padding: 20px 20px 0px 20px;
        gap: 10px;
        position: relative;
        tr:last-child {
            background-color: #00141e;
            box-shadow: 0px -12px 22.3px 0px #062733;
            position: absolute;
            bottom: 0;
            width: 100%;
        }
    }

    th,
    td {
        padding: 10px;
        text-align: center;
    }

    tr {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        background-color: #062733;
        border-radius: 12px;
    }
`;

export const LeaderboardTitle = styled.div`
    width: 297px;
    height: 81px;
    top: -10px;
    gap: 0px;
    border-radius: 20px;
    background-color: #00141e;
    margin: auto;
    position: relative;
`;
export const LeaderboardsButton = styled.div`
    width: 257px;
    height: 55px;
    gap: 24px;
    border-radius: 12px;
    background-color: #189541;
    margin: auto;
    position: relative;
    top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
