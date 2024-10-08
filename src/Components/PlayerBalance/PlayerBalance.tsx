import React from "react";
import {
    PlayerBalanceContainer,
    BalanceInfo,
    BalanceButton,
    SeeMore,
} from "./PlayerBalanceStyles";
import { gameSVG } from "../../API/game";
import { PlayerBalanceProps } from "./PlayerBalanceInterface";

const PlayerBalance: React.FC<PlayerBalanceProps> = ({ breakpoint }) => {
    return (
        <PlayerBalanceContainer breakpoint={breakpoint}>
            <h2>Player's Balance</h2>
            <BalanceInfo>
                <div>
                    <>
                        {gameSVG[0].svg}
                        <p>12 Freespins</p>
                    </>
                    <BalanceButton button={1}>Withdraw</BalanceButton>
                </div>
                <div>
                    <span>
                        {gameSVG[2].svg}
                        <p>8 Flash</p>
                    </span>

                    <BalanceButton button={2}>Collect</BalanceButton>
                </div>
            </BalanceInfo>
            <SeeMore>
                See More{" "}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 14a2.27 2.27 0 0 1-1.608-.667L2.958 7.9a.63.63 0 0 1 0-.883.63.63 0 0 1 .884 0l5.433 5.433c.4.4 1.05.4 1.45 0l5.433-5.433a.63.63 0 0 1 .884 0 .63.63 0 0 1 0 .883l-5.434 5.433A2.27 2.27 0 0 1 10 14"
                        fill="#189541"
                    />
                </svg>
            </SeeMore>
        </PlayerBalanceContainer>
    );
};
export default PlayerBalance;
