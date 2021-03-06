import { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { userContext } from "../context/auth";
import { NavBar } from "../components";
import { picturebase } from "../adapter";
import { FlexColoumn, Padding, SizedBox, TextBox, Button } from "../styles";
import deafultIMG from "../assets/images/profile.jpg";
import { edit } from "../assets/svg";

const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: antonio;
    color: ${({ theme }) => theme.colors.accentColor};
    margin: 10px 0;
`;

const AddImageIMG = styled.img`
    width: 200px;
    height: 200px;
    object-fit: contain;
    border-radius: 50%;
`;

const AddImageButton = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    display: hidden;
`;

const AddImageButtonLabel = styled.label`
    padding: 10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Info = styled.h1`
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: ${({ normal }) => (normal ? "normal" : "bold")};
    margin: 2px;
    font-size: ${({ normal }) => (normal ? "1rem" : "1.6rem")};
    font-style: ${({ normal }) => (normal ? "italic" : "normal")};
`;

const InfoSVG = styled.img`
    margin-left: 10px;
    cursor: pointer;
`;

const SignOutButton = styled.button`
    cursor: pointer;
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 30px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const Modal = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalForm = styled.div`
    width: 60%;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    padding: 30px 20px;
    border-radius: 30px;
`;

const Profile = () => {
    const { authData, setAuthData } = useContext(userContext);
    const history = useHistory();
    const [image, setImage] = useState(
        authData.user ? picturebase + authData.user.picture : deafultIMG,
    );
    const [openModal, setOpenModal] = useState(false);

    const handelChange = (event) => {
        try {
            setImage(URL.createObjectURL(event.target.files[0]));
        } catch (err) {
            setImage(deafultIMG);
        }
    };

    const handelSignOut = () => {
        localStorage.removeItem("auth");
        setAuthData(null);
        history.push("/sign-in");
    };
    return (
        <>
            {openModal ? (
                <Modal>
                    <ModalForm>
                        <FlexColoumn>
                            <TextBox placeholder='Update Feild' />
                            <SizedBox height='15px' />
                            <Button primary onClick={() => setOpenModal(false)}>
                                Update
                            </Button>
                        </FlexColoumn>
                    </ModalForm>
                </Modal>
            ) : null}
            <NavBar />
            <Padding padding='10px 10px'>
                <FlexColoumn>
                    <Heading>Profile</Heading>
                    <AddImageIMG src={image} />
                    <SizedBox height='5px' />
                    <AddImageButtonLabel>
                        Add Profile Picture
                        <AddImageButton type='file' onChange={handelChange} />
                    </AddImageButtonLabel>
                    <SizedBox height='15px' />
                    <Info>
                        {authData.user ? authData.user.name : "Loading ..."}
                        <InfoSVG
                            src={edit}
                            onClick={() => setOpenModal(true)}
                        />
                    </Info>
                    <Info normal>
                        {authData.user ? authData.user.email : "Loading ..."}
                        <InfoSVG
                            src={edit}
                            onClick={() => setOpenModal(true)}
                        />
                    </Info>
                    <Info normal>
                        {authData.user ? authData.user.phone_no : "Loading ..."}
                        <InfoSVG
                            src={edit}
                            onClick={() => setOpenModal(true)}
                        />
                    </Info>
                    <Info normal>
                        {authData.user ? authData.user.address : "Loading ..."}
                        <InfoSVG
                            src={edit}
                            onClick={() => setOpenModal(true)}
                        />
                    </Info>
                    <SizedBox height='35px' />
                    <SignOutButton onClick={handelSignOut}>
                        Sign Out
                    </SignOutButton>
                </FlexColoumn>
            </Padding>
        </>
    );
};

export default Profile;
