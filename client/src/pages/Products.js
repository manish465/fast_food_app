import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { NavBar, Pane } from "../components";
import styled from "styled-components";
import { url } from "../adapter";
import { userContext } from "../context/auth";

const Tabs = styled.div`
    height: 60px;
    background-color: ${({ theme }) => theme.colors.textColor};
    border-radius: 0 0 20px 20px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const Tab = styled.div`
    cursor: pointer;
`;

const tabData = [
    { name: "Burger" },
    { name: "Chicken" },
    { name: "Fries" },
    { name: "Tacos" },
    { name: "Dessert" },
    { name: "Misc." },
];

const Products = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].name);
    const [list, setList] = useState([]);
    const { authData } = useContext(userContext);

    useEffect(() => {
        axios
            .get("/item/type/" + activeTab, {
                headers: { Authorization: "Bearer " + authData.token },
            })
            .then((res) => setList(res.data.result))
            .catch((err) => console.log(err));
    }, [activeTab, list, authData.token]);

    return (
        <>
            <NavBar />
            <Tabs>
                {tabData.map((tab, key) => (
                    <Tab key={key} onClick={() => setActiveTab(tab.name)}>
                        {tab.name}
                    </Tab>
                ))}
            </Tabs>
            <Pane list={list} activeTab={activeTab} />
        </>
    );
};

export default Products;
