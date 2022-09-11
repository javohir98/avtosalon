import React from 'react'
import { Button, Close, Container, Form, FormGroup, FormLine, FormRowBox, Header, Input, Label, TextArea, Wrapper } from '../Module.style'
import { IoMdClose } from 'react-icons/io'
import tag from '../../assets/images/tag_dark.png'
import { useForm } from "react-hook-form";

const AddCarModule = ({close}) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const formData = new FormData();
        formData.append("file", data.file[0]);
        console.log(data.file[0]);
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
                        <Input {...register("name")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Tanirovkasi</Label>
                        <Input {...register("file")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Motor</Label>
                        <Input {...register("name")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Year</Label>
                        <Input {...register("text")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Color</Label>
                        <Input {...register("name")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Distance</Label>
                        <Input {...register("file")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Gearbook</Label>
                        <Input {...register("name")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Narxi</Label>
                        <Input {...register("price")} type={'text'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Rasm 360 ichki makon</Label>
                        <Input {...register("name")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Rasm 360 tashqi makon</Label>
                        <Input {...register("file")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormGroup>
                    <FormRowBox>
                        <Label>Deseription</Label>
                        <TextArea rows={6} {...register("name")} type={'file'} placeholder='Mazmuni kiriting' />
                    </FormRowBox>
                    <FormRowBox>
                        <Label>Modeli turi uchun rasm </Label>
                        <Input {...register("file")} type={'file'} placeholder='Kiriting' />
                    </FormRowBox>
                </FormGroup>
                <FormLine />
                <Button type='submit'>Saqlash</Button>
            </Form>
        </Container>
    </Wrapper>
  )
}

export default AddCarModule