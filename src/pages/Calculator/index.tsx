import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Button,Checkbox,InputText } from '../../components';
import { Container, StyledBackground, ButtonsContainer,FormContainer,FormGroup } from './styles';
import { calculatorItems } from '../../utils';
import { AppContext } from '../../hooks/Context';
import { Result } from '../../components/Result/Result';
const Calculator: React.FC = () => {
    const { addToInput, onChangeCheckbox,inputObj,onChangeInput } = useContext(AppContext);
    return (
        <>
            <Helmet title="Calculator" />
            <Container>

                <StyledBackground>
                    <FormContainer>
                        <FormGroup>
                            <InputText disabled={!inputObj[0].isChecked} name={"input1"} label={"Input 1"} value={inputObj[0].value} handleChange={(e) => onChangeInput(e,0)}/>
                            <Checkbox checked={inputObj[0] && inputObj[0].isChecked} onChange={(e)=>onChangeCheckbox(e,0)}  />
                        </FormGroup>
                        <FormGroup>
                            <InputText disabled={inputObj[0] && !inputObj[1].isChecked} name={"input2"} label={"Input 2"} value={inputObj[0] && inputObj[1].value} handleChange={(e) => onChangeInput(e,1)}/>
                            <Checkbox checked={inputObj[0] && inputObj[1].isChecked} onChange={(e)=>onChangeCheckbox(e,1)}  />
                        </FormGroup>
                        <FormGroup>
                            <InputText disabled={inputObj[0] && !inputObj[2].isChecked} name={"input3"} label={"Input 3"} value={inputObj[0] && inputObj[2].value} handleChange={(e) => onChangeInput(e,2)}/>
                            <Checkbox checked={inputObj[0] && inputObj[2].isChecked} onChange={(e)=>onChangeCheckbox(e,2)}  />
                        </FormGroup>
                    </FormContainer>
                    <ButtonsContainer>
                        {calculatorItems.map(item => (
                            <Button
                                key={item.key}
                                value={item.value}
                                onClick={() => addToInput(item.value)}
                            >
                                {item.render}
                            </Button>
                        ))}
                    </ButtonsContainer>

                    <Result />
                </StyledBackground>
            </Container>
        </>
    );
};

export default Calculator;