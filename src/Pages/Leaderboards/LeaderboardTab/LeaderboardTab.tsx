import React, { useEffect } from "react";
import { LeaderboardTabProps } from "./LeaderboardTabInteface";
import { leaderBoardTab } from "../../../API/tabmenu";
import { LeaderboardContainer, LeaderboardItem } from "./LeaderboardStyles";

const LeaderboardTab: React.FC<LeaderboardTabProps> = ({
    leaderboardTabActive,
    setLeaderboardTabActive,
    breakpoint,
}) => {
    useEffect(() => {
        setLeaderboardTabActive(1);
    }, []);
    const handleClick = (id: number) => {
        if (id) setLeaderboardTabActive(id);
    };
    return (
        <LeaderboardContainer breakpoint={breakpoint}>
            {leaderBoardTab.map((item, index) => (
                <LeaderboardItem
                    breakpoint={breakpoint}
                    leaderboardTabActive={leaderboardTabActive === item.id}
                    onClick={() => handleClick(item.id)}
                    key={index}
                >
                    {item.title}
                </LeaderboardItem>
            ))}
        </LeaderboardContainer>
    );
};

export default LeaderboardTab;
