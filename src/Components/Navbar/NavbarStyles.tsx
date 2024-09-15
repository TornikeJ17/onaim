import styled from "styled-components";

export const Container = styled.div`
    background-color: #011e28;
    height: 64px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1; /* Ensure it's above other content */
`;
