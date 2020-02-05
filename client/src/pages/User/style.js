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
    flex-flow: row wrap-reverse;

    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`

export const LoginDescription = styled.div`
    display: flex;

    width: 50%;
    min-width: 450px;
    max-width: 90%;
    height: 200px;

    background-color: var(--color2);
`