import { useEffect, useState, useContext } from "react";
import axios from "axios";
import styled from "styled-components";

import { PrimaryCard } from "./";
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

const TrendingContainer = () => {
    const [list, setList] = useState([]);
    const { authData } = useContext(userContext);

    useEffect(() => {
        axios
            .get(url + "item/trending", {
                headers: { Authorization: "Bearer " + authData.token },
            })
            .then((res) => setList(res.data.result));
    }, [authData.token]);

    return (
        <Container>
            <ContainerHeader>Treanding Today</ContainerHeader>
            <ContainerCards>
                {list
                    ? list.map(
                          ({ _id, main_pic, name, price, restaurant }, key) => (
                              <PrimaryCard
                                  key={key}
                                  _id={_id}
                                  main_pic={main_pic}
                                  name={name}
                                  price={price}
                                  restaurant={restaurant}
                              />
                          ),
                      )
                    : "Loading..."}
            </ContainerCards>
        </Container>
    );
};

export default TrendingContainer;
