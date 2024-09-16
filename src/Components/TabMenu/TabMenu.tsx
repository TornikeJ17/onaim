import React, { useEffect } from "react";
import { TabMenuContainer, LI, GroupMenu } from "./TabMenuStyles";
import { tabMenuList } from "../../API/tabmenu";
import { TabMenuProps } from "./TabMenuInterface";
import { NavLink } from "react-router-dom";
const TabMenu: React.FC<TabMenuProps> = ({
    tabMenuActive,
    setTabMenuActive,
    breakpoint,
}) => {
    useEffect(() => {
        if (tabMenuActive === null) setTabMenuActive(1);
    }, []);
    const handleClick = (id: number) => {
        if (id) setTabMenuActive(id);
    };
    return (
        <TabMenuContainer breakpoint={breakpoint}>
            <div>
                <ul>
                    {tabMenuList.map((item, index) => (
                        <NavLink to={item.url}>
                            <LI
                                onClick={() => handleClick(item.id)}
                                tabMenuActive={tabMenuActive === item.id}
                                key={index}
                            >
                                {item.svg}
                                {item.title}
                            </LI>
                        </NavLink>
                    ))}
                </ul>
                <GroupMenu>
                    <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="36" height="36" rx="18" fill="#00141E" />
                        <rect
                            x=".5"
                            y=".5"
                            width="35"
                            height="35"
                            rx="17.5"
                            stroke="#fff"
                            stroke-opacity=".15"
                        />
                        <circle cx="18.277" cy="11.815" r="1.662" fill="#fff" />
                        <circle cx="18.277" cy="18.46" r="1.662" fill="#fff" />
                        <circle cx="18.277" cy="25.108" r="1.662" fill="#fff" />
                    </svg>
                </GroupMenu>
            </div>
        </TabMenuContainer>
    );
};

export default TabMenu;
