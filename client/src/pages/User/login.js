import React, { useState } from 'react';

import Input from '../../components/Inputs'

import {
    LoginPage,
    LoginBackground,
    LoginWrapper,
    LoginDescription,
    LoginDescriptionTitle,
    LoginDescriptionText,
    LoginForm,
    LoginFormTitle
} from './style';

const Login = () => {
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');

    return (
        <>
            <LoginPage />
            <LoginBackground />
            <LoginWrapper>
                <LoginDescription>
                    <LoginDescriptionTitle>Peil Board</LoginDescriptionTitle>
                    <LoginDescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum omnis exercitationem nulla dolor voluptas esse blanditiis optio sunt nam. Vitae voluptatem qui veritatis quod doloremque error itaque aperiam et.</LoginDescriptionText>
                    <LoginDescriptionText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rerum omnis exercitationem nulla dolor voluptas esse blanditiis optio sunt nam. Vitae voluptatem qui veritatis quod doloremque error itaque aperiam et.</LoginDescriptionText>
                </LoginDescription>
                <LoginForm>
                    <LoginFormTitle>Login</LoginFormTitle>
                    <Input 
                        Size="80%"
                        Label="Nome"
                        setNewValue={setName}
                    />
                    <Input 
                        Size="80%"
                        Label="Senha"
                        InputType="password"
                        setNewValue={setPassword}
                    />
                </LoginForm>
            </LoginWrapper>
        </>
    )
}

export default Login;
