import styled from "styled-components";

interface SidebarStylesProps {
    isActive: boolean;
}
export const Container = styled.div`
    width: 79px;
    height: 100vh;
    background-color: #011e28;
    gap: 0px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    border-right: 1px solid #072c38;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        position: relative;
        top: -20px;
        border-right: 1px solid #072c38;
        left: -1px;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        padding: 0;
        list-style: none;

        li:hover {
            color: #fff;
        }
    }
`;
export const LI = styled.li<SidebarStylesProps>`
    &::before {
        content: "";
        display: ${({ isActive }) => (isActive ? "block" : "none")};
        width: 80px;
        height: 50px;
        background: #011e28;
        position: relative;
        border-radius: 0px 0px 50px 0px;
        border-bottom: 1px solid #072c38;
        border-right: 1px solid #072c38;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    color: #fff9;
    cursor: pointer;
    background: ${({ isActive }) => (isActive ? "#00141e" : "blue")};
    &::after {
        content: "";
        display: ${({ isActive }) => (isActive ? "block" : "none")};
        border-top: 1px solid #072c38;
        border-right: 1px solid #072c38;
        background: #011e28;
        width: 80px;
        height: 50px;
        left: -1px;
        position: relative;
        border-radius: 0px 50px 0px 0px;
    }
`;
