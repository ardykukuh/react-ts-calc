import React, {ChangeEvent, InputHTMLAttributes} from 'react';
import { StyledInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name:string;
    label:string;
    disabled:boolean;
    handleChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const InputText: React.FC<InputProps> = ({name,label,disabled,handleChange}) => {
    return (
        <StyledInput disabled={disabled} type={"number"} name={name} placeholder={label} onChange={handleChange}  inputColor={"blue"}  />
    );
};