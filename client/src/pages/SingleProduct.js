import { useEffect, useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { NavBar } from "../components";
import { Padding, SizedBox } from "../styles";
import { userContext } from "../context/auth";
import { url, picturebase } from "../adapter";
import { productContext } from "../context/product";

const Coloumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
    border-radius: 0 0 30px 30px;
    margin-top: 20px;
`;

const ProductName = styled.h2`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondaryColor};
    font-weight: bold;
    margin: 10px 0;
`;

const ProductResturntName = styled.h4`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: normal;
    margin: 10px 0;
`;

const ProductPrice = styled.h4`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: normal;
    margin: 10px 0;
`;

const ProductDescription = styled.h6`
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.accentColor};
    font-weight: normal;
    margin: 10px 0;
`;

const ProductButton = styled.button`
    width: 200px;
    padding: 10px 0;
    border: none;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textColor};
    font-family: antonio;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.accentColor};
    &:focus {
        outline: none;
    }
`;

const SingleProduct = () => {
    const { id } = useParams();
    const { authData } = useContext(userContext);
    const { productList, setProductList } = useContext(productContext);

    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(url + "item/one-item/" + id, {
                headers: { Authorization: "Bearer " + authData.token },
            })
            .then((res) => setData(res.data.result))
            .catch((err) => console.log(err));
    }, [authData.token, id]);

    const handelAddProductToCart = (id) => {
        const idExists = productList.find((product) => product.id === id);
        idExists
            ? setProductList((prev) =>
                  prev.map((item) =>
                      item.id === id
                          ? { ...idExists, multiple: item.multiple + 1 }
                          : item,
                  ),
              )
            : setProductList((prev) => [...prev, { id, multiple: 1 }]);
    };

    return (
        <>
            <NavBar />
            <Coloumn>
                {data ? (
                    <ProductImage src={picturebase + data.main_pic} />
                ) : (
                    "Loading..."
                )}
            </Coloumn>
            <Padding padding='10px 30px'>
                <ProductName>{data ? data.name : "Loading..."}</ProductName>
                <Padding padding='0px 10px'>
                    <ProductResturntName>
                        From {data ? data.restaurant : "Loading..."}
                    </ProductResturntName>
                    <ProductPrice>
                        ${data ? data.price : "Loading..."}
                    </ProductPrice>
                    <SizedBox height='15px' />
                    <ProductButton onClick={() => handelAddProductToCart(id)}>
                        ADD
                    </ProductButton>
                    <SizedBox height='15px' />
                    <ProductDescription>
                        {data ? data.description : "Loading..."}
                    </ProductDescription>
                </Padding>
            </Padding>
        </>
    );
};

export default SingleProduct;
