import React from "react";
import {
    LeaderboardsContainer,
    LeaderboardTitle,
    LeaderboardsButton,
} from "./LeaderboardsStyle";

const Leaderboards: React.FC = () => {
    return (
        <LeaderboardsContainer>
            <LeaderboardTitle>
                <LeaderboardsButton>Leaderboard Name</LeaderboardsButton>
            </LeaderboardTitle>
        </LeaderboardsContainer>
    );
};

export default Leaderboards;
