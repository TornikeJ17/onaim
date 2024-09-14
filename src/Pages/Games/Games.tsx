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
import ResponsiveGrid from "../../Responsive/ResponsiveGrid";
import { useResponsiveTSX } from "../../useResponsive";

const Games: React.FC<GamesProps> = ({
    gameTabMenuActive,
    setGameTabMenuActive,
}) => {
    const breakpoints = useResponsiveTSX([600, 1024, 1440]);
    const columns = (() => {
        if (breakpoints <= 600) {
            return "repeat(auto-fill, minmax(100%, 1fr))"; // 1 column for mobile
        } else if (breakpoints <= 1024) {
            return "repeat(auto-fill, minmax(300px, 1fr))"; // 2-3 columns for tablet
        } else if (breakpoints <= 1440) {
            return "repeat(auto-fill, minmax(400px, 1fr))"; // 3-4 columns for laptop
        } else {
            return "repeat(auto-fill, minmax(500px, 1fr))"; // 4+ columns for desktop
        }
    })();
    return (
        <GamesContainer>
            <TitleBlock>
                <Title>Game</Title>
                <GamesTab
                    gameTabMenuActive={gameTabMenuActive}
                    setGameTabMenuActive={setGameTabMenuActive}
                />
            </TitleBlock>
            <ResponsiveGrid
                // columns={columns}
                children={
                    <>
                        {gameList.map((item, index) => (
                            <GameCard>
                                <img src={String(item.img)} />
                            </GameCard>
                        ))}
                    </>
                }
            />

            {/* <GameGrid>
                {gameList.map((item, index) => (
                    <GameCard>
                        <img src={String(item.img)} />
                    </GameCard>
                ))}
            </GameGrid> */}
        </GamesContainer>
    );
};

export default Games;
