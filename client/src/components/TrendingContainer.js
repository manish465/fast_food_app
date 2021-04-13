import styled from "styled-components";
import { PrimaryCard } from "./index";

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

const TrendingContainer = () => {
    return (
        <>
            <Container>
                <ContainerHeader>Treanding Today</ContainerHeader>
                <ContainerCards>
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                    <PrimaryCard />
                </ContainerCards>
            </Container>
        </>
    );
};

export default TrendingContainer;
