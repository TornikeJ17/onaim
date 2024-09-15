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
}) => {
    return (
        <Container>
            <Banner />
            <PlayerBalance />
            <TabMenu
                tabMenuActive={tabMenuActive}
                setTabMenuActive={setTabMenuActive}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Games
                            gameTabMenuActive={gameTabMenuActive}
                            setGameTabMenuActive={setGameTabMenuActive}
                        />
                    }
                />
                <Route
                    path="/Leaderboards"
                    element={
                        <Leaderboards
                            leaderboardTabActive={leaderboardTabActive}
                            setLeaderboardTabActive={setLeaderboardTabActive}
                        />
                    }
                />
                <Route
                    path="/Missions"
                    element={
                        <>
                            <Missions />{" "}
                            <Games
                                gameTabMenuActive={gameTabMenuActive}
                                setGameTabMenuActive={setGameTabMenuActive}
                            />
                        </>
                    }
                />
            </Routes>
        </Container>
    );
};

export default Section;
