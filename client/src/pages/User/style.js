import styled from 'styled-components';

export const LoginPage = styled.div`
    position: fixed;
    
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background-color: var(--color1);
`

export const LoginBackground = styled.div`
    position: fixed;
    
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background-image: url('http://localhost/images/background.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.3;
`

export const LoginWrapper = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap-reverse;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    @media screen and (max-width: 992px) {
        height: auto;
        margin: 25px 0;
    }
`

export const LoginDescription = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 40%;
    height: 350px;

    background-color: var(--color3);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    @media screen and (max-width: 992px) {
        width: 90%;
        height: auto;

        border-top-left-radius: 0;
        border-bottom-right-radius: 5px;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;

    width: 30%;
    height: 350px;

    background-color: var(--color4);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    @media screen and (max-width: 992px) {
        width: 90%;
        height: auto;

        border-top-left-radius: 5px;
        border-bottom-right-radius: 0;
    }
`

export const LoginDescriptionTitle = styled.h2`
    color: var(--color5);
`

export const LoginDescriptionText = styled.p`
    font-size: 16px;

    width: 80%;
    color: var(--color5);
`

export const LoginFormTitle = styled.h2`
    color: var(--color5);
`