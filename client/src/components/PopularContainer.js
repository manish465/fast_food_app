import styled from "styled-components";
import { SecondaryCard } from "./";

const Container = styled.div`
    padding: 5px 10px;
`;

const ContainerHeader = styled.h3`
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.accentColor};
`;

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const PopularContainer = () => {
    return (
        <Container>
            <ContainerHeader>Popular Order</ContainerHeader>
            <ContainerCards>
                <SecondaryCard />
            </ContainerCards>
        </Container>
    );
};

export default PopularContainer;
