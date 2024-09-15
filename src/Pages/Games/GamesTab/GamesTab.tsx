import React, { useEffect } from "react";
import { gamesTab } from "../../../API/game";
import { GamesTabBlock, GamesTabContainer } from "./GamesTabStyles";
import { GamesTabProps } from "./GamesTabInterface";

const GamesTab: React.FC<GamesTabProps> = ({
    gameTabMenuActive,
    setGameTabMenuActive,
}) => {
    useEffect(() => {
        if (gameTabMenuActive === null) setGameTabMenuActive(1);
    }, []);
    const handleClick = (id: number) => {
        if (id) setGameTabMenuActive(id);
    };
    return (
        <GamesTabContainer>
            {gamesTab.map((item, index) => (
                <GamesTabBlock
                    key={index}
                    gameTabMenuActive={gameTabMenuActive === item.id}
                    onClick={() => handleClick(item.id)}
                >
                    {item.title}
                </GamesTabBlock>
            ))}
        </GamesTabContainer>
    );
};

export default GamesTab;
