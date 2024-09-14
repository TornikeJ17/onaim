import React, { useState } from "react";
import { useResponsiveTSX } from "./useResponsive";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

const App: React.FC = () => {
    const breakpoint = useResponsiveTSX([600, 1024, 1440, 1920]); // This will return 0 for mobile, 1 for tablet, 2 for desktop, and 3 for large desktop
    const [isActive, setIsActive] = useState<number | null>(null);
    const [tabMenuActive, setTabMenuActive] = useState<number | null>(null);
    const [gameTabMenuActive, setGameTabMenuActive] = useState<number | null>(
        null
    );

    return (
        <div className={`App breakpoint-${breakpoint}`}>
            <>
                <div>
                    {" "}
                    <Sidebar isActive={isActive} setIsActive={setIsActive} />
                </div>
                <div className="block2">
                    <Navbar />
                    <Section
                        tabMenuActive={tabMenuActive}
                        setTabMenuActive={setTabMenuActive}
                        gameTabMenuActive={gameTabMenuActive}
                        setGameTabMenuActive={setGameTabMenuActive}
                    />
                </div>
            </>
        </div>
    );
};

export default App;
