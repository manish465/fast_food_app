import { useState, useEffect } from "react";
import { NavBar, Pane } from "../components";
import styled from "styled-components";

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
    { name: "Drinks" },
    { name: "Fries" },
    { name: "Sandwich" },
    { name: "Other" },
];

const Products = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].name);
    useEffect(() => console.log(activeTab), [activeTab]);
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
            <Pane activeTab={activeTab} />
        </>
    );
};

export default Products;
