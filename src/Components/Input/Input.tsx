import React from "react";
import { InputContainer } from "./InputStyles";
import { InputProps } from "./InputInterface";

const Input: React.FC<InputProps> = ({ placeholder }) => {
    return (
        <div>
            <InputContainer placeholder={placeholder} />
        </div>
    );
};

export default Input;
