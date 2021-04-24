import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { NavBar } from "../components";
import { FlexColoumn, Padding, TextBox, SizedBox } from "../styles";
import deafultIMG from "../assets/images/fast-food.jpg";
import { url } from "../adapter";

const MainContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    margin: 5% 20%;
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const Heading = styled.h1`
    font-size: 2.5rem;
    font-family: bold;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

const Select = styled.select`
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const SaveButton = styled.button`
    border: 3px solid ${({ theme }) => theme.colors.primaryColor};
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    padding: 10px 80px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.default};
    &:focus {
        outline: none;
    }
`;

const AddImageIMG = styled.img`
    width: 200px;
    object-fit: contain;
    border-radius: 5%;
`;

const AddImageButton = styled.input`
    width: 0;
    height: 0;
    overflow: hidden;
    display: hidden;
`;

const AddImageButtonLabel = styled.label`
    padding: 10px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
    color: ${({ theme }) => theme.colors.textColor};
    box-shadow: ${({ theme }) => theme.shadow.default};
`;

const AddProduct = () => {
    const [image, setImage] = useState(deafultIMG);
    const { register, getValues, watch } = useForm();
    const history = useHistory();
    const main_pic = watch("main_pic");

    useEffect(() => {
        try {
            setImage(URL.createObjectURL(main_pic[0]));
        } catch (err) {
            setImage(deafultIMG);
        }
    }, [main_pic, setImage]);

    const handelSubmit = () => {
        const data = new FormData();
        data.append("main_pic", main_pic[0]);
        data.append("name", getValues("name"));
        data.append("restaurant", getValues("restaurant"));
        data.append("description", getValues("description"));
        data.append("type", getValues("type"));
        data.append("rating", getValues("rating"));

        axios
            .post(url + "item/add", data, {
                headers: {
                    Authorization:
                        "Bearer " +
                        JSON.parse(localStorage.getItem("auth")).token,
                },
            })
            .then(() => {
                history.push("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <NavBar />
            <MainContainer>
                <Padding padding='30px 40px'>
                    <FlexColoumn>
                        <Heading>Add A Product</Heading>
                        <AddImageIMG src={image} />
                        <SizedBox height='15px' />
                        <AddImageButtonLabel>
                            Add Profile Picture
                            <AddImageButton
                                type='file'
                                accept='.png, .jpg, .jpeg'
                                {...register("main_pic")}
                            />
                        </AddImageButtonLabel>
                        <SizedBox height='15px' />
                        <TextBox
                            placeholder='Enter Name'
                            {...register("name")}
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            placeholder='Enter Restaurant Name'
                            {...register("restaurant")}
                        />
                        <SizedBox height='15px' />
                        <TextBox
                            placeholder='Enter Product Description'
                            {...register("description")}
                        />
                        <SizedBox height='15px' />
                        <Select {...register("type")}>
                            <option>Burger</option>
                            <option>Drink</option>
                            <option>Fries</option>
                            <option>Sandwich</option>
                            <option>Other</option>
                        </Select>
                        <SizedBox height='15px' />
                        <TextBox
                            type='number'
                            placeholder='Enter Rating'
                            {...register("rating")}
                        />
                        <SizedBox height='25px' />
                        <SaveButton onClick={handelSubmit}>SAVE</SaveButton>
                    </FlexColoumn>
                </Padding>
            </MainContainer>
        </>
    );
};

export default AddProduct;
