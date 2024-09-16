import styled from "styled-components";

export const MissionContainer = styled.div<{ breakpoint: number }>`
    width: ${({ breakpoint }) => (breakpoint === 0 ? "77%" : "100%")};
    border-radius: 16px;
    background-color: #062733;
    grid-column: 1/1;
    padding-bottom: 20px;
`;
export const TitleBlock = styled.div`
    display: grid;
    gap: 20px;
    padding: 20px;
`;
export const Title = styled.div`
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32.4px;
    text-align: left;
`;
export const MissionContent = styled.div<{ breakpoint: number }>`
    display: grid;
    grid-template-columns: ${({ breakpoint }) =>
        breakpoint === 0
            ? "repeat(1, 1fr)"
            : breakpoint === 1
            ? "repeat(1, minmax(150px, 1fr))"
            : breakpoint === 2
            ? "repeat(2, minmax(200px, 1fr))"
            : breakpoint === 3
            ? "repeat(3, minmax(350px, 1fr))"
            : "repeat(3, minmax(350px, 1fr))"};
    gap: 20px;
`;
export const MissionBlock = styled.div<{ breakpoint: number }>`
    display: grid;
    margin: 0 auto;
    max-width: 348px;
    height: 459px;
    padding: 12px;
    gap: 28px;
    border-radius: 12px;
    background-color: #00141e;
    hr {
        border: 1px solid #263740;
    }
`;

export const ImageBlock = styled.div`
    position: relative;
    img {
        width: 100%;
    }
    div {
        width: 90px;
        height: 90px;
    }
`;
export const CircleImg = styled.div<{ background: string }>`
    border-radius: 100%;
    position: absolute;
    top: 40px;
    left: 40%;
    background-image: ${({ background }) => `url(${background})`};
    background-size: contain; 
    background-position: center; /
    background-repeat: no-repeat;
`;

export const MissionTitleBlock = styled.div`
    width: 324px;
    text-align: center;
    span {
        height: 30px;
        font-family: Satoshi;
        font-size: 22px;
        font-weight: 700;
        line-height: 29.7px;
        text-align: center;
    }
    p {
        font-family: Satoshi;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
    }
`;
export const MissionItemBlock = styled.div`
    display: flex;
    gap: 5px;
`;
export const MissionItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 52px;
    padding: 8px 14px 8px 8px;
    gap: 8px;
    border-radius: 60px;
    border-bottom: 2px solid #189541;
    opacity: 0px;
    background-color: #062733;
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
`;
export const RewardText = styled.span`
    font-family: Satoshi;
    font-size: 16px;
    font-weight: 700;
    line-height: 21.6px;
    text-align: left;
    margin-top: 10px;
`;

export const PointerBlock = styled.div`
    display: grid;
    gap: 10px;
`;
export const PlayButton = styled.div`
    text-align: center;
    align-content: center;
    width: 100%;
    height: 48px;
    gap: 8px;
    border-radius: 8px;
    background-color: #189541;
    span {
        font-family: Satoshi;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        text-align: left;
    }
`;
