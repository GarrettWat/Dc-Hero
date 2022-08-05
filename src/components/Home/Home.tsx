import React from 'react';
//...import for react above

// New Styles Code
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import dc_hero from '../../assets/images/dc_hero2.jpg';
// Below Imports
import { Link } from 'react-router-dom';


interface Props{
    title:string;
}

//...interface above

// Create Styled Components with styled-components
const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled('a')({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: ` linear-gradient(rgba(0, 0, 100, 0.5), rgba(100, 0, 10, 0.5)), url(${dc_hero});` ,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})

const NavLink = styled(Link)({  // Changed 'a' to Link
    display: 'block',
    padding: '1em',
    color: 'black'
})




export const Home = (props:Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="/">DC</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA href="/">Home</NavA>
                    </li>
                    <li>
                        <NavA href="#">About</NavA>
                    </li>
                    <li>
                        <NavA href="#">Heroes</NavA>
                    </li>
                    <li>
                        <NavA href="/dashboard">Dashboard</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p> Heros are cool.</p>
                    <Button color='primary' variant='contained' component={Link} to='/dashboard'>See all of the Heroes!</Button>
                </MainText>
            </Main>
        </Root>
    )
}

