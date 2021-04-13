import styled from "styled-components";
import {
    FlexColoumn,
    Padding,
    TextBox,
    SizedBox,
    Button,
    FlexRow,
} from "../styles";

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 10% 20%;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const SignIn = () => {
    return (
        <MainContainer>
            <Padding padding='30px 40px'>
                <FlexColoumn>
                    <Heading>Sign In</Heading>
                    <TextBox placeholder='Enter Email' />
                    <SizedBox height='15px' />
                    <TextBox placeholder='Enter Password' />
                    <SizedBox height='15px' />
                    <FlexRow space_between>
                        <Button>Sign In</Button>
                        <Button>Sign In</Button>
                    </FlexRow>
                </FlexColoumn>
            </Padding>
        </MainContainer>
    );
};

export default SignIn;
