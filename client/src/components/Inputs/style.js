import styled from 'styled-components';

export const InputWrapper = styled.div`
    width: ${props => props.Size};
    width: ${props => props.Margin}; 
`

export const TextFieldWrapper = styled.div`
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;

    width: 100%;
    cursor: text;

    &:before {
        position: absolute;
        content: " ";

        width: 100%;
        left: 0;
        right: 0;
        bottom: 12px;

        border-bottom: 1px solid ${props => props.Color1};
        pointer-events: none;
    }

    &:after {
        position: absolute;
        content: " ";

        width: 0;
        bottom: 12px;

        transition: 0.25s;
        border-bottom: 1px solid ${props => props.Color3};
        pointer-events: none;
    }

    &:hover:after {
        width: 100%;
    }

    &:focus-within:after {
        width: 100%;

        border-color: ${props => props.Color2};
    }
`

export const TextField = styled.input`
    width: calc(100% - 10px);
    height: ${props => props.Height};
    padding: 0 5px;
    margin: 10px 0;

    font-size: 16px;
    line-height: 1;

    color: ${props => props.Color2};
    background-color: transparent;
    border: none;
    outline: none;

    z-index: 1;

    &:focus ~ label {
        margin-top: -17px;
        font-size: 12px;
    }
`

export const LabelText = styled.label`
    position: absolute;
    display: flex;
    align-items: center;

    height: ${props => props.Height};
    width: calc(100% - 10px);
    padding: 5px 5px;
    margin-top: ${props => props.Active ? "-17px" : "0"};

    color: ${props => props.Color1};
    font-size: ${props => props.Active ? "12px" : "16px"};
    transition: 0.15s;
    z-index: 0;
`