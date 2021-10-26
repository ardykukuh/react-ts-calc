import React, { createContext, useState, useCallback } from 'react';
import * as math from 'mathjs';
import { DefaultTheme } from 'styled-components';
import { usePersistedState } from '../utils';
import light from '../assets/styles/themes/light';

interface IAppContext {
    result: string;
    validateInput:string;
    theme: DefaultTheme;
    inputObj: { value: number, isChecked: boolean }[];
    addToInput: (value: string) => void;
    onChangeCheckbox: (event: React.ChangeEvent<HTMLInputElement>, index:number) => void;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement>, index:number) => void;
}

export const AppContext = createContext({} as IAppContext);

const AppContextProvider: React.FC = ({ children }) => {
    const [result, setResult] = useState('');
    const [validateInput, setValidateInput] = useState('');
    const [inputObj, setInputObj] = useState([
        { value: 0, isChecked: false },
        { value: 0, isChecked: false },
        { value: 0, isChecked: false }
    ]);
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const operators = ['+', '-', '/', '*'];

    const isElement = useCallback((value: string, arrayToCheck: string[]) => {
        return arrayToCheck.includes(value);
    }, []);

    const handleResult = useCallback(
        (value: string) => {
            let totalValue = 0;
            inputObj.map((obj,index)=>{
                if(obj.isChecked){
                    switch (value) {
                        case '-':
                            setResult(
                                totalValue == 0 ? totalValue = obj.value : totalValue = math.evaluate(totalValue+ ' - '+ obj.value)
                            );
                            break;
                        case '*':
                            setResult(
                            totalValue == 0 ? totalValue = obj.value : totalValue = math.evaluate(totalValue+ ' * '+ obj.value)
                            );
                            break;
                        case '/':
                            setResult(
                                totalValue == 0 ? totalValue = obj.value : totalValue = math.evaluate(totalValue+ ' / '+ obj.value)
                            );
                            break;
                        default:
                            setResult(
                                totalValue == 0 ? totalValue = obj.value : totalValue = math.evaluate(totalValue+ ' + '+ obj.value)
                            );
                    }
                }
            });
        },
        [],
    );
    const onChangeInput = useCallback((event,index) => {
        selectedInput("value", event.target.value, index)
    }, []);
    const onChangeCheckbox = useCallback((event,index) => {
        let valCheckbox = inputObj[index].isChecked;
        selectedInput("isChecked", !valCheckbox, index)
    }, []);
    const selectedInput = useCallback((key: string, value, index:number) => {
        const newNumberObjs = [...inputObj];
        if(key=="isChecked"){
            newNumberObjs[index].isChecked  = !inputObj[index].isChecked;
            setInputObj(newNumberObjs);
        }else{
            newNumberObjs[index].value  = value;
            setInputObj(newNumberObjs);
        }
    },[inputObj]);

    const addToInput = useCallback(
        (value: string) => {
            if (
                (!isElement(value, operators)) ||
                ((!inputObj[0].value && !inputObj[1].value && !inputObj[2].value) && isElement(value, operators)) ||
                (inputObj.filter((obj)=> obj.isChecked).length < 2)
            ) {
                return setValidateInput('Silahkan checklist dan isi input minimal 2 input!');
            }
            switch (value) {
                default:
                    setValidateInput('');
                    handleResult(value);
            }
        },
        [
            isElement,
            operators
        ],
    );

    return (
        <AppContext.Provider
            value={{
                theme,
                result,
                validateInput,
                inputObj,
                addToInput,
                onChangeCheckbox,
                onChangeInput
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;