import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { NavBar } from "../components";
import { FlexColoumn, Padding, SizedBox } from "../styles";
import { del } from "../assets/svg";
import { productContext } from "../context/product";
import { picturebase } from "../adapter";

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
    object-fit: contain;
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
    const { productList, setProductList } = useContext(productContext);
    const [totalPrice, setTotalPrice] = useState(0.0);

    useEffect(() => {
        setTotalPrice(
            productList.reduce(
                (total, product) => total + product.price * product.multiple,
                0,
            ),
        );
    }, [productList]);

    return (
        <>
            <NavBar />
            <MainContainer>
                <Padding padding='30px 40px'>
                    <FlexColoumn>
                        <Heading>Your Order</Heading>
                        <SizedBox height='20px' />
                        {productList.length !== 0 ? (
                            productList.map((data, key) => (
                                <OrderTab key={key}>
                                    <OrderInfo>{key + 1}.</OrderInfo>
                                    <OrderIMG src={picturebase + data.img} />
                                    <OrderInfo>{data.title}</OrderInfo>
                                    <OrderInfo>X{data.multiple}</OrderInfo>
                                    <OrderInfo>${data.price}</OrderInfo>
                                    <OrderDEL
                                        src={del}
                                        onClick={() =>
                                            setProductList((prevState) => {
                                                let temp = [...prevState];
                                                temp.splice(key, 1);
                                                return temp;
                                            })
                                        }
                                    />
                                </OrderTab>
                            ))
                        ) : (
                            <>ADD AN ITEM</>
                        )}
                        <SizedBox height='20px' />
                        <Checkout>
                            <CheckoutPrice>${totalPrice}</CheckoutPrice>
                            <CheckoutButton>CHECKOUT</CheckoutButton>
                        </Checkout>
                    </FlexColoumn>
                </Padding>
            </MainContainer>
        </>
    );
};

export default Order;
