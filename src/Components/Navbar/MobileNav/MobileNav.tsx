import React from "react";
import { MobileNavContainer } from "./MobileNavStyles";
import { MobileNavProps } from "./MobileNavInterface";

const MobileNav: React.FC<MobileNavProps> = ({ breakpoint }) => {
    return (
        <MobileNavContainer breakpoint={breakpoint}>
            <>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                    >
                        <script />
                        <path
                            d="M18.5 0h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3m0 7h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 0 0 0-3m0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3"
                            fill="#fff"
                        />
                        <script />
                    </svg>
                </span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="24"
                        viewBox="0 0 45 24"
                        fill="none"
                    >
                        <script />
                        <path
                            d="M43.32 9.82 34.406.901a3.083 3.083 0 0 0-4.359 0L22.993 7.96a1.28 1.28 0 0 1-1.812 0L14.127.902a3.083 3.083 0 0 0-4.359 0l-.729.73a.32.32 0 0 0 0 .452l21.01 21.013a3.083 3.083 0 0 0 4.36 0l8.913-8.917a3.085 3.085 0 0 0-.002-4.36m-5.022 3.085-5.165 5.168a1.28 1.28 0 0 1-1.81 0l-5.166-5.167a1.28 1.28 0 0 1 0-1.812l5.165-5.168a1.28 1.28 0 0 1 1.811 0l5.165 5.168a1.28 1.28 0 0 1 0 1.812"
                            fill="#fff"
                        />
                        <path
                            d="m15.339 15.662-2.415 2.411a1.284 1.284 0 0 1-1.814 0L5.937 12.91a1.28 1.28 0 0 1 0-1.812L10.23 6.81a.32.32 0 0 0 0-.453l-2.7-2.7a.32.32 0 0 0-.454 0L.905 9.823a3.08 3.08 0 0 0 0 4.358l8.928 8.916a3.09 3.09 0 0 0 4.366 0l6.17-6.161a.32.32 0 0 0 0-.453l-.821-.822a2.983 2.983 0 0 0-4.21 0"
                            fill="#1CAF4B"
                        />
                        <script />
                    </svg>
                </span>
                <span>შესვლა</span>
            </>
        </MobileNavContainer>
    );
};

export default MobileNav;
