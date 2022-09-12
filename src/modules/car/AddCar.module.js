import React, { useState } from 'react'
import { Button, Close, Container, Form, FormGroup, FormLine, FormRowBox, Header, Input, Label, Option, Select, TextArea, Wrapper } from '../Module.style'
import { IoMdClose } from 'react-icons/io'
import tag from '../../assets/images/tag_dark.png'
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddCarModule = ({close}) => {
    const { register, handleSubmit, reset } = useForm();
    const categories = useSelector(state => state.user.category)
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async data => {
        const formData = new FormData();
        formData.append("file", data.imgUrl[0]);
        setIsLoading(true)

        await axios.post('https://cartestwebapp.herokuapp.com/upload', formData)
        .then((res) => {
            let temporarilyData = {
                "imgUrl": res.data.data,
                "imgUrlInside":"img-db607b3fdb99095051f37c849887ace7.jpg",
                "imgUrlAutside":"img-9c3a72917ef084370f9130349ed33445.jpg",
                "price": parseInt(data.price),
                "year": parseInt(data.year),
                "description": data.description,
                "tonirovka": data.tonirovka,
                "motor": data.motor,
                "color": data.color,
                "distance": data.distance,
                "gearbok": data.gearbok,
                "categoryId": data.categoryId
            }
            
            addCar(temporarilyData)
        })
        
    }

    const addCar = async (data) => {

        await axios.post('https://cartestwebapp.herokuapp.com/car', data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('Auth Token')
            }
            
        })
        .then((res) => {
            setIsLoading(false)
            reset()
            close(false)
        })
    }

  return (
    <Wrapper>
        <Container>
            <Header>
                <div className='title'>
                    <img src={tag} />
                    <h3>Mashina qo’shish</h3>
                </div>
                <Close onClick={() => close(false)}>
                    <IoMdClose />
                </Close>
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <FormRowBox>
                        <Label>Markasi</Label>
                        <Select {...register("categoryId")}>
                            {categories.map((item) => (
                                <Option value={item._id}>{item.name}</Option>
                            ))}
                        </Select>
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Tanirovkasi</Label>
                        <Select {...register("tonirovka")}>
                            <Option value='bor'>bor</Option>
                            <Option value="yo'q">yo'q</Option>
                        </Select>
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Motor</Label>
                        <Input {...register("motor")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Year</Label>
                        <Input {...register("year")} type={'number'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Color</Label>
                        <Input {...register("color")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Distance</Label>
                        <Input {...register("distance")} type={'number'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Gearbook</Label>
                        <Input {...register("gearbok")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Narxi</Label>
                        <Input {...register("price")} type={'number'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Rasm 360 ichki makon</Label>
                        <Input {...register("imgUrlInside")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Rasm 360 tashqi makon</Label>
                        <Input {...register("imgUrlAutside")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Deseription</Label>
                        <TextArea rows={6} {...register("description")} type={'text'} placeholder='Mazmuni kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Modeli turi uchun rasm </Label>
                        <Input {...register("imgUrl")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormLine />
                <Button disabled={isLoading} type='submit'>Saqlash</Button>
            </Form>
        </Container>
    </Wrapper>
  )
}

export default AddCarModule