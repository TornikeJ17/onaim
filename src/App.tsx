import React, { useState } from "react";
import { useResponsiveTSX } from "./useResponsive";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import { AppContainer } from "./styles/Style";
import MobileNav from "./Components/Navbar/MobileNav/MobileNav";

const App: React.FC = () => {
    const breakpoint = useResponsiveTSX([600, 1024, 1440, 1920]);
    const [isActive, setIsActive] = useState<number | null>(null);
    const [tabMenuActive, setTabMenuActive] = useState<number | null>(null);
    const [gameTabMenuActive, setGameTabMenuActive] = useState<number | null>(
        null
    );
    const [leaderboardTabActive, setLeaderboardTabActive] = useState<
        number | null
    >(null);

    return (
        <AppContainer breakpoint={breakpoint}>
            <>
                <div>
                    {" "}
                    {breakpoint !== 0 && breakpoint !== 1 && (
                        <Sidebar
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                    )}
                </div>
                <div className="block2">
                    {breakpoint !== 0 && breakpoint !== 1 ? (
                        <Navbar />
                    ) : (
                        <MobileNav breakpoint={breakpoint} />
                    )}
                    <Section
                        tabMenuActive={tabMenuActive}
                        setTabMenuActive={setTabMenuActive}
                        gameTabMenuActive={gameTabMenuActive}
                        setGameTabMenuActive={setGameTabMenuActive}
                        leaderboardTabActive={leaderboardTabActive}
                        setLeaderboardTabActive={setLeaderboardTabActive}
                        breakpoint={breakpoint}
                    />
                </div>
            </>
        </AppContainer>
    );
};

export default App;
