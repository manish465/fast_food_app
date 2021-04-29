import { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { NavBar } from "../components";
import { FlexColoumn, Padding, SizedBox } from "../styles";
import { del } from "../assets/svg";
import deafultIMG from "../assets/images/fast-food.jpg";
import { useState } from "react";

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 5% 20%;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Heading = styled.h1`
    font-size: 1.5rem;
    font-family: antonio;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const OrderTab = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const OrderIMG = styled.img`
    width: 80px;
    height: 50px;
`;
const OrderInfo = styled.h5`
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textColor};
`;

const OrderDEL = styled.img`
    cursor: pointer;
`;

const Checkout = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const CheckoutPrice = styled.h4`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const CheckoutButton = styled.button`
    width: 200px;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: ${({ theme }) => theme.colors.textColor};
    font-weight: bold;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;

const Order = () => {
    const [orderData, setOrderData] = useState([
        { img: deafultIMG, title: "Cheeseburger1", multiple: 3, price: 23.45 },
        { img: deafultIMG, title: "Cheeseburger2", multiple: 3, price: 23.45 },
        { img: deafultIMG, title: "Cheeseburger3", multiple: 3, price: 23.45 },
        { img: deafultIMG, title: "Cheeseburger4", multiple: 3, price: 23.45 },
        { img: deafultIMG, title: "Cheeseburger5", multiple: 3, price: 23.45 },
        { img: deafultIMG, title: "Cheeseburger6", multiple: 3, price: 23.45 },
    ]);

    return (
        <>
            <NavBar />
            <MainContainer>
                <Padding padding='30px 40px'>
                    <FlexColoumn>
                        <Heading>Your Order</Heading>
                        <SizedBox height='20px' />
                        {orderData.map((data, key) => (
                            <OrderTab key={key}>
                                <OrderInfo>{key + 1}.</OrderInfo>
                                <OrderIMG src={data.img} />
                                <OrderInfo>{data.title}</OrderInfo>
                                <OrderInfo>X{data.multiple}</OrderInfo>
                                <OrderInfo>${data.price}</OrderInfo>
                                <OrderDEL
                                    src={del}
                                    onClick={() =>
                                        setOrderData((prevState) => {
                                            let temp = [...prevState];
                                            temp.splice(key, 1);
                                            return temp;
                                        })
                                    }
                                />
                            </OrderTab>
                        ))}
                        <SizedBox height='20px' />
                        <Checkout>
                            <CheckoutPrice>$88.56</CheckoutPrice>
                            <CheckoutButton>CHECKOUT</CheckoutButton>
                        </Checkout>
                    </FlexColoumn>
                </Padding>
            </MainContainer>
        </>
    );
};

export default Order;
