import React from "react";
import { Container, LI, Item } from "./SidebarStyles";
import { mainLogo, sideBarUrl } from "../../API/sidebar";
import { SidebarProps } from "./SidebarInterface";

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
    const handleClick = (id: number) => {
        if (id) setIsActive(id);
    };
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
                        <Item isActive={isActive === item.id}>
                            {item.svg}
                            <span>{item.title}</span>
                        </Item>
                    </LI>
                ))}
            </ul>
        </Container>
    );
};

export default Sidebar;
