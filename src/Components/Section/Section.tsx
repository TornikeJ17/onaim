import React from "react";
import { Container } from "./SectionStyles";
import Banner from "../Banner/Banner";
import PlayerBalance from "../PlayerBalance/PlayerBalance";
import TabMenu from "../TabMenu/TabMenu";
import { SectionProps } from "./SectionInterface";
import { Route, Routes } from "react-router-dom";
import Games from "../../Pages/Games/Games";
import Leaderboards from "../../Pages/Leaderboards/Leaderboards";
import Missions from "../../Pages/Missions/Missions";
const Section: React.FC<SectionProps> = ({
    tabMenuActive,
    setTabMenuActive,
    gameTabMenuActive,
    setGameTabMenuActive,
    leaderboardTabActive,
    setLeaderboardTabActive,
    breakpoint,
}) => {
    return (
        <Container breakpoint={breakpoint}>
            <Banner breakpoint={breakpoint} />
            <PlayerBalance breakpoint={breakpoint} />
            <TabMenu
                tabMenuActive={tabMenuActive}
                setTabMenuActive={setTabMenuActive}
                breakpoint={breakpoint}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Games
                            gameTabMenuActive={gameTabMenuActive}
                            setGameTabMenuActive={setGameTabMenuActive}
                            breakpoint={breakpoint}
                        />
                    }
                />
                <Route
                    path="/Leaderboards"
                    element={
                        <Leaderboards
                            leaderboardTabActive={leaderboardTabActive}
                            setLeaderboardTabActive={setLeaderboardTabActive}
                            breakpoint={breakpoint}
                        />
                    }
                />
                <Route
                    path="/Missions"
                    element={
                        <>
                            <Missions breakpoint={breakpoint} />{" "}
                            <Games
                                gameTabMenuActive={gameTabMenuActive}
                                setGameTabMenuActive={setGameTabMenuActive}
                                breakpoint={breakpoint}
                            />
                        </>
                    }
                />
            </Routes>
        </Container>
    );
};

export default Section;
