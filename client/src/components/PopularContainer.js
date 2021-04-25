import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { SecondaryCard } from "./";
import { url } from "../adapter";
import { userContext } from "../context/auth";

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
    const [list, setList] = useState([]);
    const { authData } = useContext(userContext);

    useEffect(() => {
        axios
            .get(url + "item/popular", {
                headers: { Authorization: "Bearer " + authData.token },
            })
            .then((res) => {
                setList(res.data.result);
                console.log(res);
            });
    }, [authData.token]);
    return (
        <Container>
            <ContainerHeader>Popular Order</ContainerHeader>
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
        </Container>
    );
};

export default PopularContainer;
