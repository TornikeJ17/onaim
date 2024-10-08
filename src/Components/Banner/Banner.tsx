import React from "react";
import { BannerContainer } from "./BannerStyles";
import Button from "../Button/Button";
import BannerImage from "../../Img/banner.png";
import { BannerProps } from "./BannerInterface";
const Banner: React.FC<BannerProps> = ({ breakpoint }) => {
    return (
        <BannerContainer breakpoint={breakpoint}>
            <div className="block">
                <h1>Fish'N Nudge Slot</h1>
                <p>
                    Reel em in and nudge em up! Hook a live one and win
                    bass-cinating prizes on the open waters.
                </p>

                <Button title="Play" width="150px" />
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </BannerContainer>
    );
};

export default Banner;
