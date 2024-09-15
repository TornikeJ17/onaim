import React from "react";
import {
    MissionContainer,
    TitleBlock,
    Title,
    MissionContent,
    MissionBlock,
    ImageBlock,
    CircleImg,
    MissionTitleBlock,
    MissionItemBlock,
    MissionItem,
    PointerBlock,
    RewardText,
    PlayButton,
} from "./MissionsStyles";
import { missionsList } from "../../API/missions";
import { gameSVG } from "../../API/game";
import { useResponsiveTSX } from "../../useResponsive";

const Missions: React.FC = () => {
    const breakpoint = useResponsiveTSX([600, 1024, 1440, 1920]);

    return (
        <MissionContainer breakpoint={breakpoint}>
            <TitleBlock>
                <Title>Missions</Title>
            </TitleBlock>
            <MissionContent breakpoint={breakpoint}>
                {missionsList.map((item, index) => (
                    <MissionBlock key={index} breakpoint={breakpoint}>
                        <div>
                            <ImageBlock>
                                <img src={String(item.img)} alt="" />
                                <div style={{ height: "45px" }}>
                                    <CircleImg
                                        background={String(item.circleImg)}
                                    />
                                </div>
                            </ImageBlock>
                            <MissionTitleBlock>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                            </MissionTitleBlock>
                            <hr />
                            <PointerBlock>
                                <RewardText>Rewards</RewardText>

                                <MissionItemBlock>
                                    {item.crystal && (
                                        <MissionItem>
                                            {gameSVG[0].svg}
                                            {item?.crystal}
                                        </MissionItem>
                                    )}
                                    {item.heart && (
                                        <MissionItem>
                                            {gameSVG[1].svg}
                                            {item?.heart}
                                        </MissionItem>
                                    )}
                                    {item.bolt && (
                                        <MissionItem>
                                            {gameSVG[2].svg}
                                            {item?.bolt}
                                        </MissionItem>
                                    )}
                                </MissionItemBlock>
                            </PointerBlock>
                        </div>
                        <PlayButton>
                            <span>Play</span>
                        </PlayButton>
                    </MissionBlock>
                ))}
            </MissionContent>
        </MissionContainer>
    );
};
export default Missions;
