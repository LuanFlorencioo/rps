import styled from 'styled-components';
import './_variables.css';
import triangle from './../../assets/bg-triangle.svg';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 30px 25px;
    background: var(--background);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export const Header = styled.header`
    width: 100%;
    max-width: 500px;
    height: 15%;
    max-height: 200px;
    padding: 10px;
    border: 3px solid var(--header-outline);
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 100px;
    }
`

export const Main = styled.main`
    width: 100%;
    max-width: 500px;
    height: 70%;

    background-image: url(${triangle});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center center;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Footer = styled.footer`
    width: 100%;
    max-width: 500px;
    height: 15%;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`