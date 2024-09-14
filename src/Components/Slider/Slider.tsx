import React, { useState } from "react";
import { SliderBlock, Slides, Button } from "./SliderStyles";

const images = [
    "https://static.crocobet.com/test/a1c5f6aefbf5798602a2d149c7132810.png",
    "https://static.crocobet.com/test/c6aaa5c26356123d8138e9c75f058357.png",
    "https://static.crocobet.com/test/2b6bc53fe179a60cc4369dd7eab65eed.png",
    "https://static.crocobet.com/test/84cc479aee0efa9ca826f7099afc6567.png",
    "https://static.crocobet.com/test/d1ff345e68b7a4bf46c1b7b62ee2cf30.webp",
    "https://static.crocobet.com/test/0bfb5781fa0154c618aa481f7b64aad3.png",
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <SliderBlock>
            <Slides style={{ transform: `translateX(${-currentIndex * 20}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index + 1}`} />
                ))}
            </Slides>

            {/* Slider Buttons */}
            <Button
                className="prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
            >
                ❮
            </Button>
            <Button
                className="next"
                onClick={nextSlide}
                disabled={currentIndex === images.length - 1}
            >
                ❯
            </Button>
        </SliderBlock>
    );
};

export default Slider;
