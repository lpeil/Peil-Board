import React, { useState } from 'react';

import {
    InputWrapper,
    TextField,
    TextFieldWrapper,
    LabelText
} from './style';

const Input = (props) => {
    const Type = props.InputType ? props.InputType : 'text';
    const Size = props.Size ? props.Size : '100%';
    const Label = props.Label ? props.Label : 'Input';
    const Height = props.Height ? props.Height : '30px';
    const Color1 = props.Color1 ? props.Color1 : 'var(--color1)';
    const Color2 = props.Color2 ? props.Color2 : 'var(--color5)';
    const Color3 = props.Color3 ? props.Color3 : 'var(--color2)';
    const Margin = props.Margin ? props.Margin : '10px 0';
    const Required = props.Required ? props.Required : false;

    let [value, setValue] = useState('');

    return (
        <InputWrapper
            Size={Size}
            Margin={Margin}
        >
            <TextFieldWrapper
                Color1={Color1}
                Color2={Color2}
                Color3={Color3}
            >
                <TextField 
                    value={value}
                    onChange={e => {
                        props.setNewValue(e.target.value);
                        setValue(e.target.value);
                    }}
                    type={Type}
                    Color2={Color2}
                    Required={Required}
                    Height={Height}
                />
                <LabelText 
                    Active={value.length > 0 ? true : false}
                    Color1={Color1}
                    Height={Height}
                >
                    <span>{Label}</span>
                </LabelText>
            </TextFieldWrapper>
            
        </InputWrapper>
    );
}

export default Input;
