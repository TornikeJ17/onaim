import React from "react";
import { GamesContainer, GameCard, GameGrid } from "./GamesStyles";
import { GamesProps } from "./GamesInterface";
import { gameSVG } from "../../API/game";

const Games: React.FC<GamesProps> = () => {
    return (
        <GamesContainer>
            <GameGrid>
                {gameSVG[0].svg}
                {gameSVG[1].svg}
                {gameSVG[2].svg}
                <GameCard>Golden Catch</GameCard>
                <GameCard>Bass Boss</GameCard>
                <GameCard>Zeus III</GameCard>
                <GameCard>Gemza</GameCard>
                <GameCard>Red Hot Luck</GameCard>
                <GameCard>Wild Voodoo</GameCard>
            </GameGrid>
        </GamesContainer>
    );
};

export default Games;
