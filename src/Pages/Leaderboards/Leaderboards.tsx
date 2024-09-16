import React from "react";
import {
    LeaderboardsContainer,
    LeaderboardTitle,
    LeaderboardsButton,
} from "./LeaderboardsStyle";
import { LeaderboardProps } from "./LeaderboardsInterface";
import LeaderboardTab from "./LeaderboardTab/LeaderboardTab";
import { leaderboardData } from "../../API/users";
import { gameSVG } from "../../API/game";

const Leaderboards: React.FC<LeaderboardProps> = ({
    leaderboardTabActive,
    setLeaderboardTabActive,
    breakpoint,
}) => {
    const getBadgeIcon = (badge: string | undefined) => {
        switch (badge) {
            case "gold":
                return require("../../Img/gold.png");
            case "silver":
                return require("../../Img/silver.png");
            case "bronze":
                return require("../../Img/bronze.png");
            default:
                return "";
        }
    };

    const getPrizeIcon = (icon: string) => {
        switch (icon) {
            case "gems":
                return gameSVG[0].svg;
            case "hearts":
                return gameSVG[1].svg;
            case "clubs":
                return gameSVG[2].svg;
            default:
                return "";
        }
    };
    return (
        <LeaderboardsContainer breakpoint={breakpoint}>
            <LeaderboardTitle>
                <LeaderboardsButton>Leaderboard Name</LeaderboardsButton>
            </LeaderboardTitle>
            <LeaderboardTab
                leaderboardTabActive={leaderboardTabActive}
                setLeaderboardTabActive={setLeaderboardTabActive}
                breakpoint={breakpoint}
            />
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>User</th>
                        <th>Points</th>
                        <th>Prize</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((row, index) => (
                        <tr key={index}>
                            <td>
                                <img src={getBadgeIcon(row.badge)} /> {row.rank}
                            </td>
                            <td>{row.user}</td>
                            <td>{row.points}</td>
                            <td>
                                {row.prize.amount}{" "}
                                {getPrizeIcon(row.prize.icon)}{" "}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LeaderboardsContainer>
    );
};

export default Leaderboards;
