import styled from "styled-components";
interface LeaderboardTabProps {
    leaderboardTabActive: boolean;
}
export const LeaderboardContainer = styled.div`
    display: flex;
    align-items: center;
    width: 532px;
    height: 54px;
    padding: 6px;
    gap: 8px;
    border-radius: 50px;
    background-color: #00141e;
    margin: 0 auto;
`;
export const LeaderboardItem = styled.div<LeaderboardTabProps>`
    align-content: center;
    text-align: center;
    padding: 10px 16px 10px 16px;
    width: 168px;
    height: 35px;
    gap: 8px;
    border-radius: 400px;
    opacity: 0px;
    background-color: ${({ leaderboardTabActive }) =>
        leaderboardTabActive ? " #062733" : "transparent"};
    cursor: pointer;
`;
