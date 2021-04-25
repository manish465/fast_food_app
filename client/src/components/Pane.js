import styled from "styled-components";
import { SecondaryCard } from "./";
import { Padding } from "../styles";

const ContainerCards = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Pane = ({ list }) => {
    return (
        <Padding padding='30px 20px'>
            <ContainerCards>
                {list
                    ? list.map(({ _id, main_pic, name, price }, key) => (
                          <SecondaryCard
                              key={key}
                              _id={_id}
                              main_pic={main_pic}
                              name={name}
                              price={price}
                          />
                      ))
                    : "Loading..."}
            </ContainerCards>
        </Padding>
    );
};

export default Pane;
