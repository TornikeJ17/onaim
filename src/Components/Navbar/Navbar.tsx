import React from "react";
import { Container, Block, ButtonClick } from "./NavbarStyles";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import Input from "../Input/Input";

const Navbar: React.FC = () => {
    return (
        <Container>
            <Slider />
            <Button title={"რეგისტრაცია"} width="167px" hover="#27b654" />
            <Block>
                <Input placeholder="მომხმარებელი" />
                <Input placeholder="პაროლი" />
                <ButtonClick>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                    >
                        <script />
                        <g
                            opacity=".6"
                            stroke="#fff"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M13 5v8c0 3.2-.75 4-3.75 4h-4.5c-3 0-3.75-.8-3.75-4V5c0-3.2.75-4 3.75-4h4.5c3 0 3.75.8 3.75 4M8.5 3.797h-3" />
                            <path d="M6.998 14.683c.642 0 1.163-.555 1.163-1.24s-.52-1.24-1.163-1.24c-.642 0-1.162.555-1.162 1.24s.52 1.24 1.162 1.24" />
                        </g>
                        <script />
                    </svg>
                </ButtonClick>
            </Block>
            <Button
                title={"შესვლა"}
                width="124px"
                hover="#1e77a6"
                backgroundColor="#0e5276"
            />
        </Container>
    );
};

export default Navbar;
