import styled, { css } from "styled-components";
import { add, bell, cart, foods, logo } from "../assets/svg";
import profilePic from "../assets/images/profile.jpg";
import { ChangePage } from "../styles";

const Nav = styled.div`
    height: 50px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Toolbar = styled.div`
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 10%;
`;

const Logo = styled.img`
    width: 30px;
`;

const Pages = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
`;

const Page = styled.img`
    width: 20px;
    ${(props) =>
        props.account &&
        css`
            border-radius: 10px;
        `}
`;

const NavBar = () => {
    return (
        <Nav>
            <Toolbar>
                <ChangePage to='/'>
                    <Logo src={logo} />
                </ChangePage>
                <Pages>
                    <ChangePage to='/product'>
                        <Page src={foods} />
                    </ChangePage>
                    <ChangePage to='/'>
                        <Page src={bell} />
                    </ChangePage>
                    <ChangePage to='/order'>
                        <Page src={cart} />
                    </ChangePage>
                    <ChangePage to='/profile'>
                        <Page src={profilePic} account />
                    </ChangePage>
                    <ChangePage to='/add'>
                        <Page src={add} />
                    </ChangePage>
                </Pages>
            </Toolbar>
        </Nav>
    );
};

export default NavBar;
