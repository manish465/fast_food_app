import styled from "styled-components";
import { SecondaryCard } from "./";
import { Padding } from "../styles";

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Pane = () => {
    return (
        <Padding padding='30px 20px'>
            <ContainerCards>
                <SecondaryCard />
            </ContainerCards>
        </Padding>
    );
};

export default Pane;
