import { useContext } from "react";
import styled, { css } from "styled-components";

import profile_pic from "../assets/images/profile.jpg";
import { userContext } from "../context/auth";
import { add, bell, cart, foods, logo } from "../assets/svg";
import { ChangePage } from "../styles";
import { picturebase } from "../adapter";

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
            object-fit: cover;
            height: 20px;
            border-radius: 50%;
        `}
`;

const NavBar = () => {
    const { authData } = useContext(userContext);

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
                        <Page
                            src={
                                authData
                                    ? picturebase + authData.user.picture
                                    : profile_pic
                            }
                            account
                        />
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
