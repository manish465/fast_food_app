import styled from "styled-components";
import { SecondaryCard } from "./";
import { Padding } from "../styles";

const ContainerHeader = styled.h3`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.accentColor};
`;

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Pane = () => {
    return (
        <Padding padding='30px 20px'>
            <ContainerHeader>Popular Order</ContainerHeader>
            <ContainerCards>
                <SecondaryCard />
            </ContainerCards>
        </Padding>
    );
};

export default Pane;
