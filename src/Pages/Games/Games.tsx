import React, { useState } from "react";
import {
    GamesContainer,
    GameCard,
    GameGrid,
    TitleBlock,
    Title,
} from "./GamesStyles";
import { GamesProps } from "./GamesInterface";
import { gameList, gameSVG } from "../../API/game";
import GamesTab from "./GamesTab/GamesTab";

const Games: React.FC<GamesProps> = ({
    gameTabMenuActive,
    setGameTabMenuActive,
}) => {
    return (
        <GamesContainer>
            <TitleBlock>
                <Title>Game</Title>
                <GamesTab
                    gameTabMenuActive={gameTabMenuActive}
                    setGameTabMenuActive={setGameTabMenuActive}
                />
            </TitleBlock>
            <GameGrid>
                {gameList.map((item, index) => (
                    <GameCard>
                        <img src={String(item.img)} />
                    </GameCard>
                ))}
            </GameGrid>
        </GamesContainer>
    );
};

export default Games;
