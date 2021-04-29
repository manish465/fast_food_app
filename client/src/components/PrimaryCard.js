import { useContext } from "react";
import styled from "styled-components";

import { FlexColoumn } from "../styles";
import { ChangePage } from "../styles";
import { picturebase } from "../adapter";
import { productContext } from "../context/product";

const ContainerCard = styled.div`
    width: 400px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 30px;
    padding: 30px 10px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    margin: 10px;
`;

const ContainerCardImage = styled.img`
    width: 95%;
    height: 75%;
    margin: 0 auto;
    display: block;
    border-radius: 30px;
    object-fit: fill;
`;

const ContainerCardName = styled.h5`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 4px 0;
`;

const ContainerCardRestaurantName = styled.h6`
    font-size: 0.6rem;
    font-family: regular;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 4px 0;
`;
const ContainerCardPrice = styled.h6`
    font-size: 0.6rem;
    font-family: regular;
    color: ${({ theme }) => theme.colors.primaryColor};
    margin: 4px 0;
`;

const ContainerCardButton = styled.button`
    width: 100%;
    padding: 10px 0;
    border: none;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    cursor: pointer;
    &:focus {
        outline: none;
    }
    color: ${({ theme }) => theme.colors.textColor};
    font-family: Regular;
    font-weight: bold;
    background-color: ${({ theme }) => theme.colors.accentColor};
`;

const PrimaryCard = ({ _id, main_pic, name, price, restaurant }) => {
    const { productList, setProductList } = useContext(productContext);

    const handelAddProductToCart = (product) => {
        const idExists = productList.find((item) => item.id === product.id);
        idExists
            ? setProductList((prev) =>
                  prev.map((item) =>
                      item.id === product.id
                          ? { ...idExists, multiple: item.multiple + 1 }
                          : item,
                  ),
              )
            : setProductList((prev) => [...prev, { ...product, multiple: 1 }]);
    };

    return (
        <ContainerCard>
            <ChangePage to={"/product/" + _id}>
                <ContainerCardImage src={picturebase + main_pic} />
            </ChangePage>
            <FlexColoumn>
                <ContainerCardName>{name}</ContainerCardName>
                <ContainerCardRestaurantName>
                    From {restaurant}
                </ContainerCardRestaurantName>
                <ContainerCardPrice>${price}</ContainerCardPrice>
                <ContainerCardButton
                    onClick={() =>
                        handelAddProductToCart({
                            img: main_pic,
                            title: name,
                            price: price,
                            id: _id,
                        })
                    }>
                    ADD
                </ContainerCardButton>
            </FlexColoumn>
        </ContainerCard>
    );
};

export default PrimaryCard;
