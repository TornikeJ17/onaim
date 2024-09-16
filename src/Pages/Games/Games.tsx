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
    breakpoint,
}) => {
    return (
        <GamesContainer breakpoint={breakpoint}>
            <TitleBlock>
                <Title>Game</Title>
                <GamesTab
                    breakpoint={breakpoint}
                    gameTabMenuActive={gameTabMenuActive}
                    setGameTabMenuActive={setGameTabMenuActive}
                />
            </TitleBlock>
            <GameGrid breakpoint={breakpoint}>
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
