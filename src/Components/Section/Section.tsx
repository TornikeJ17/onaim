import React from "react";
import { Container } from "./SectionStyles";
import Banner from "../Banner/Banner";
import PlayerBalance from "../PlayerBalance/PlayerBalance";
import TabMenu from "../TabMenu/TabMenu";
import { SectionProps } from "./SectionInterface";
import { Route, Routes } from "react-router-dom";
import Games from "../../Pages/Games/Games";
import Leaderboards from "../../Pages/Leaderboards/Leaderboards";
const Section: React.FC<SectionProps> = ({
    tabMenuActive,
    setTabMenuActive,
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
                <Route path="/Games" element={<Games />} />
                <Route path="/Leaderboards" element={<Leaderboards />} />
                <Route path="/Missions" element={<Games />} />
            </Routes>
        </Container>
    );
};

export default Section;
