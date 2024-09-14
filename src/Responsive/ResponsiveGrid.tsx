import React from "react";
import { useResponsiveTSX } from "../useResponsive";
import { GridContainer } from "./ResponsiveGridStyle";
import { ResponsiveGridProps } from "./ResposniveGridInterface";

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ children }) => {
    const breakpoints = useResponsiveTSX([600, 1024, 1440]);

    const columns = (() => {
        if (breakpoints <= 600) {
            return "repeat(auto-fill, minmax(100%, 1fr))";
        } else if (breakpoints <= 1024) {
            return "repeat(auto-fill, minmax(300px, 1fr))";
        } else if (breakpoints <= 1440) {
            return "repeat(auto-fill, minmax(400px, 1fr))";
        } else {
            return "repeat(auto-fill, minmax(500px, 1fr))";
        }
    })();

    return <GridContainer columns={columns}>{children}</GridContainer>;
};

export default ResponsiveGrid;
