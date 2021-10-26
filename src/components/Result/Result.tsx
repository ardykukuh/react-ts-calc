import React, { useContext } from 'react';
import { AppContext } from '../../hooks/Context';
import { Container, StyledResult, StyledInput,StyledLabel } from './styles';

export const Result: React.FC = () => {
    const { validateInput, result } = useContext(AppContext);

    return (
        <Container>
            <StyledLabel>Hasil:</StyledLabel>
            <StyledResult>{result}</StyledResult>
            <StyledInput>{validateInput}</StyledInput>
        </Container>
    );
};