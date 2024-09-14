import styled from "styled-components";

export const SliderBlock = styled.div`
    position: relative;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
    border-radius: 10px;
`;

export const Slides = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    gap: 10px;
    img {
        width: 168px;
        border-radius: 10px;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;

    &.prev {
        left: 10px;
    }

    &.next {
        right: 10px;
    }
`;
