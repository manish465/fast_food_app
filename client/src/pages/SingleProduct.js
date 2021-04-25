import styled from "styled-components";
import { NavBar } from "../components";
import { Padding, SizedBox } from "../styles";

import fastFood from "../assets/images/fast-food.jpg";

const Coloumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const ProductImage = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 0 0 30px 30px;
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
    return (
        <>
            <NavBar />
            <Coloumn>
                <ProductImage src={fastFood} />
            </Coloumn>
            <Padding padding='10px 30px'>
                <ProductName>Cheeseburgerv</ProductName>
                <Padding padding='0px 10px'>
                    <ProductResturntName>From T-sub</ProductResturntName>
                    <ProductPrice>$49.23</ProductPrice>
                    <SizedBox height='15px' />
                    <ProductButton>ADD</ProductButton>
                    <SizedBox height='15px' />
                    <ProductDescription>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ratione, magni nulla quia accusantium cum iure
                        earum id sed neque ipsa. Tempora assumenda commodi culpa
                        cum doloribus at in exercitationem a, quos nobis
                        sapiente doloremque, iste ad ratione sunt dolores
                        quisquam repudiandae temporibus dolore sequi
                        perspiciatis sed? Voluptas veniam iusto quisquam nulla!
                        Similique est reprehenderit, excepturi quasi eos facere,
                        soluta voluptatum expedita totam distinctio itaque eum
                        dolor. Ut repudiandae pariatur doloribus dolore eligendi
                        consectetur necessitatibus itaque, magnam tempore quia
                        aspernatur iusto modi, ratione perspiciatis? Quia
                        laborum, magni, similique dolore fugit et porro eius,
                        accusamus ipsum odio quaerat velit quis quidem
                        repudiandae!
                    </ProductDescription>
                </Padding>
            </Padding>
        </>
    );
};

export default SingleProduct;
