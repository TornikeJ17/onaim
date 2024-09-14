import styled from "styled-components";

export const GamesContainer = styled.div`
    width: 100%;
    border-radius: 16px;
    background-color: #062733;
    grid-column: 1/1;
`;
export const GameGrid = styled.div`
    grid-column: 1 / 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 20px;
`;

export const GameCard = styled.div`
    background-color: #01232d;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    font-weight: bold;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #01374a;
    }
`;
