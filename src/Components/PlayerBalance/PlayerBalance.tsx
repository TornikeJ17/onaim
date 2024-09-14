import React from "react";
import {
    PlayerBalanceContainer,
    BalanceInfo,
    BalanceButton,
    SeeMore,
} from "./PlayerBalanceStyles";

const PlayerBalance: React.FC = () => {
    return (
        <PlayerBalanceContainer>
            <h2>Player's Balance</h2>
            <BalanceInfo>
                <div>
                    <p>12 Freespins</p>
                    <BalanceButton>Withdraw</BalanceButton>
                </div>
                <div>
                    <p>8 Flash</p>
                    <BalanceButton>Collect</BalanceButton>
                </div>
            </BalanceInfo>
            <SeeMore>See More</SeeMore>
        </PlayerBalanceContainer>
    );
};
export default PlayerBalance;
