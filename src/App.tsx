import React, { useState } from "react";
import { useResponsiveTSX } from "./useResponsive";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";

const App: React.FC = () => {
    const breakpoints = useResponsiveTSX([600, 900, 1200]);
    const [isActive, setIsActive] = useState<number | null>(null);
    const [tabMenuActive, setTabMenuActive] = useState<number | null>(null);

    // Function to decide the layout based on breakpoint
    const getLayout = () => {
        switch (breakpoints) {
            case 0:
                return (
                    <div>
                        {/* Mobile View */}
                        <Sidebar
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                        <Section
                            tabMenuActive={tabMenuActive}
                            setTabMenuActive={setTabMenuActive}
                        />
                    </div>
                );
            case 1:
                return (
                    <div>
                        {/* Tablet View */}
                        <Sidebar
                            isActive={isActive}
                            setIsActive={setIsActive}
                        />
                        <div className="tablet-layout">
                            <Navbar />
                            <Section
                                tabMenuActive={tabMenuActive}
                                setTabMenuActive={setTabMenuActive}
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        {/* Desktop View */}
                        <div className="desktop-layout">
                            <Sidebar
                                isActive={isActive}
                                setIsActive={setIsActive}
                            />
                            <div className="main-content">
                                <Navbar />
                                <Section
                                    tabMenuActive={tabMenuActive}
                                    setTabMenuActive={setTabMenuActive}
                                />
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        {/* Large Desktop View */}
                        <div className="large-desktop-layout">
                            <Sidebar
                                isActive={isActive}
                                setIsActive={setIsActive}
                            />
                            <div className="main-content">
                                <Navbar />
                                <Section
                                    tabMenuActive={tabMenuActive}
                                    setTabMenuActive={setTabMenuActive}
                                />
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return <div className="App">{getLayout()}</div>;
};

export default App;
