import styled from "styled-components";
interface GamesTabStyleProps {
    gameTabMenuActive: boolean;
    breakpoint: number;
}
export const GamesTabContainer = styled.div<{ breakpoint: number }>`
    display: grid;
    grid-template-columns: repeat(4, 0fr);
    gap: 10px;
    overflow: ${({ breakpoint }) => (breakpoint === 0 ? "hidden" : "")};
    overflow-x: ${({ breakpoint }) => (breakpoint === 0 ? "scroll" : "")};
    &::-webkit-scrollbar {
        display: none;
    }
`;
export const GamesTabBlock = styled.div<GamesTabStyleProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 118.75px;
    height: 48px;
    padding: 12px 16px 12px 16px;
    gap: 4px;
    border-radius: 40px;
    border: 40px;
    opacity: 0px;
    border-bottom: 1px solid #189541;
    background-color: ${({ gameTabMenuActive }) =>
        gameTabMenuActive ? "#189541" : "transparent"};
    &:hover {
        background-color: #189541;
        cursor: pointer;
    }
`;
