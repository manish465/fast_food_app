import { useState } from "react";
import styled from "styled-components";
import fastFood from "../assets/images/fast-food.jpg";
import { FlexColoumn } from "../styles";
import { add, done } from "../assets/svg";

const ContainerCard = styled.div`
    width: 220px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 30px;
    padding: 10px 10px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    margin: 10px;
`;

const ContainerCardImage = styled.img`
    width: 100%;
    margin: 0 auto;
    display: block;
    border-radius: 30px;
    object-fit: cover;
`;

const ContainerCardName = styled.h5`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.accentColor};
    margin: 4px 0;
`;

const ContainerCardPrice = styled.h6`
    font-size: 0.6rem;
    font-family: regular;
    color: ${({ theme }) => theme.colors.accentColor};
    margin: 4px 0;
`;

const ContainerCardButton = styled.button`
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:focus {
        outline: none;
    }
`;

const ContainerCardButtonIcon = styled.img`
    width: 20px;
    fill: ${({ theme }) => theme.colors.accentColor};
`;

const SecondaryCard = () => {
    const [buttonContent, setButtonContent] = useState(add);
    return (
        <ContainerCard>
            <ContainerCardImage src={fastFood} />
            <FlexColoumn>
                <ContainerCardName>Cheeseburger</ContainerCardName>
                <ContainerCardPrice>$61.32</ContainerCardPrice>
                <ContainerCardButton
                    onClick={() =>
                        setButtonContent((prevState) =>
                            prevState === add ? done : add,
                        )
                    }>
                    <ContainerCardButtonIcon src={buttonContent} />
                </ContainerCardButton>
            </FlexColoumn>
        </ContainerCard>
    );
};

export default SecondaryCard;
