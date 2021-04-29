import { useContext } from "react";
import styled from "styled-components";

import { FlexColoumn, ChangePage } from "../styles";
import { add } from "../assets/svg";
import { picturebase } from "../adapter";
import { productContext } from "../context/product";

const ContainerCard = styled.div`
    width: 220px;
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    border-radius: 30px;
    padding: 10px 10px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    margin: 10px;
`;

const ContainerCardImage = styled.img`
    width: 100%;
    margin: 0 auto;
    display: block;
    border-radius: 30px;
    object-fit: cover;
`;

const ContainerCardName = styled.h5`
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.accentColor};
    margin: 4px 0;
`;

const ContainerCardPrice = styled.h6`
    font-size: 0.6rem;
    font-family: regular;
    color: ${({ theme }) => theme.colors.accentColor};
    margin: 4px 0;
`;

const ContainerCardButton = styled.button`
    width: 40px;
    height: 40px;
    border: 4px solid ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    background-color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    color: ${({ theme }) => theme.colors.accentColor};
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
        outline: none;
    }
`;

const ContainerCardButtonIcon = styled.img`
    width: 20px;
    fill: ${({ theme }) => theme.colors.accentColor};
`;

const SecondaryCard = ({ _id, main_pic, name, price }) => {
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
                    <ContainerCardButtonIcon src={add} />
                </ContainerCardButton>
            </FlexColoumn>
        </ContainerCard>
    );
};

export default SecondaryCard;
