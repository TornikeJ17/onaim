import styled from "styled-components";

export const GamesContainer = styled.div`
    width: 100%;
    border-radius: 16px;
    background-color: #062733;
    grid-column: 1/1;
`;
export const TitleBlock = styled.div`
    display: grid;
    gap: 20px;
    padding: 20px;
`;
export const Title = styled.div`
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.4px;
    text-align: left;
`;
export const GameGrid = styled.div`
    grid-column: 1 / 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 20px;
    padding: 20px;
`;

export const GameCard = styled.div`
    width: 100%;
    gap: 0px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;
    img {
        width: 100%;
        aspect-ratio: 3/2;
    }
`;
