import React from "react";
import { Container, LI } from "./SidebarStyles";
import { mainLogo, sideBarUrl } from "../../API/sidebar";
import { SidebarProps } from "./SidebarInterface";

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
    const handleClick = (id: number) => {
        if (id) setIsActive(id);
    };
    console.log(isActive, "isActive");
    return (
        <Container>
            <div>{mainLogo}</div>
            <ul>
                {sideBarUrl.map((item, index) => (
                    <LI
                        isActive={isActive === item.id}
                        key={index}
                        onClick={() => handleClick(item.id)}
                    >
                        <span>
                            {item.svg}
                            {item.title}
                        </span>
                        <span></span>
                    </LI>
                ))}
            </ul>
        </Container>
    );
};

export default Sidebar;
