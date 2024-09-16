import styled from "styled-components";

interface TabMenuProps {
    tabMenuActive: boolean;
}
export const TabMenuContainer = styled.div<{ breakpoint: number }>`
    width: ${({ breakpoint }) => (breakpoint === 0 ? "77%" : "100%")};
    grid-column: 1 / 2;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 68px;
        padding: 0;
        background-color: #01222f;
        border-radius: 16px;
    }
    ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        gap: 20px;
        padding-left: 20px;
        overflow: hidden;
        overflow-x: ${({ breakpoint }) => (breakpoint === 0 ? "scroll" : "")};
        &::-webkit-scrollbar {
            display: none;
        }
        a {
            text-decoration: none;
            color: #fff;
        }
    }
`;
export const LI = styled.li<TabMenuProps>`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 20px;
    cursor: pointer;
    color: ${({ tabMenuActive }) => (tabMenuActive ? "#189541" : "")};
    border-bottom: ${({ tabMenuActive }) =>
        tabMenuActive ? "2px solid #189541" : "none"};
    background: ${({ tabMenuActive }) =>
        tabMenuActive
            ? `linear-gradient(
        0deg,
        rgba(250, 251, 255, 0.3) 0%,
        rgba(6, 39, 51, 0.3) 100%
    )`
            : "transparent"};

    &:hover {
        background: linear-gradient(
            0deg,
            rgba(250, 251, 255, 0.3) 0%,
            rgba(6, 39, 51, 0.3) 100%
        );
        color: #189541;
        border-bottom: 2px solid #189541;
        svg path {
            fill: #189541;
        }
    }
    svg path {
        fill: ${({ tabMenuActive }) => (tabMenuActive ? "#189541" : "")};
    }
`;
export const GroupMenu = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 20px;
`;
