import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

import profile_pic from "../assets/images/profile.jpg";
import { userContext } from "../context/auth";
import { url } from "../adapter";
import { add, bell, cart, foods, logo } from "../assets/svg";
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
    const { authData, setAuthData } = useContext(userContext);
    useEffect(() => {
        axios(`${url}users`, {
            headers: { authorization: "Bearer " + authData },
        })
            .then((res) =>
                setAuthData((prev) => ({ ...prev, user: res.data.user })),
            )
            .catch((err) => console.log(err));
    }, [authData, setAuthData]);
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
                                    ? authData.user.profile_pic
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
