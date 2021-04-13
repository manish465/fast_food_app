import styled, { css } from "styled-components";
import { add, bell, cart, foods, logo } from "../assets/svg";
import profilePic from "../assets/images/profile.jpg";

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
                <Logo src={logo} />
                <Pages>
                    <Page src={foods} />
                    <Page src={bell} />
                    <Page src={cart} />
                    <Page src={profilePic} account />
                    <Page src={add} />
                </Pages>
            </Toolbar>
        </Nav>
    );
};

export default NavBar;
