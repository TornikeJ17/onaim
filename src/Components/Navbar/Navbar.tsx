import React from "react";
import { Container } from "./NavbarStyles";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";

const Navbar: React.FC = () => {
    return (
        <Container>
            <Slider />
            <Button title={"რეგისტრაცია"} width="167px" hover="#27b654" />
            <Button title={"რეგისტრაცია"} width="167px" hover="#27b654" />
            <Button title={"რეგისტრაცია"} width="167px" hover="#27b654" />
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
