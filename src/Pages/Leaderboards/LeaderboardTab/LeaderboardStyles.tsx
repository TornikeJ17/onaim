import styled from "styled-components";
interface LeaderboardTabProps {
    leaderboardTabActive: boolean;
    breakpoint: number;
}
export const LeaderboardContainer = styled.div<{ breakpoint: number }>`
    display: flex;
    align-items: center;
    width: ${({ breakpoint }) => (breakpoint === 0 ? "317px" : "532px")};
    height: ${({ breakpoint }) => (breakpoint === 0 ? "38px" : "54px")};
    padding: 6px;
    gap: 8px;
    border-radius: ${({ breakpoint }) => (breakpoint === 0 ? "8px" : "50px")};
    background-color: #00141e;
    margin: 0 auto;
`;
export const LeaderboardItem = styled.div<LeaderboardTabProps>`
    align-content: center;
    text-align: center;
    padding: ${({ breakpoint }) =>
        breakpoint === 0 ? "10px 8px 10px 8px" : "10px 16px 10px 16px"};
    width: ${({ breakpoint }) => (breakpoint === 0 ? "96.33px" : "168px")};
    height: ${({ breakpoint }) => (breakpoint === 0 ? "18px" : "35px")};
    gap: 8px;
    border-radius: ${({ breakpoint }) => (breakpoint === 0 ? "4px" : "400px")};
    opacity: 0px;
    background-color: ${({ leaderboardTabActive }) =>
        leaderboardTabActive ? " #062733" : "transparent"};
    cursor: pointer;
`;
